import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.less'
})
export class NavComponent {
  public isMenuOpen: boolean=false;
  private currentPage: string = "";

  constructor(private router: Router) { }

  public toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public switchTabs = (goTo: string) => {
    this.isMenuOpen = false;
    this.router.navigateByUrl(goTo);
  }

  public show = (page: string): boolean => {
    if (page === this.currentPage) return false;
    return true;
  }

}
