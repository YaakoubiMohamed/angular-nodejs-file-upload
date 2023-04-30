import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadService } from './file-upload.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';
import { MultipleFileUploadComponent } from './multiple-file-upload/multiple-file-upload.component'; 

@NgModule({
  declarations: [AppComponent, SingleFileUploadComponent, MultipleFileUploadComponent],
  imports: [
    BrowserAnimationsModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
