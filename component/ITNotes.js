import React, { Component } from 'react';
import '../Css/ITNote.css';
import App from '../App';
import ShowImg from "./Common/ShowIImg";

class ITNotes extends Component{
  constructor(props) {
    document.title = "[2=1]筆記本";
    /*fetch(global.constants.P_API, {method: "post",body: JSON.stringify({Note:this.props.params.note}), headers: {'Content-Type':'application/json'}}) 
    .then(res => res.json()) 
    .then(data => {
      console.log(global.constants.P_API)
         console.log(data)
    })
    .catch(e => {
      console.log(e)
    })*/
    super(props);
    this.state=({
      src:""
    })
   this.ShowImg = this.ShowImg.bind(this)
  }
  componentDidMount(){
     //alert('GOGO')
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
                <ul>
                   <li>1.要建立GCP，必先進入GCP網頁進行操作
                      <div>進入<a target="_blank" href="https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=japac-AU-all-en-dr-bkwsrmkt-all-all-trial-e-dr-1009882&utm_content=text-ad-none-none-DEV_c-CRE_540822681061-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP%20~%20General_cloud%20-%20platform-KWID_43700061083014006-aud-970366092687%3Akwd-87853815&userloc_9040379-network_g&utm_term=KW_gcp&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BR0oNYf1Si7G-WlOURrGfUbnOuBNfsxt6JKpdT1INx6rtouTgIX2saAklQEALw_wcB&gclsrc=aw.ds">Google Cloud Platform</a>頁面的一陣操作下，選擇<span className='red'>Computer Engine</span></div>
                   </li>
                   <li>2.建立執行個體
                      <div>進入控制台，首點建立執行個體<img src="https://lh3.google.com/u/0/d/1qJCr8lhGeP-h9gamB5x8WwI7YMXLtrd9=w1919-h936-iv1" onClick={(event)=>{this.ShowImg(event)}}/></div>
                    </li>
                </ul>
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