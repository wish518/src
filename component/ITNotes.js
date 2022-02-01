import React, { Component } from 'react';
import '../Css/ITNote.css';
import App from '../App';

class ITNotes extends Component{
  constructor(props) {
    fetch(global.constants.P_API, {method: "get",headers: {'Content-Type':'application/json'}}) 
    .then(res => res.json()) 
    .then(data => {
      console.log(global.constants.P_API)
         console.log(data)
    })
    .catch(e => {
      console.log(e)
    })
    super(props);
  }
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