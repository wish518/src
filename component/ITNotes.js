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

    fetch(global.constants.P_API+"/GetPageSet", {method: "post",body: JSON.stringify({Note:note}), headers: {'Content-Type':'application/json'}}) 
    .then(res => res.json()) 
    .then(data => {
       if(data!=""){    
          document.title = data.Title;
          
          this.setState({NoteHtml:data.html})
          //vm.forceUpdate()
       }
    })
    .catch(e => {
      console.log(e)
    })
    
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
                <h1 className="title">建立GCP</h1>
                { ReactHtmlParser(this.state.NoteHtml) }
                {/* <div dangerouslySetInnerHTML={{__html: this.state.NoteHtml}}></div> */}
                {/* <ul>
                   <li><b>1.要建立GCP，必先進入GCP網頁進行操作</b>
                      <div>進入<a target="_blank" href="https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=japac-AU-all-en-dr-bkwsrmkt-all-all-trial-e-dr-1009882&utm_content=text-ad-none-none-DEV_c-CRE_540822681061-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP%20~%20General_cloud%20-%20platform-KWID_43700061083014006-aud-970366092687%3Akwd-87853815&userloc_9040379-network_g&utm_term=KW_gcp&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BR0oNYf1Si7G-WlOURrGfUbnOuBNfsxt6JKpdT1INx6rtouTgIX2saAklQEALw_wcB&gclsrc=aw.ds">Google Cloud Platform</a>頁面的一陣操作下，選擇<span className='red'>Computer Engine</span></div>
                   </li>
                   <li><b>2.建立執行個體</b>
                      <div>進入控制台，首點建立執行個體<img src="https://lh3.google.com/u/0/d/1qJCr8lhGeP-h9gamB5x8WwI7YMXLtrd9=w1919-h936-iv1" onClick={(event)=>{this.ShowImg(event)}}/></div>
                    </li>
                   <li><b>3.來捏執行個體囉~</b>
                       <div>依照需求及預算，像是捏模組一樣建立執行個體
                          <p>a.區域建議選台灣，畢竟伺服器在台灣總會感覺比較快，機房出事也可以先看到新聞</p>
                          <p>b.機器設定依照個人需求調整，如果錢很多也可以直接配置拉滿</p>
                          <img src="https://lh5.googleusercontent.com/rsQ2Q3GLuJkjRGGb_YNUJNj4fh44k3DCTWLjGl_JV3TC5vZFF_1tbbtRDExdaRa4lFOWS3OOKxkbZBi47jgL=w1919-h936-rw" onClick={(event)=>{this.ShowImg(event)}}/>
                          <p>c.需要注意的是<span className='red'>防火牆選項需勾選「允許 HTTP 流量」及「允許 HTTPS 流量」</span>，未勾選是無法從外部參訪的</p>
                          <img src="https://lh4.googleusercontent.com/4zgA-VjKp432QOplBODKtFwW8RgQ9hxo1d-Ky4FmxeRHejazujZA7l2J15FfekmMNGaS_ns2zAlDhvka_AkV=w1919-h936-rw" onClick={(event)=>{this.ShowImg(event)}}/>
                        </div>
                   </li>
                   <li><b>4.完成建立</b>
                       <div>按下建立後，就可以看到已經有新建的虛擬機器(VM)執行個體，就表示你完成建立GCP，完成建立網站中最簡單的流成，開心~
                          <p></p>
                          <img src="https://lh3.googleusercontent.com/lS_MA2o4HVljZXZvszxbaNhl65AyDd3WgF1DruwF9x6t0Nppu-uSPV2Sb_2uQyZu1ks-Cg-UHYC5iplOfvx0=w1919-h936-rw" onClick={(event)=>{this.ShowImg(event)}}/>  
                        </div>
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