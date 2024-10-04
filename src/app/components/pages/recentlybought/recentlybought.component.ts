import { Component, OnInit } from '@angular/core';
import { MockData } from '../../../model/Mockdata';
import { GetAPIService } from '../../../services/get-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recentlybought',
  templateUrl: './recentlybought.component.html',
  styleUrl: './recentlybought.component.scss'
})
export class RecentlyboughtComponent implements OnInit {

  constructor(
    private mainservice:GetAPIService,
    private router:Router
  ){
  }
  data:any;
  mockData:MockData[]=[];
  boughtData:MockData[]=[];
  public totalCartItem: number = 0;
  public productList:any;

  ngOnInit(): void {
    this.mainservice.getAll().subscribe((data)=>{
      this.mockData = data
      this.totalCartItem = data.length;
    });

  }

  formdata : MockData ={
    itemId: 0,
     name: '',
     description: '',
     size: '',
     color: '',
     stylenumber: '',
     price: '',
     image: '',
 }

  addToCartItem(){
    this.mainservice.addToCart(this.formdata).subscribe({
      next:(data)=>{
        this.router.navigate(["/"])
      },
      error:(er)=>{
        console.log(er)
      }

    })
    console.log("test test")
  }

  addtocart(item:any){
    this.mainservice.addItemToCart(item)
    window.location.reload();
    console.log("Item added to cart:", item);
  }

  
}
