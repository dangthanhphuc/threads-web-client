import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faThumbTackSlash, faEllipsis } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './for-you.component.html',
  styleUrl: './for-you.component.scss'
})
export class ForYouComponent {
  faHome = faHome;
  faThumbTackSlash = faThumbTackSlash;
  faEllipsis = faEllipsis;
  
  isDropdownOpen = false;
  unpin = output<string>();

  itemsVertical = Array.from(
    new Array(length).keys(), // Khởi tạo giá trị từ 0 đến length - 1
    (item) => item + 1 // 
  );

  onUnpin() {
    this.unpin.emit("for-you");
  }
}
