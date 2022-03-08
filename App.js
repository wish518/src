import React, { Component } from 'react';
import './Css/App.css';
import 'popper.js';

class App extends Component{
constructor(props) { 
   super(props);  
   //取得MenuIndex 
   fetch(global.constants.P_API+"/GetMenuIndex ", {method: "post", headers: {'Content-Type':'application/json'}}) 
   .then(res => res.json()) 
   .then(data => {
      if(data.length>0){    
        //console.log(data)
        this.setState({MenuIndex:data})
      }
   })
   .catch(e => {
     console.log(e)
   })

   let index= window.location.pathname.split('/')
   let path = index[index.length-1];
   let FuncName = "Index";
   if(path!="" && path!="index"){
      path = index[index.length-2];
   }
   //console.log(path)
   this.state=({
    ShowMenu:false,
    FirstFunc:path ==""?"Index":path,
    Func:path ==""?"Index":path,
    FuncName :FuncName,
    MenuIndex :[],
  })
   this.ShowMenu = this.ShowMenu.bind(this)
   this.ITNoteAction = this.ITNoteAction.bind(this)
  }
  componentDidMount(){
    let event =function(){
      if(document.getElementById('Menu1').offsetWidth <225){
        document.getElementById('Menu1').style.marginLeft='-36%'
        document.getElementById('Menu2').style.marginLeft='-2%'
      }
      else {
        document.getElementById('Menu1').style.marginLeft='-228px'
        document.getElementById('Menu2').style.marginLeft='-1%'
      }
    }
    window.onresize = function(){
      event();
    }
    event();
  }//第一次渲染完成
  componentDidUpdate(){//渲染完成
    for(var i =0 ;i< document.getElementsByClassName('MenuLevel3').length ; i++){
      document.getElementsByClassName('MenuLevel3')[i].style.backgroundSize='100%'
    }
  }
  componentWillReceiveProps(){}//路由改變
  render(){
    let Menu1Link = [];
    var FuncName = this.state.FuncName
    if(this.state.Func == "Index")
    {
      Menu1Link=(
      <div>
        <div className="Menu1LinkDiv"><div id="ITNoteLink1" className="Menu1Link Menu1LinkTran MenuLevel1" onClick={()=>{this.ITNoteAction("ITNoteLink1",'ITNotes','IT筆記','MenuLevel2')}}>IT筆記</div></div> 
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div> 
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
        <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
      </div>);

    }
    // else if(this.state.Func == "ITNotes")
    // {
    //   Menu1Link=(
    //   <div>
    //     <div className="Menu1LinkDiv"><div id="ITNoteLink1" className="Menu1Link Menu1LinkTran MenuLevel2" onClick={()=>{this.ITNoteAction("ITNoteLink1",'GCP','網站的建立','MenuLevel3')}}>網站的建立</div></div> 
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>
    //     <div className="Menu1LinkDiv" onClick={()=>{this.ITNoteAction("",'Index','Index','MenuLevel1','MenuLevel2')}}><div className="MenuBack">&#8617;<span>回上一層</span> </div></div>
    //   </div>);
    // }
    else
    {
      //console.log(this.state.MenuIndex)
      let vm = this;
      let MenuData = this.state.MenuIndex.filter(function(item){return item.Node == vm.state.Func});
      for(var i=0;i<10;i++){
        //取得Menu資料
        let id  = "ITNoteLink" + i
        if(MenuData[i]!=null){
          let Level = MenuData[0].Level
          let className =  "Menu1Link Menu1LinkTran "+ MenuData[i].Class
          let Func =  MenuData[i].Func
          let Name =  MenuData[i].Name
          if(Level==3)
            Menu1Link.push(<div key={"Menu1LinkDiv"+i} className="Menu1LinkDiv"><div id={MenuData[i].Func} className={className}><a href={MenuData[i].Url}>{MenuData[i].Name}</a></div></div>)
          else
            Menu1Link.push(<div key={"Menu1LinkDiv"+i} className="Menu1LinkDiv"><div id={MenuData[i].Func} className={className} onClick={()=>{this.ITNoteAction("ITNoteLink1",Func,Name,'MenuLevel3')}}>{MenuData[i].Name}</div></div>)
        }
        else
          Menu1Link.push(<div key={"Menu1LinkDiv"+i} className="Menu1LinkDiv"><div className="Menu1Link Menu1LinkTran"></div></div>)
        //完成menu資料
        if(i==9 && MenuData[0] != null){
          let Level = MenuData[0].Level
          if(Level==3){
            let prevousData  = this.state.MenuIndex.filter(function(item){return item.Func == vm.state.Func})[0];
            FuncName = prevousData.Name;
            Menu1Link.push(<div key={"Menu1LinkDiv"+(i+1)} className="Menu1LinkDiv" onClick={()=>{this.ITNoteAction("",prevousData.Node,prevousData.Node,'MenuLevel2','MenuLevel3')}}><div className="MenuBack">&#8617;<span>回上一層</span> </div></div>)
          }
          else
            Menu1Link.push(<div key={"Menu1LinkDiv"+(i+1)} className="Menu1LinkDiv" onClick={()=>{this.ITNoteAction("",'Index','Index','MenuLevel1','MenuLevel2')}}><div className="MenuBack">&#8617;<span>回上一層</span> </div></div>)
        }  
      }
    }

    return(
      <div>
      <div id="Menu" onClick={(e)=>{this.ShowMenu(null,1)}}> 
        <div id="Menu1" onClick={(e)=>{e.stopPropagation()}} className="text-center">
           <div id="Index" className="Menu1LinkDiv"><div style={{fontFamily: "DFKai-sb"}}>{FuncName}</div></div>
           {Menu1Link}
           <div id="ITNote"><div style={{fontFamily: "cursive",float:"right",width:"100%",whiteSpace: "nowrap"}}>作者：ＤＴＷ</div></div>
        </div>
      </div>
        <div id="Menu2" onClick={(e)=>{this.ShowMenu(e,2)}}><span> &equiv;</span> </div>
      </div>
    );
  }
  ShowMenu(event,show){ // 定義changeName
    this.setState({                                                                                                                                                                                         
      ShowMenu:show==1?false : !this.state.ShowMenu },function(){
        if(this.state.ShowMenu){
          document.getElementById('Menu1').style.marginLeft='0%'
          if(document.getElementById('Menu1').offsetWidth <225)
             document.getElementById('Menu2').style.marginLeft='34%'
          else 
            document.getElementById('Menu2').style.marginLeft='221.5px'
            
          document.getElementById('Menu').style.pointerEvents='auto'
        }
        else{
          if(document.getElementById('Menu1').offsetWidth <225){
            document.getElementById('Menu1').style.marginLeft='-36%'
            document.getElementById('Menu2').style.marginLeft='-2%'
          }
          else {
            document.getElementById('Menu1').style.marginLeft='-228px'
            document.getElementById('Menu2').style.marginLeft='-1%'
          }

          document.getElementById('Menu').style.pointerEvents='none'
          //setTimeout(function(){document.getElementById('Menu').style.width='auto'},300)//防止選單調整大小抽動
      }
      }
    );
    if(event!=null)
      event.stopPropagation();
  }
  ITNoteAction(ID,Func,FuncName,Class,thisClass){ 
    var vm = this;

    if(document.getElementById(ID)!=null){
      document.getElementById(ID).style.backgroundSize='0%'
       
      setTimeout(function(){
        vm.setState({Func :Func,FuncName :FuncName});
        setTimeout(function(){
          for(var i =0 ;i< document.getElementsByClassName(Class).length ; i++){
             document.getElementsByClassName(Class)[i].style.backgroundSize='100%'
          }
        }, 10);
      }, 1000);
    }
    else
    {
      //回上一層時，將backgroundSize歸0 並拿掉Menu1LinkTran不觸發動畫
      for(var i =0 ;i< document.getElementsByClassName(thisClass).length ; i++){
        document.getElementsByClassName(thisClass)[i].classList.remove("Menu1LinkTran");
        document.getElementsByClassName(thisClass)[i].style.backgroundSize='0%'
        document.getElementsByClassName(thisClass)[i].classList.add("Menu1LinkTran");
      }  

      vm.setState({Func :Func,FuncName :FuncName},function(){
        for(var i =0 ;i< document.getElementsByClassName(Class).length ; i++){
           document.getElementsByClassName(Class)[i].classList.remove("Menu1LinkTran");
           document.getElementsByClassName(Class)[i].style.backgroundSize='0%'
        }
          
        setTimeout(function(){
          for(var i =0 ;i< document.getElementsByClassName(Class).length ; i++){
             document.getElementsByClassName(Class)[i].classList.add("Menu1LinkTran");
             document.getElementsByClassName(Class)[i].style.backgroundSize='100%'
           }
        }, 100);
      });
      
    }
    
  }
}

export default App;
