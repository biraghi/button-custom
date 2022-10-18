import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyTableComponent } from './my-table/my-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTableComponent,
    SearchFilterPipe,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
