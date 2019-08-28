import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  
  private mydata: Array<object> = [];

  constructor(private apiservice: ApiService) { }
  private status = false;
  onSubmit(data:NgForm) {
    console.log(data.value);
    this.apiservice.searchData(data.value).subscribe((response:Array<object>)=>{
       
          if (response.length > 0) {
            this.mydata = response;
            this.status = true;
          }
    });

  }

  editbutton(){
    console.log(this.mydata);
    this.apiservice.editData(this.mydata[0]).subscribe((Response:any)=>{
      console.log(Response);
      alert('Successfully Inserted');
    })
  }

  deletebutton(){
    console.log(this.mydata);
    this.apiservice.deleteData(this.mydata[0]).subscribe((Response:any)=>{
      console.log(Response);
      alert('Successfully Deleted');
    });
  }

  ngOnInit() {

  }

}
