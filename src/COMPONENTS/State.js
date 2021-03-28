import React, { Component } from 'react'

class State extends Component {

    state = {
        gorunur : false,
        name : "My_First_React_Project" 
    }

    // // constructor(props) {
    // //     super(props)
    // //     this.state = {
    // //         gorunur: true
    // //     }

    // }
    render() {
        return (

            <div>
                <p> {this.state.name}</p>
                {
                    this.state.gorunur ? 
                    <div>
                        <h1>Advertesing </h1>
                        <p>Your's Advertesing</p> 
                    </div> :  <p> Reklam YOK </p>
                }
            </div>
        )
    }

}

export default State