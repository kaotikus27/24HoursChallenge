import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MockData } from '../../../model/Mockdata';
import { GetAPIService } from '../../../services/get-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrl: './shoppingbag.component.scss'
})
export class ShoppingbagComponent implements OnInit {

  constructor(
    private mainservice:GetAPIService,

  ){
  }

  

 boughtData:MockData[]=[];
  public totalCartItem : number = 0;
  public totalPriceItem: number = 0;

  ngOnInit(): void {
    this.mainservice.getAllBoughtData().subscribe((data)=>{
      this.boughtData = data
      this.totalCartItem = data.length;
      this.getTotal()
    })
  }

  getTotal(){
    this.totalPriceItem = this.boughtData.reduce((accumulator, item) => {
      const price = Number(item.price); 
      return accumulator + (isNaN(price) ? 0 : price); 
    }, 0);
    this.totalPriceItem = parseFloat(this.totalPriceItem.toFixed(2));
    console.log(this.totalPriceItem)
  }

  remove(item:any){  
    this.mainservice.removeCartItem(item)
    console.log("removed", item)
    window.location.reload();
  }

 

}
