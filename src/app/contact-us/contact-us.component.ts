import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  getName = '';
  getMobile = '';
  getEmail = '';
  getMessage = '';

  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiService.insertData(data.value).subscribe((response:any)=>{
      console.log(response);
      alert('Successfully Inserted');
    })
  }


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
