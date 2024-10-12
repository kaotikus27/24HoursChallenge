import { Component } from '@angular/core';
import { BenefitsComponent } from "../../headline/benefits/benefits.component";
import { TrendingComponent } from "../trending/trending.component";
import { NewarrivalsComponent } from "../../headline/newarrivals/newarrivals.component";
import { RecentlyboughtComponent } from '../recentlybought/recentlybought.component';
import { InstaComponent } from "../insta/insta.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [BenefitsComponent, TrendingComponent, NewarrivalsComponent, RecentlyboughtComponent, InstaComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
