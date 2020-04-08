import React, { Component } from 'react'
import {FaRegSadCry} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'

class Error404 extends Component {
    render() {
        console.log(this.props,'error');
        return (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                <div>
                    <FaRegSadCry style={svgStyle}/>
                    <h1 style={textCenter}>404</h1>                    
                    <p style={textCenter}>Page not found</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Error404)

const svgStyle={
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center',
    display: 'block',
    margin: 'auto',
    marginBottom: 30
}
const textCenter = {
    textAlign:'center',
    marginBottom: 30
}