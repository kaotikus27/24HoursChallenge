import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-shoppingbag',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './shoppingbag.component.html',
  styleUrl: './shoppingbag.component.scss'
})
export class ShoppingbagComponent {

}
