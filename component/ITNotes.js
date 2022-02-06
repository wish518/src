import React, { Component } from 'react';
import '../Css/ITNote.css';
import App from '../App';
import ShowImg from "./Common/ShowIImg";
import ReactHtmlParser from 'react-html-parser';

class ITNotes extends Component{
  constructor(props) {
   super(props);
   let  vm = this;
   let path= window.location.pathname.split('/')
   let note = path[path.length-1];
   this.state=({
      src:"", NoteHtml:"",NoteShowed:false
    })
    
    //測試內文 需mark以下 Start
    fetch(global.constants.P_API+"/GetPageSet", {method: "post",body: JSON.stringify({Note:note}), headers: {'Content-Type':'application/json'}}) 
    .then(res => res.json()) 
    .then(data => {
       if(data!=""){    
          document.title = data.Title;
          
          this.setState({NoteHtml:data.html})
          vm.forceUpdate()
       }
    })
    .catch(e => {
      console.log(e)
    })
    //測試內文 END

   this.ShowImg = this.ShowImg.bind(this)
  }
  componentDidUpdate(){//第一次渲染完成
      let vm = this;
      if(!this.state.NoteShowed)
      {
         for(var i=0;i<document.getElementsByTagName('img').length;i++){
            this.setState({NoteShowed:true})
            document.getElementsByTagName('img')[i].addEventListener("click",function(event) {
               vm.setState({src:event.target.currentSrc})
            })
         }
      }   
      
   }
 render(){
       let ShowImgDiv = "";
       if(this.state.src != "")
       {
         ShowImgDiv = <ShowImg src={this.state.src}  SetSrc={this.SetSrc.bind(this)} />
       }
       else
         ShowImgDiv = ""
      return(
       <div  id="ITNoteMain" className="ITNotes"> 
           <div id="Contain">
                <div dangerouslySetInnerHTML={{__html: this.state.NoteHtml}}></div>
                {/* { ReactHtmlParser(this.state.NoteHtml) } */}
                {/* <h1 className="title">搞定Apache</h1>
                <ul>
                   <li><b>1.遠端進上篇建立的虛擬機器裡</b><span class="comment"><br/>(這邊虛擬主機為作業系統為Ubuntu 20.04.3 LTS)</span>
                       <img src="https://i.imgur.com/LyK06gq.jpg" class="img"/>
                   </li>
                   <li><b>2.啟用防火牆及安裝Apache</b>
                        <div>開局執行下列指令：<br/>
                           <span class="red">更新存儲庫</span><span class="command">$ sudo apt update</span> 
                           <span class="red">安裝Apache</span><br/><span class="comment">(安裝會提示訊息...輸入Y就是了)</span>
                           <span class="command">$ sudo apt install apache2</span> 
                           <span class="red">添加防火牆規則</span><br/>
                           允許SSH 
                           <span class="command">$ sudo ufw allow OpenSSH</span> 
                           允許Apache 
                           <span class="command">$ sudo ufw allow in "Apache Full"</span> 
                        </div>
                    </li>
                   <li><b>3.測試Apache是否正常運行</b>
                       <div>在瀏覽器輸入GCP給的虛擬機外部IP，即可顯示Apache預設網頁
                          <img src="https://i.imgur.com/k0pcknR.jpg" class="img" />
                        </div>
                   </li>
                   <li ><b>無法顯示網也可能的原因</b>
                       <ul class="comment">
                          <li>建立虛擬主機時沒有勾選「允許 HTTP 流量」及「允許 HTTPS 流量」詳請請參考<a href="/ITNotes/Build">建立GCP</a>第三步</li>
                          <li>防火牆沒有啟用允許Apache，請參考第二步</li>
                          <li>非上述問題，就使用大絕招重啟Apache服務，用神秘力量解決奇怪問題
                           <span class="command">$ sudo /etc/init.d/apache2 restart</span> 
                           </li>
                          <li>還還還是不行的話，查看apache錯誤LOG，對症下藥
                            <span class="command">$ cat /var/log/apache2/error.log</span> 
                           </li>
                       </ul>
                   </li>
                </ul> */}
           </div>
           {ShowImgDiv}
           <App/>
       </div>  
      );
   }
 
   ShowImg(event){ 
      this.setState({src:event.target.currentSrc})
   }  
   //給ShowImg子元件呼叫用
   SetSrc(){ 
      this.setState({src:""})
   }  
}


export default ITNotes;