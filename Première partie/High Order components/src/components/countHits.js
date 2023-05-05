import React, { Component } from 'react';

const countHits = (WrapedComponent, power) => {

    class CountHits extends Component {

        state = {
            hits: 0
        }
        
        addOne = () => {
            this.setState(prevState => {
                return {
                    hits: prevState.hits + 1
                }
            })
        }

        componentDidUpdate(prevProps, prevState) {
          if (this.state !== prevState){
              const CompName = WrapedComponent.name
              this.props.reduceHandler(CompName, power);
          }
        }
        
        
        render(){
            return <WrapedComponent addOneHit={this.addOne} hocState={this.state} {...this.props} />
        }
    }

    return CountHits;
    
}



export default countHits;