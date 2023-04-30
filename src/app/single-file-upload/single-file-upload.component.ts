
import { Component } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  styleUrls: ['./single-file-upload.component.css'],
})
export class SingleFileUploadComponent {
  selectedFile!: File;
  previewUrl: any;
  uploadProgress!: number;
  message!: string;
  isSuccess = false;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile );
    
    this.previewFile();
  }

  previewFile() {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      //console.log(reader.result);
      this.previewUrl = reader.result;
    };
  }

  onUpload() {
    this.fileUploadService.upload([this.selectedFile]).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total!);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      (error) => {
        this.message = 'Failed to upload file';
      }
    );
  }
}
