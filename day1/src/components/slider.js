import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 class Slider extends Component{
     images = ['11.jpeg','22.jpeg','33.jpeg','44.jpeg','55.jpeg']
        src='./images/'
        interval=null

     constructor(){
         super()
         this.state={
             'imgNo':0,
             'imgSrc':'./images/11.jpeg'
         }
     }
     next=()=>{
         if(this.state.imgNo < this.images.length){
            this.setState({
                imgNo:++this.state.imgNo,
                imgSrc:this.src + this.images[this.state.imgNo]
            })
             
         }

     }
     prev=()=>{
        if(this.state.imgNo > 0){
            this.setState({
                imgNo:--this.state.imgNo ,
                imgSrc:'./images/' + this.images[this.state.imgNo]
            })
             
         }

     }
     slide=()=>{
        this.interval=setInterval(()=>{
            if(this.state.imgNo === this.images.length) {
                this.setState({imgNo:0})
            }
            this.next()
        },2000)
       
     }
     stop=()=>{
         clearInterval(this.interval)
     }
     render(){return(
         <div className='contariner'>
             <h1>Image slider</h1>
         <div className='row'>
             <div className='col m-5 text-center'>
             <img src={this.state.imgSrc} alt="slide"></img>
             </div>
             </div>
             <div className='row'>
             <div className='col-3'>
             <input className='btn btn-primary' type='button' value='Next' onClick={this.next}></input>
             </div>
             <div className='col-3'>
             <input className='btn btn-warning' type='button' value='Slide' onClick={this.slide}></input>
             </div>
             <div className='col-3'>
             <input className='btn btn-danger' type='button' value='Stop' onClick={this.stop}></input>
             </div>
             <div className='col-3'>
             <input className='btn btn-primary' type='button' value='Prev' onClick={this.prev}></input>
             </div>
             </div>
            



            <h3> image number : {this.state.imgNo}</h3>
            <h3> image src : {this.state.imgSrc}</h3>

         </div>
     )}
 }
 export default Slider