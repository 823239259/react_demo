import React, { Component } from 'react';

import PubSub from "pubsub-js";
export class Search extends Component {
    // static  propTypes = {
    //     setSearchName: PropTypes.func.isRequired,
    // }
    
    search = ()=>{
        // const {setSearchName} = this.props
        const value = this.input.value.trim()
        // if(value){
        //     setSearchName(value)
        // }else{
        //     alert(`输入内容不能为空`)
        // }
        if(value){
            PubSub.publish('search',value)
        }else{
            alert(`输入内容不能为空`)
        }
        


    }
  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={input => this.input = input} placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
};

export default Search;
