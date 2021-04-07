import React, { Component } from 'react'

export default class BindMetod extends Component {
    constructor(props){
        super(props)
        this.changeLesson=this.changeLesson.bind(this)
        this.state={
            name :" java",
            time : "4"            

        }
    }

    changeLesson(){
        this.setState({
            name : "react",
            time : "5"
        })
    }

    render() {
        return (
            <div>
                <p>Lesson Name : {this.state.name}</p>
                <p>Lesson Time : {this.state.time}</p>
                <button onClick={this.changeLesson}>Change Lesson</button>
            </div>
        )
    }
}
