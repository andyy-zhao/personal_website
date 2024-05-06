import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterLinksComponent } from '../footer-links/footer-links.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FooterLinksComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.less'
})

export class ExperienceComponent {
  isDisplayingDescription = [false];

  toggleDescription(index: number) {
      this.isDisplayingDescription[index] = !this.isDisplayingDescription[index];
  }

  isDisplaying(index: number): boolean {
      return this.isDisplayingDescription[index];
  }

}
