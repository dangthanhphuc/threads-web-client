import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faThumbTackSlash, faEllipsis } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './like.component.html',
  styleUrl: './like.component.scss'
})
export class LikeComponent {
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
    this.unpin.emit("like");
  }
}
