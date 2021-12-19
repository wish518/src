import React, { Component } from 'react';
import '../Css/ITNote.css';
import App from '../App';
class ITNotes extends Component{
  componentDidMount(){
     //alert('GOGO')
  }
 render(){
   return(
    <div  id="Main" className="ITNotes"> 
        <App/>
    </div>  
   );
 }
}


export default ITNotes;