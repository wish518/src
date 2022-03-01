import React, { Component } from 'react';
import '../Css/ITNote.css';
import App from '../App';
import ShowImg from "./Common/ShowIImg";
import BlueNotes from "./Common/Notes";
import RedNotes from "./Common/Notes";
import MessageBoard from "./Common/MessageBoard";

class ITNotes extends Component{
  constructor(props) {
   super(props);
   let  vm = this;
   let path= window.location.pathname.split('/')
   let note = path[path.length-1];
   this.state=({
      src:"", NoteHtml:"", BlueNote:"", RedNote:"",
      Func:note,
      NoteShowed:false
    })
    
    //測試內文 需mark以下 Start
    fetch(global.constants.P_API+"/GetPageSet", {method: "post",body: JSON.stringify({Note:note}), headers: {'Content-Type':'application/json'}}) 
    .then(res => res.json()) 
    .then(data => {
       if(data!=""){    
          document.title = data.Title;
          //console.log(data)
          this.setState({NoteHtml:data.html,
                         BlueNote:data.BlueNote,
                         RedNote:data.RedNote})
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
                {/* <h1 class="title">自動Pull排成</h1>
                <ul>
                   <li>寫這篇目的是讓每次發版不用連虛擬主機進行Pull，達成在本機Push，Server就會自動更新目的</li>
                          
                   <li><b>1.安裝排成功能</b>
                     <div>
                        <span class="command">$ sudo apt install expect</span>
                     </div>
                   </li>
                   <li><b>2.寫排程腳本</b>
                        <div>
                           <span class="red">a.建立腳本Log檔案</span><br/>
                           <span class="comment">可以依喜好更改檔名</span>
                           <span class="command">$ sudo vim Log.txt</span>
                           <span class="command">$ sudo vim trace.txt</span><br/>

                           <span class="red">b.建立腳本</span><br/>
                           <span class="comment">可以依喜好更改檔名</span>
                           <span class="command">$ sudo vim Git.sh</span>
                           <span class="red">調整並複製以下設定</span><br/>
                           <span class="txt"><span class="annotation">#使用expect編譯</span><br/>
                           #!/usr/bin/expect -f <br/>
                           <span class="annotation">#指定LOG路徑</span><br/>
                              log_file -noappend /var/www/html/Log.txt<br/>
                              <span class="annotation">#在指定路徑下執行fetch及pull指令</span><br/>
                              spawn sudo git --git-dir=/var/www/html/PythonAPI/.git fetch<br/>
                              spawn sudo git --git-dir=/var/www/html/PythonAPI/.git pull<br/>
                              <span class="annotation">#宣告DATE 為執行時間參數</span><br/>
                              set DATE [exec date +%Y%m%d,%H%M%S]<br/>
                              <span class="annotation">#處理回傳訊息</span><br/>
                              expect {<br/>
                                      <span class="annotation">#若回傳Already up to date.，則在Log上寫[時間]+PythonAPI Already up to date.</span><br/>
                                      "Already up to date." {send_log "$DATE : PythonAPI Already up to date.\n"}<br/>
                                      <span class="annotation">#回傳其他訊息，則在Log上寫[時間]+PythonAPI Get Pull</span><br/>
                                       "#" { send_log "$DATE : PythonAPI Get Pull \n"}<br/>
                              }<br/>
                              
                              <span class="annotation">#多個Git自動Pull</span><br/>
                              spawn sudo git --git-dir=/var/www/html/dtw/.git fetch<br/>
                              spawn sudo git --git-dir=/var/www/html/dtw/.git pull<br/>
                              expect {<br/>
                                  "Already up to date." {send_log "$DATE : dtw Already up to date. \n"}<br/>
                                  "#" { send_log "$DATE : dtw Get Pull \n"}<br/>
                              }<br/>
                              log_file;<br/>
                           </span>
                        </div>
                    </li>
                </ul> */}
           </div>
           {ShowImgDiv}
           {this.state.BlueNote || '' != ""?(<BlueNotes id="BlueNote" note={this.state.BlueNote}/>):null}
           {this.state.RedNote || '' != ""?(<RedNotes id="RedNote" note={this.state.RedNote}/>):null}
           <App/>
           <MessageBoard Func={this.state.Func}/>
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