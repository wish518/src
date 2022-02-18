import React, { Component } from 'react';
class Notes extends Component{
  constructor(props) {
    super(props);
    this.NoteAction = this.NoteAction.bind(this)
  }
  componentDidMount(){
  }
 render(){
   return(
    <div  id={this.props.id} className='NotesDiv'>
        <div className='Note' onClick={()=>{this.NoteAction()}} > 
            <h5 className='w-100 text-center'></h5>
            <div id="NoteContent" dangerouslySetInnerHTML={{__html: this.props.note}}></div>
            {/* <div id="NoteContent" >
                若使用React等純前端網頁架構，頁面間並沒有實體目錄，需在Apache上設定虛擬目錄<br/><br/>
                修改000-default.conf加入以下設定並依照需求調整<br/>
                <span class="txt">
                   &lt;Directory /var/www//html/dtw&gt; <br/>
                  <span class="annotation"># 打開重寫引擎</span><br/> 
                  RewriteEngine on<br/>
                  <span class="annotation"> # 設定比對條件 -f：比對 CondPattern 為檔案</span><br/>
                   RewriteCond %&#123;REQUEST_FILENAME &#125; !-f <br/>
                  <span class="annotation"># 重新指向至index.html QSA：傳回網址後面的 QUERY STRING  L：結束條件</span><br/>
                  RewriteRule ^(.*)$ index.html [QSA,L]<br/>
                  &lt;/Directory&gt;
                </span>
            </div> */}
        </div>  
    </div>    
   );
 }
 NoteAction(){ 
   console.log(document.getElementById(this.props.id).style.marginLeft)
    if( document.getElementById(this.props.id).style.marginLeft=='0px')
       document.getElementById(this.props.id).style.marginLeft = '-250px'
    else
       document.getElementById(this.props.id).style.marginLeft = '0px'
  }
}


export default Notes;

