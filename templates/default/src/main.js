import React, { Component } from 'react'
import { Artboard, Text, View, render } from 'react-sketchapp'

const Document = (props) => {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    )
}


export default (context) => {
    render(<Document />, context.document.currentPage())
}