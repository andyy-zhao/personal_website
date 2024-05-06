import { Component } from '@angular/core';
import { FooterLinksComponent } from '../footer-links/footer-links.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {
  public message: number = 0;
  public messages: string[] = [
    "here's a little bit about me", 
    "gym bro",
    "volleyball player",
    "has a dog named mochi",
    "will say it's not spicy",
    "will travel 5000km for food",
    "pretend guitarist",
    "ping pong genius",
    "eats faster than you",
    "loves pickles",
    "mmm pickle pizza",
    "loves backcountry camping",
    "loves EDM",
    "karaoke professional",
  ]
  desktop: string = 'desktop';
  desktopDesc: string = 'desktopDesc';

  private msgTimer = setTimeout(()=>{}, 0);

  public newMessage = () => {
    const oldVal = this.message;
    while (oldVal === this.message) this.message = Math.floor(Math.random() * this.messages.length);
    clearTimeout(this.msgTimer);
    this.msgTimer = setTimeout(() => {
      this.newMessage();
    }, 5000);
  }
}
