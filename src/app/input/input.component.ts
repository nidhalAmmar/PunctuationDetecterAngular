import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  myInput : string

  output : string 

  constructor(private service:CounterService) { 



  }

  ngOnInit(): void {
  }


  getNbpunctuation(){

    this.service.getcounter(this.myInput).subscribe(res =>{
      console.log(res)
      this.output =  "the total of punctuation marks is "+ res ; 
      
    })
  

  }

}
