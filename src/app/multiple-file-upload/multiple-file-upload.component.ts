// src/app/multiple-file-upload/multiple-file-upload.component.ts

import { Component } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-multiple-file-upload',
  templateUrl: './multiple-file-upload.component.html',
  styleUrls: ['./multiple-file-upload.component.css'],
})
export class MultipleFileUploadComponent {
  selectedFiles!: File[];
  previewUrls: any[] = [];
  uploadProgress!: number;
  message!: string;
  isSuccess = false;

  constructor(private fileUploadService: FileUploadService) {}

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    
    
    this.previewFiles(this.selectedFiles);
  }

  previewFiles(selectedFiles: Blob[]) {
    console.log(selectedFiles);
    this.previewUrls = [];
    selectedFiles.forEach((file: Blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      //console.log(reader);
      
      reader.onload = () => {
        //console.log(reader.result);
        this.previewUrls.push(reader.result);
        console.log(this.previewUrls);
      };
    });
  }

  onUpload() {
    this.fileUploadService.upload(this.selectedFiles).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total!);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      (error) => {
        this.message = 'Failed to upload files';
      }
    );
  }
}
