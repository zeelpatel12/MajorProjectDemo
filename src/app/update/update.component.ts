import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
constructor(private product: CrudService ,private router:ActivatedRoute) { }

alert:boolean=false;
  formProfile= new FormGroup({
    productName:new FormControl('',Validators.required),
    productCategory:new FormControl(''),
    productRate:new FormControl(''),
   
  })

  ngOnInit(): void {

    console.log(this.router.snapshot.params['id']);
    
    this.product.getCurrentData(this.router.snapshot.params['id']).subscribe((result:any)=>{
       console.log(result);

      // this.formProfile=new FormGroup({
      //   productName:new FormControl('')

      // })
      
      this.formProfile= new FormGroup({
        productName:new FormControl(result['productName']),
        productCategory:new FormControl(result['productCategory']),
        productRate:new FormControl(result['productRate'])
       
      })

    })
  }
  updateProduct(){
    console.log(this.formProfile.value);
    
    this.product.updateProduct(this.router.snapshot.params['id'],this.formProfile.value).subscribe((result)=>{
      console.log(result,"data updated Successfully");
      
    })
  }

}
