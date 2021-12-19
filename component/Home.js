
import React, { Component } from 'react';
import '../Css/Home.css';
import App from '../App';
class Home extends Component{
  componentDidMount(){
     //alert('GOGO')
      document.getElementById('Menu').style.display="none"
     setTimeout(function(){
       document.getElementById('Mask').style.backgroundColor="transparent"
     }, 3600);
     setTimeout(function(){
       document.getElementById('Menu').style.display="block"
     }, 5200);
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
          <div id="MaskBottom" className="MaskBottom"></div>
          <div className="MaskBottom" style={{height: "100%",backgroundColor: "black"}}></div>
        </div>
    </div>  
   );
 }
}


export default Home;