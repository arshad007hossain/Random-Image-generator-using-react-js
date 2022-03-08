import React, { Component } from 'react'



class Counter extends Component {
 
    state = {
        count: 1,
        imageUrl: "https://picsum.photos/200"
    }

   
    render() { 
        return (
        <>
            <button style = {{position:"absolute"}} onClick={pageReload}>Click to Change Image</button>
            <img  style = {{padding:20}} src={this.state.imageUrl} alt="" />
            
        </>);
        }
        
}

const pageReload = () => {
  window.location.reload()
}
export default Counter;