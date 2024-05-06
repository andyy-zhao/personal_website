import { Component } from '@angular/core';
import { FooterLinksComponent } from '../footer-links/footer-links.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FooterLinksComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {
  
}
