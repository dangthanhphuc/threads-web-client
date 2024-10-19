import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faThumbTackSlash, faEllipsis } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-notification-section',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './notification-section.component.html',
  styleUrl: './notification-section.component.scss'
})
export class NotificationSectionComponent {
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
    this.unpin.emit("notification-section");
  }
}
