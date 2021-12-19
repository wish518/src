import React, { Component } from 'react';
import './Css/App.css';
import 'popper.js';
import { Link } from 'react-router-dom';

class App extends Component{
constructor(props) { 
   super(props);  
   this.state=({
    ShowMenu:false,
    Func:"Index"
  })
   this.ShowMenu = this.ShowMenu.bind(this)
   this.ITNoteAction = this.ITNoteAction.bind(this)
  }
  componentDidMount(){}//第一次渲染完成
  componentDidUpdate(){}//渲染完成
  render(){
    let Menu1Link = "";
    if(this.state.Func == "Index")
    {
      Menu1Link=(
      <div id="Menu1Link">
        <div id="ITNote" className="Menu1LinkDiv"><div id="ITNoteLink1" className="Menu1Link" onClick={()=>{this.ITNoteAction("ITNoteLink1",'ITNotes')}}>IT筆記</div></div> 
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
      </div>);

    }
    else if(this.state.Func == "ITNotes")
    {
      Menu1Link=(
      <div id="Menu1Link">
        <div id="ITNote" className="Menu1LinkDiv"><div id="ITNoteLink1" className="Menu1Link" onClick={()=>{this.ITNoteAction("ITNoteLink1",'BuildNote')}}>網站的建立</div></div> 
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
      </div>);
    }
    else if(this.state.Func == "BuildNote")
    {
      Menu1Link=(
      <div id="Menu1Link">
        <div id="ITNote" className="Menu1LinkDiv"><div id="ITNoteLink1" className="Menu1Link"><Link to="/ITNotes">1.建立GCP</Link></div></div> 
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link"></div></div>
      </div>);
    }

    return(
      <div id="Menu" onClick={(e)=>{this.ShowMenu(null,1)}}> 
        <div id="Menu1" onClick={(e)=>{e.stopPropagation()}} className="text-center">
           <div id="Index" className="Menu1LinkDiv"><div style={{fontFamily: "emoji"}}>{this.state.Func}</div></div>
           {Menu1Link}
           <div id="ITNote"><div style={{fontFamily: "cursive"}}>作者：ＤＴＷ</div></div>
        </div>
        <div id="Menu2" onClick={(e)=>{this.ShowMenu(e,2)}}><span> &equiv;</span> </div>
      </div>
    );
  }
  ShowMenu(event,show){ // 定義changeName
    this.setState({
      ShowMenu:show==1?false : !this.state.ShowMenu },function(){
        if(this.state.ShowMenu)
         document.getElementById('Menu1').style.marginLeft='0%'
        else
          document.getElementById('Menu1').style.marginLeft='-36.6%'
      }
    );
    if(event!=null)
      event.stopPropagation();
  }
  ITNoteAction(ID,Func){ 
    var vm = this;
    if(document.getElementById(ID)!=null){
      document.getElementById(ID).style.backgroundSize='0%'
      setTimeout(function(){
        document.getElementById(ID).style.backgroundSize='100%';
        vm.setState({Func :Func});
      }, 1000);
    }
  }
}

export default App;
