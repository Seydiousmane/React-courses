import React, { Component } from 'react'

const hocComponent = (WrappedComponent) =>{

    class HocComponent extends Component{
        state = {
            bg: ''
        }
    
        handleClick = () => {
            if (WrappedComponent.name === "Frieza"){
                this.setState(prevState=>{
                    return {
                      bg: 'bg-danger'
                    }
                })
            } else {
                this.setState(prevState=>{
                    return {
                      bg: 'bg-success'
                    }
                })
            }
            
        }


        render(){
            if (this.state.bg === "bg-danger") {
                throw new Error()
            }

            return <WrappedComponent addClick={this.handleClick} {...this.props} bgState={this.state} />
        }
    
    }
    return HocComponent;
}


export default hocComponent;