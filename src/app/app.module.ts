import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Array_json } from './array-json';

import { TablePaginationExample } from './taula_exem';
import { BarChartComponent } from './grafics';
import { NgChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';


import { MenuComponent } from './menu.component';
import { Global } from './global';
import { PersoPipe } from './pipe';
import { PipeRound } from './pipeRound';

@NgModule({
  declarations: [
    AppComponent,
    Array_json,
    TablePaginationExample,
    BarChartComponent,
    MenuComponent,
    Global,
    PersoPipe,
    PipeRound,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
  ],
  bootstrap: [Global]
})
export class AppModule { }
