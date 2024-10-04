import { Component } from '@angular/core';
import { GetAPIService } from '../../../services/get-api.service';
import { MockData } from '../../../model/Mockdata';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {


  constructor(  private mainservice:GetAPIService ){

  }
  data:any;
  mockData:MockData[]=[];
  
  public totaCartItem : number = 0;

  ngOnInit() {
    this.totaCartItem
    console.log(this.totaCartItem)
    this.mainservice.getAllBoughtData().subscribe((data)=>{
      this.totaCartItem = data.length;
    })

  }

}
