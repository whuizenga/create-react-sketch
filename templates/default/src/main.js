import React, { Component } from 'react'
import { Artboard, Text, View, render } from 'react-sketchapp'

class Document extends Component {
    constructor(){
        super()
        this.state={
            message: "what up!"
        }
    }

    _onClick() {
        this.setState({
            message: 'i was clicked'
        })
    }
    render(){
        return (
            <Artboard>
                <View>
                    <Text onClick={this._onClick}>{this.state.message}</Text>
                </View>
            </Artboard>
        )
    }
}


export default (context) => {
    render(<Document />, context.document.currentPage())
}