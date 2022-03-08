
import React, { Component } from 'react';
class ShowImg extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  }
 render(){
   return(
    <div id="ShowImg" className="w-100 h-100" style={{zIndex: "9999",position: "absolute",top: "0",background: "radial-gradient(black, transparent)"}} onClick={()=>{this.props.SetSrc()}}>
        <div  style={{top: "8%",position: "relative"}}> 
            <img src={this.props.src} className="w-100"></img>
        </div>  
    </div>    
   );
 }
}


export default ShowImg;