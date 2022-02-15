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