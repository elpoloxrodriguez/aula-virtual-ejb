import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from 'app/users/users.component';
import { EvaluationsComponent } from 'app/evaluations/evaluations.component';
import { CertificatesComponent } from 'app/certificates/certificates/certificates.component'
import { ClassRoomComponent } from 'app/class-room/class-room/class-room.component';
import { ListCertificatesComponent } from 'app/certificates/list-certificates/list-certificates.component';
import { ConfigurationCertificateComponent } from 'app/certificates/configuration-certificate/configuration-certificate.component';
import { ClassRoomItemComponent } from 'app/class-room/class-room-item/class-room-item.component';
import { AttendanceComponent } from 'app/attendance/attendance.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'class-room',     component: ClassRoomComponent },
    { path: 'class-room/class-room-item/:id',     component: ClassRoomItemComponent },
    { path: 'users',      component: UsersComponent },
    { path: 'evaluations',      component: EvaluationsComponent },
    { path: 'certificates',      component: CertificatesComponent },
    { path: 'certificates/list-certificates',     component: ListCertificatesComponent },
    { path: 'certificates/configuration-certificates',     component: ConfigurationCertificateComponent },
    { path: 'attendance',      component: AttendanceComponent },
];
