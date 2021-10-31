import React, { Component } from 'react';
import './App.css';
import 'popper.js';
import { event } from 'jquery';
class App extends Component{
constructor(props) { 
   super(props);  
   this.state=({
    ShowMenu:false
  })
   this.ShowMenu = this.ShowMenu.bind(this)
 }
 render(){
  return(
    <div id="Menu" onClick={(e)=>{this.ShowMenu(null,1)}}> 
      <div id="Menu1" onClick={(e)=>{e.stopPropagation()}} className="text-center">coming <br></br>soon </div>
      <div id="Menu2" onClick={(e)=>{this.ShowMenu(e,2)}}><span> &equiv;</span> </div>
    </div>
  );
}
 ShowMenu(event,show){ // 定義changeName
    this.setState({
      ShowMenu:show==1?false : !this.state.ShowMenu
    },function(){
        if(this.state.ShowMenu)
         document.getElementById('Menu1').style.marginLeft='0%'
        else
          document.getElementById('Menu1').style.marginLeft='-36.6%'
      }
    );
    if(event!=null)
      event.stopPropagation();
  }
}

export default App;
