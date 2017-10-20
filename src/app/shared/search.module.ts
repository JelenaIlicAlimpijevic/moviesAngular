import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {SearchComponent} from '../components/search/search.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
  	
  ],
  declarations: [
  
    
  ],
  exports: [
    
  ]
})
export class SearchModule { }
