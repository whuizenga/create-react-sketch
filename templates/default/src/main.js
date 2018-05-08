/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { render, View, Text, Image } from 'react-sketchapp'
import styled from 'styled-components/primitives'

const Header = styled.View`
    width: 500px;
    height: 190px;
    background-color: #24292F;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 24px;
    margin-bottom: 16px;
    color: #FFAD00;
`

const Body = styled.View`
    display: flex;
    align-items: center;
    padding: 8px;
`

const Code = styled.Text`
    font-family: Courier;
`
const Logo = styled.Image`
    height: 125px;
    width: 125px;
    margin-top: 16px;
`

const Document = (props) => {
    return (
        <View>
            <Header>
                <Logo source='https://i.imgur.com/NtLLscc.png' />
                <Title>Welcome to React-sketchapp!</Title>
            </Header>
            <Body>
                <Text>To get started, edit <Code>src/main.js</Code> and save to reload.</Text>
            </Body>
        </View>
    )
}


export default (context) => {
    render(<Document />, context.document.currentPage())
}