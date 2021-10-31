
import React, { Component } from 'react';
import '../Css/Home.css';
import App from '../App';
class Home extends Component{
  componentDidMount(){
     //alert('GOGO')
     setTimeout(function(){
       document.getElementById('Mask').style.backgroundColor="transparent"
     }, 3600);
  }
 render(){
   return(
    <div  id="Main" className="Home"> 
        <App/>
        <div id="Mask" className="h-100">
          <div style={{height: "30%"}}><div id="MaskTop"></div></div>
          <div id="HomeBody" > 
            <span className="p-1">So,</span>
            <span className="p-1">What's</span>
            <span className="p-1">For</span>
            <span className="p-1">Lunch</span>
          </div>
          <div id="MaskBottom"></div>
          <div className="h-100" style={{backgroundColor: "black"}}></div>
        </div>
    </div>  
   );
 }
}


export default Home;