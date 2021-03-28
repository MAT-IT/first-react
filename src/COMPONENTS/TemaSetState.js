import React, { Component } from 'react'

export default class Tema extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bg : "#000080" ,  color: "yellow" , word:"Yellow Contetnt"
        }
    }

    ChanceTema(){
        this.setState({
            bg : "#ADFF2F" ,  color: "black" , word:"Black Content"
        })

    }
    
    render() {
        return (
            <div>
                <h1 style= {{backgroundColor:this.state.bg , color : this.state.color}}>{this.state.word}</h1>
                <button onClick = {()=>this.ChanceTema()}>Tema Degistir</button>
            </div>
        )
    }
}
