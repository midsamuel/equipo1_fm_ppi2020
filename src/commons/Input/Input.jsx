import React from 'react'
import './Input.css'
class Input extends React.Component{
    render(){
        return (
            <section>
                <div className= "input-container">
                <img src={this.props.img} alt=""/>
                <input type="text" value="" placeholder={this.props.placeholder}/>
                </div>
            </section>  
        )
    }
}

export default Input
