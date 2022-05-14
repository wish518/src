
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
        <div  className="w-100 h-75"  style={{margin: "10% auto",position: "relative",background:"url("+this.props.src+")",backgroundSize:"100% 100%"}}> 
        </div>  
    </div>    
   );
 }
}


export default ShowImg;