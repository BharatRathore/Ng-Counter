import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.css']
})
export class ClickAreaComponent implements OnInit {
  
  time:number=5
  clickTimer=this.time
  clickCounter:number=0
  AttemptHist=[]
  @ViewChild('btn') btnref:ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  getMax(){
    if(this.AttemptHist.length!=0){
      return Math.max(...this.AttemptHist)
    }
    else{
      return 0
    }
    
  }
  getAvg(){
    if(this.AttemptHist.length==0){
      return 0
    }
    else{
     let total=0
      this.AttemptHist.forEach(attempt=>{
        total+=attempt
      })
      let avg = total/this.AttemptHist.length
      return (avg/this.time).toFixed(2)
    }
  }
  
  reset(){
      
      this.time=5;
      this.clickCounter=0;
      this.clickTimer=this.time
  }

  setTime($event){
    this.time=Number($event.target.value);
    this.clickTimer=Number($event.target.value);
    console.log(this.clickTimer,this.time)
    
    console.log($event)
  }
  

  onScreenClick(){
    
    if(this.clickCounter==0 ){
      
      var x=setInterval(() => {
        if(this.clickTimer>0){
          this.clickTimer-- 
        }
        else{
        this.btnref.nativeElement.scrollIntoView({behaviour:'smooth'})
        this.AttemptHist.push(this.clickCounter)
         
        clearInterval(x)
        
      }
           
      }, 1000);
    }
  
    
    if(this.clickTimer>0){
      ++this.clickCounter
    }
    
  }

}

