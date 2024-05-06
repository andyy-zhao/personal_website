import { Component } from '@angular/core';
import { FooterLinksComponent } from '../footer-links/footer-links.component';

@Component({
  selector: 'app-volleyball',
  standalone: true,
  imports: [FooterLinksComponent],
  templateUrl: './volleyball.component.html',
  styleUrl: './volleyball.component.css'
})
export class VolleyballComponent {
  goToLink(url: string) {
    window.open(url, '_blank'); 
  }
}
