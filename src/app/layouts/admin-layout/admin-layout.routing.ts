import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from 'app/users/users.component';
import { EvaluationsComponent } from 'app/evaluations/evaluations.component';
import { CertificatesComponent } from 'app/certificates/certificates.component'
import { ClassRoomComponent } from 'app/class-room/class-room/class-room.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'class-room',     component: ClassRoomComponent },
    // { path: 'class-room-item/:id',     component: ClassRoomItemComponent },
    // { path: 'class-room-page/:id',     component: ClassRoomPageComponent },
    { path: 'users',      component: UsersComponent },
    { path: 'evaluations',      component: EvaluationsComponent },
    { path: 'certificates',      component: CertificatesComponent },
];
