import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


class values {
  productId?:number;
  productName?:string;
  productCategory?:string;
  productRate?:number;
}


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  status : any;
  postId :any;

  formProfile= new FormGroup({
    productName:new FormControl('',Validators.required),
    productCategory:new FormControl(''),
    productRate:new FormControl(''),
   
  })


  usdformSubmit(){
    if(this.formProfile.valid){
    console.log(this.formProfile.value);
    this.http.post<values[]>("http://localhost:8080/create",this.formProfile.value).subscribe(
      x=>{x},
      err=>{err}
      
    )
    
    }
    
  else{
    console.log("There is some error");
    
    
  }

  }

  demoVar?:any[]

  constructor(private http:HttpClient){
    this.http.get<values[]>("http://localhost:8080/product").subscribe(
      x=>{this.demoVar=x},
      err=>console.log(err)
      
    )
  
  }
  onClick(id:any){
    this.http.delete("http://localhost:8080/delete/"+id)
            .subscribe(() => this.status = 'Delete successful');
    }

    onClickUpdate(id:any){
      const body = { productName: 'sjdhkas' };
      this.http.put<any>("http://localhost:8080/update/1",body)
      .subscribe(data => this.postId = data.id);
}
  }

  
  



