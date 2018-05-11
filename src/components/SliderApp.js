import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';
import Dots from './Dots.js';
import Slide from './Slide.js';

export default class Slider extends Component {
 

  constructor(props){
    super(props);
   
    this.state= {
      slideCount : 0,
      howMany: 3,
      dots: []
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.dot=this.dot.bind(this);
  }
    goToSlide(index){
      this.setState({slideCount:index});
    }

    nextSlide(){
      if(this.state.slideCount===(this.state.howMany-1)){
        this.setState({slideCount: this.state.slideCount=0})
      }else{
        this.setState({slideCount: this.state.slideCount+1})
      }
      
    }
    previousSlide(){
      if(this.state.slideCount===0){
        this.setState({slideCount: this.state.slideCount=this.state.howMany-1})
      }else{
        this.setState({slideCount: this.state.slideCount-1})
      }
      
    }

    dot(){
      for(let i=0;i<this.state.howMany;i++){
        if(i==this.state.slideCount){
          this.state.dots.push(<i class="fas fa-circle dot"></i>) 
        }else {
           this.state.dots.push(<i class="far fa-circle dot"></i>)}
      }
    }

  render(){

    return (

      <div className='slider'>
  
       <Slide 
       index={this.state.slideCount} 
       className='slide' 
       />

        <RightArrow nextSlide={this.nextSlide}/> 
      <LeftArrow previousSlide={this.previousSlide}/>

      </div>
    );
  }


}

ReactDOM.render(
<Slider/>,
document.getElementById('root')
)