import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HeaderComponent } from './header/header.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { FilterPipe } from './user-details/filter.pipe';
// Mat Files
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {DialogboxComponent } from './dialogbox/dialogbox.component';
import {MatStepperModule} from '@angular/material/stepper';

const routes: Routes = [
  { path : '', component:UserDetailsComponent},
  { path: 'new', component:AdduserComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SidenavComponent,
    HeaderComponent,
    UserDetailsComponent,
    AdduserComponent,
    AddArtistComponent,
    FilterPipe,
    DialogboxComponent,
   
  ],
  
  imports:[
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule, MatListModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatMenuModule, MatDialogModule,  MatTableModule, MatStepperModule
  ],

  exports: [FilterPipe],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
