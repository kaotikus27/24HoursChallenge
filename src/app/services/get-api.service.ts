import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MockData } from '../model/Mockdata';
import { BehaviorSubject,interval, Subject} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  APIURL = "http://localhost:3000/MockData"
  APIURLBOUGHT = "http://localhost:3000/BoughtData"
  
  public cartItemList: any =[];
  public productList = new BehaviorSubject<any>([]);
  private pollingSubject = new Subject<any[]>();
  private isPolling = false;

  constructor(
    private _http:HttpClient
  ) { }



  /* all existing data */
  getAll(){
    return this._http.get<MockData[]>(this.APIURL);
  }

  /* bought data */
  getAllBoughtData(){
    return this._http.get<MockData[]>(this.APIURLBOUGHT);
  }

  addToCart(data:MockData){
   
    return this._http.post(this.APIURLBOUGHT,data);
  }


  /* test */
  setProduct(Product:any){
    this.cartItemList.push(...Product);
    this.productList.next(this.cartItemList)

  }

  addItemToCart(product: any) {
    this.cartItemList.push(product); // Add product to cart array
    this.productList.next(this.cartItemList); // Emit the updated cart

    // Post the product to the JSON server
    this._http.post(this.APIURLBOUGHT, product).subscribe(
      (response) => {
        console.log('Item successfully posted to the backend', response);
      },
      (error) => {
        console.error('Error posting item to the backend', error);
      }
    );
  }

  getCartItems() {
    return this.productList.asObservable();
  }

  

  removeCartItem(Product:any){
    this.cartItemList = this.cartItemList.filter((a: any) => a.id !== Product.id);
    this.productList.next(this.cartItemList);

    this._http.delete(`${this.APIURLBOUGHT}/${Product.id}`).subscribe(
      (response) => {
        console.log('Item successfully removed from the backend', response);
      },
      (error) => {
        console.error('Error removing item from the backend', error);
      }
    );
  }
  
  
 
}
