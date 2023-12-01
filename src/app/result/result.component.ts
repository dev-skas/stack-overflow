import { Component, OnInit } from '@angular/core';
import { DatafetchService } from "../datafetch.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  data: any = [];
  datas: any = [];
  err: any = [];
  errs: any = [];
  error_message:string=''
  visible:boolean=true
  errors:boolean=false
  

  constructor(private datafetch:DatafetchService) { }

  ngOnInit(): void {
    let searchId = localStorage.getItem("searchId");
    this.datafetch.getData(searchId).subscribe(result => {    
      this.data = result;
      this.datas = this.data.items
      if (this.datas.length == 0) {
        this.visible = false
      }
      
    }, error => {
      this.errors = true
      this.err = error
      this.error_message=this.err.error.error_message
      
      console.log(this.error_message)
  });
    



  }

}
