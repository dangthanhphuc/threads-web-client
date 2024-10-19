import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { NotificationSectionComponent } from './components/notification-section/notification-section.component';
import { PersonalPageSectionComponent } from './components/personal-page-section/personal-page-section.component';

export const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },

    { path: 'homepage', component: HomepageComponent },
    { path: 'search-section', component: SearchSectionComponent },
    { path: 'notification-section', component: NotificationSectionComponent },
    { path: 'personal-page-section', component: PersonalPageSectionComponent },

    { path: '**', component: HomepageComponent }
];
