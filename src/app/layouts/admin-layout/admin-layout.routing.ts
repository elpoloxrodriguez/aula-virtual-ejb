import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ClassRoomItemComponent } from 'app/class-room-item/class-room-item.component';
import { ClassRoomPageComponent } from 'app/class-room-page/class-room-page.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'class-room',     component: TableListComponent },
    { path: 'class-room-item/:id',     component: ClassRoomItemComponent },
    { path: 'class-room-page/:id',     component: ClassRoomPageComponent },
];
