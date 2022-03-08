import React, { Component } from 'react';
class MessageBoard extends Component{
  constructor(props) {
    super(props);
    this.state=({
      MessageData:[],
   })
    this.GetMessage = this.GetMessage.bind(this)
    this.SetMessage = this.SetMessage.bind(this)
    this.Expand = this.Expand.bind(this)
  }
  componentDidMount(){
    document.getElementsByTagName("html")[0].addEventListener("click", function(){
        let MessageBoard = document.getElementById("MessageBoard");
        if(MessageBoard!=null)
        {
          if(MessageBoard.style.marginRight=="0px" || MessageBoard.style.marginRight=="")
            MessageBoard.style.marginRight='calc(-65% + 34px)'
        }

      }
    );
    this.GetMessage();
  }
 render(){
  let message  = []
  let vm = this;
  for(var i=0;i< this.state.MessageData.length;i++){
    let index = i;
    message.push(<div key={"Message"+i} className="message w-100 mt-3">
                  <div className="messageUser">{this.state.MessageData[i].User =="Guest"?'訪客':this.state.MessageData[i].User}於 {this.state.MessageData[i].CreateDate.slice(0,10)}：</div>
                  <div id = {"Msg" + i} className="messageContant">{this.state.MessageData[i].Message}</div>
                  <div className="expand" onClick={()=>{this.Expand(index)}}>&lt;<span id={"Expand"+i}>展開</span>&gt;</div>      
                </div>
    )
  }
   return(
    <div id="MessageBoard">
      <div id="MessageBoardTab" onClick={(e)=>{this.ShowMessage();e.stopPropagation()}}></div>
      <div id="MessageBoardDiv" onClick={(e)=>{e.stopPropagation()}}>
        <div id="Message" className="h-75 pb-2">
          {this.state.MessageData.length==0?(<div className='w-100 mt-3 text-center'>尚無任何留言</div>):message}
        </div>
        <div id="MessageSent" className="h-25 w-100">
           <textarea  placeholder='想說的建議或問題' id="MessageText" className="w-100 p-2" style={{height: "calc( 100% - 50px )"}}></textarea>
           <button type="button" className="btn btn-danger w-100 " style={{height: "32px"}} onClick={()=>{this.SetMessage()}}>送出</button>
        </div>
      </div>
    </div>
   );
 }
 ShowMessage(){
  let MessageBoard = document.getElementById("MessageBoard");
  if(MessageBoard.style.marginRight=="0px")
    MessageBoard.style.marginRight='calc(-65% + 34px)'
  else
    MessageBoard.style.marginRight='0px'
 }
 GetMessage(){ 
    fetch(global.constants.P_API+"/GetMessage", {method: "post",body: JSON.stringify({Func:this.props.Func}), headers: {'Content-Type':'application/json'}}) 
      .then(res => res.json()) 
      .then(data => {
        if(data!=""){    
          this.setState({MessageData:data})
        }
        else
          this.setState({MessageData:[]})
    })
    .catch(e => {
      console.log(e)
    })
  }
  SetMessage(){ 
    let MessageText = document.getElementById("MessageText").value;
    if(MessageText=="")
    {
      alert("請輸入留言內容");
      return;
    }
    if(window.confirm("確認是否輸入完成，並送出留言")){
      fetch(global.constants.P_API+"/SetMessage", {method: "post",body: JSON.stringify({Func:this.props.Func,Message:MessageText}), headers: {'Content-Type':'application/json'}}) 
        .then(res => res.json()) 
        .then(data => {
          console.log(data)
          if(data!=""){    
            if(data.Code=="000" || data.Code=="800")
              document.getElementById("MessageText").value="";
              this.GetMessage()
          }
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
  Expand(index){
    let msg =  document.getElementById("Msg"+ index)
    let Expand =  document.getElementById("Expand" +index)
    if(msg.style.height == '70px' || msg.style.height == ''){
      msg.style.height = '100%'
      Expand.innerText="縮小"
    }
    else{
      msg.style.height = '70px'
      Expand.innerText="展開"
    }
  }
}


export default MessageBoard;
