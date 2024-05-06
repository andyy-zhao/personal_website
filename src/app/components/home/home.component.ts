import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterLinksComponent } from '../footer-links/footer-links.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})

export class HomeComponent {
  constructor(private router: Router) { }

  navigateToUrl(goTo: string) {
    this.router.navigateByUrl(goTo);
  }
}
