import { Component, OnInit } from '@angular/core';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { FormGroup, FormBuilder } from '@angular/forms';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-item-maintain',
  templateUrl: './item-maintain.component.html',
  styleUrls: ['./item-maintain.component.css']
})
export class ItemMaintainComponent implements OnInit {

  item = new Item();

  form: FormGroup;

  selectedFile: File;

  constructor(
    private itemApiService: ItemApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      'ID': [''],
      'Name': [''],
      'Category': [''],
      'Unit': [''],
      'Price': [''],
      'Description': [''],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeParams: { id: string }) => {
      this.itemApiService.getByKey(routeParams.id)
        .subscribe((item) => {
          this.item = item;
        });
    });
  }

  save() {
    this.router.navigateByUrl('seller/item-management');
  }

  cancel() {
    this.router.navigateByUrl('seller/item-management');
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }
}
