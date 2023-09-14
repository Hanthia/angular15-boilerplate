import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// Modules
import { MainRoutingModule } from '../main/main-routing.module';
import { SharedModule } from './shared/shared.module';

// Layouts
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
 //footer
 //applayout

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavbarComponent,
  ],
  imports: [MainRoutingModule, CommonModule, SharedModule, DashboardModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {}
