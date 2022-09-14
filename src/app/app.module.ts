import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderComponent } from './components/header/header.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { TableTabComponent } from './components/table-tab/table-tab.component';
import { ChartTabComponent } from './components/chart-tab/chart-tab.component';
import {MatTableModule} from "@angular/material/table";

const appRoutes: Routes = [
  {path: '', component: TableTabComponent},
  {path: 'chart', component: ChartTabComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    TableTabComponent,
    ChartTabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
