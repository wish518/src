import React, { useState } from 'react';

export  function MessageBoard() {
  return (
    <div id="MessageBoard">
      <div id="MessageBoardTab"></div>
      <div id="MessageBoardText">
        <div id="Message" class="h-75 pb-2">
        <div class="message w-100">
          <div class="messageUser">訪客於 2022-02-22：</div>
          <span >講的不錯欸 
    求IG<br/>
    帥哥 <br/>
    男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神<br/>
男神</span>
        
        <div class="expand">&lt;展開&gt;</div>          
        </div>
      </div>
      <div class="h-25 w-100">
         <textarea  placeholder='想說的建議或問題' class="w-100 p-2" style={{height: "calc( 100% - 32px )"}}></textarea>
         <button type="button" class="btn btn-primary w-100 mt-1" style={{height: "32px"}}>送出</button>
      </div>
      </div>
    </div>
  )
}