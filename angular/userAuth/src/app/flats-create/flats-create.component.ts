import { FlatserviceService } from './../services/flatservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl, RequiredValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flats-create',
  templateUrl: './flats-create.component.html',
  styleUrls: ['./flats-create.component.css']
})
export class FlatsCreateComponent{
  create: boolean = true;
  imageSrc: string;
  myForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    room: new FormControl('', [Validators.required]),
    bed: new FormControl('', [Validators.required]),
    wc: new FormControl('', [Validators.required]),
    mq: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
 });

 constructor(private http: HttpClient, private flatService: FlatserviceService) {}

 get f(){
   return this.myForm.controls;
 }



 onFileChange(event) {
   const reader = new FileReader();

   if(event.target.files && event.target.files.length) {
     const [file] = event.target.files;
     this.myForm.value.image = file;
     reader.readAsDataURL(this.myForm.value.image);

     reader.onload = () => {

       this.imageSrc = reader.result as string;

       this.myForm.patchValue({
         fileSource: reader.result
       });

     };

   }
 }


submit() {
   console.log(this.myForm.value);
   this.http.post('http://localhost:8000/api/flats', this.myForm.value)
     .subscribe(res => {
       if (res) {
        this.create = !this.create
       }
     })
  }

/* submit(){
  this.flatService.createFlat(this.myForm.value)
} */







}

