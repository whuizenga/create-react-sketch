const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require("colors/safe");

// Set prompt as green and use the "Replace" text
prompt.message = colors.green("Replace");

module.exports = (args, options, logger) => {
    const variant = options.variant || 'default';
    const templatePath = `${__dirname}/../templates/${variant}`;
    const localPath = process.cwd();

    if (fs.existsSync(templatePath)) {
        logger.info('Creating sketch component..');
        shell.mkdir(`${args.name}`)
        shell.cp('-R', `${templatePath}/*`, `${localPath}/${args.name}`);
    } else {
        logger.error(`The requested template for ${args.template} wasn't found.`)
        process.exit(1);
    }

    const variables = require(`${templatePath}/_variables`);

    if (fs.existsSync(`${localPath}/${args.name}/_variables.js`)) {
        shell.rm(`${localPath}/${args.name}/_variables.js`);
    }

    // Replace variable values in all files
    shell.ls('-Rl', `${localPath}/${args.name}/package.json`).forEach(entry => {
        if (entry.isFile()) {
            // Replace '[VARIABLE]` with the corresponding variable value from the prompt
            variables.forEach(variable => {
            //   shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name);
            switch(variable){
                case 'name':
                    shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, args.name, entry.name);
                    break;
                case 'version':
                    shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, "0.0.1", entry.name);
                    break;
                case 'description':
                    shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, "react-sketchapp component bootstrapped with create-react-sketch", entry.name);
                    break;
                case 'author':
                    shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, "create-sketch-app", entry.name);
                    break;
                case 'license':
                    shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, "MIT", entry.name);
                    break;
                default:
                    break;
            }
            });
        }
    });
    
    shell.cd(`${args.name}`)
    shell.exec('npm install')
    logger.info('Component Created!');
    logger.info(`You may now 'cd ${args.name}' and 'npm run render'`)
    logger.info('Happy hacking!')
    //   });
};