import React, { Component } from 'react'

export default class  extends Component {

   state = {
             sayac:0
        }
    

    BirerArtir(){

        // this.setState((prevState)=>({
        //     sayac:this.prevState.sayac+1

        // }))
         this.setState({
         sayac:this.state.sayac+1
         })
    }

    BirerAzalt(){
        this.setState({
            sayac : this.state.sayac-1
        })
    }

    Sifirla(){
        this.setState({
            sayac:0
        })
    }

      render() {
        return (
            <div>
                <h1>SAYAC: {this.state.sayac} </h1>
                <button onClick={()=>this.BirerArtir()}>Artir</button>
                <button onClick={()=>this.BirerAzalt()}>  Azalt</button>
                <button onClick={()=>this.Sifirla()}>Sifirla</button>
            </div>
        )
    }
}
