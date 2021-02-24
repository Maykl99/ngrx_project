import { ActivatedRoute, Router } from '@angular/router';
import { Flat } from './../classes/Flat';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FlatserviceService } from '../services/flatservice.service';


@Component({
  selector: 'app-flats-edit',
  templateUrl: './flats-edit.component.html',
  styleUrls: ['./flats-edit.component.css']
})
export class FlatsEditComponent implements OnInit {

  id: number;
  flat: Flat;
  form: FormGroup;
  imageSrc: string;

  constructor(
    public flatService: FlatserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['flatId'];
    this.flatService.find(this.id).subscribe((data: Flat)=>{
      this.flat = data['data'];
  });

  this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      room: new FormControl('', [Validators.required]),
      bed: new FormControl('', [Validators.required]),
      wc: new FormControl('', [Validators.required]),
      mq: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.form.value.image = file;
      reader.readAsDataURL(this.form.value.image);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.form.patchValue({
          fileSource: reader.result
        });

      };

    }
  }

  /* submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    })
  } */

  submit(){
    console.log(this.form.value);
    this.flatService.updateFlat(this.id, this.form.value)
      .subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/flats');
    })
  }

}
