import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faHouse, faHome, faMagnifyingGlass, faPlus, faThumbTack, faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from '../like/like.component';
import { ForYouComponent } from "../for-you/for-you.component";
import { NotificationComponent } from "../notification/notification.component";
import { NotificationSectionComponent } from "../notification-section/notification-section.component";
import { PersonalPageSectionComponent } from "../personal-page-section/personal-page-section.component";
import { SearchSectionComponent } from "../search-section/search-section.component";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterOutlet,
    LikeComponent,
    ForYouComponent,
    NotificationComponent,
    NotificationSectionComponent,
    PersonalPageSectionComponent,
    SearchSectionComponent
],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent{
  faHome = faHome;
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;
  faHeart = faHeart;
  faUser = faUser;
  faThumbTack = faThumbTack;
  faBarsStaggered = faBarsStaggered;
  
  visitedPages : string[] = ["for-you"];
  activeOptions = 1;
  isDropdownOpen = false;

  @ViewChild('containerRef') containerRef!: ElementRef;
  
  constructor() {}

  unpinLike(event : string) {
    if(this.visitedPages.length > 1)
      this.visitedPages = this.visitedPages.filter((page) => page !== event);
    this.checkOverflow();

  }

  checkOverflow(): void {
    const container = this.containerRef.nativeElement;
    if (container) {
      if (container.scrollWidth > container.clientWidth) {
        container.classList.add('has-overflow');
      } else {
        container.classList.remove('has-overflow');
      }
    }
  }

  onClickOptions(option : number) {
    switch(option) {
      case 1:
        this.activeOptions = 1;
        this.visitedPages = ["for-you"];
        break;
      case 2:
        this.activeOptions = 2;
        this.visitedPages = ["search-section"];
        break;
      case 3:
        this.activeOptions = 3;
        this.visitedPages = ["like"];
        break;
      case 4:
        this.activeOptions = 4;
        this.visitedPages = ["personal-page-section"];
        break;
    }
  }

  onAddPage(page : string) {
    const exitsPage = this.visitedPages.includes(page);
    if(!exitsPage) {
      this.visitedPages.push(page);
      this.isDropdownOpen = false;
    }
  }

}
