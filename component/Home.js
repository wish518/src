
import React, { Component } from 'react';
import '../Css/Home.css';
import App from '../App';
class Home extends Component{
  componentDidMount(){
     //alert('GOGO')
      document.getElementById('Menu').style.display="none"
      document.getElementById('Menu2').style.display="none"
     setTimeout(function(){
       document.getElementById('Mask').style.backgroundColor="transparent"
     }, 3600);
     setTimeout(function(){
       document.getElementById('Menu').style.display="block"
       document.getElementById('Menu2').style.display="block"
     }, 5200);
  }
 render(){
   return(
    <div  id="HomeMain" className="Home h-100"> 
        <App/>
        <div id="Mask" className="h-100">
          <div style={{height: "30%"}}><div id="MaskTop"></div></div>
          <div id="HomeBody" > 
            <span className="p-1">True</span>
            <span className="p-1">(Two)</span>
            <span className="p-1">Equal</span>
            <span className="p-1">One</span>
          </div>
          <div id="MaskBottom" className="MaskBottom"></div>
          <div className="MaskBottom" style={{height: "100%",backgroundColor: "black"}}></div>
        </div>
    </div>  
   );
 }
}


export default Home;