import { Component, OnInit } from '@angular/core';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const noImageUrl = './assets/image/noimage.jpg';

enum MaintainAction {
  Create = 'create',
  Update = 'update'
}

@Component({
  selector: 'app-item-maintain',
  templateUrl: './item-maintain.component.html',
  styleUrls: ['./item-maintain.component.css']
})
export class ItemMaintainComponent implements OnInit {

  maintainAction: MaintainAction = MaintainAction.Create;

  item = new Item();

  form: FormGroup;

  selectedFile: File;
  imgUrl: string;

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
      // reset
      this.maintainAction = routeParams.id === MaintainAction.Create ? MaintainAction.Create : MaintainAction.Update;
      this.selectedFile = undefined;
      this.imgUrl = undefined;
      // get data
      this.itemApiService.getByKey(routeParams.id)
        .subscribe((item) => {
          this.item = item;
        });
    });
  }

  save() {
    let saveOb = of(undefined);
    if (this.maintainAction === MaintainAction.Create) {
      saveOb = saveOb.pipe(concatMap(x => this.itemApiService.create(this.item)));
    } else {
      saveOb = saveOb.pipe(concatMap(x => this.itemApiService.update(this.item.ID, this.item)));
    }
    saveOb.subscribe((res) => {
      console.log('save() res = ', res);
      alert('存檔成功');
      this.router.navigateByUrl('seller/item-management');
    }, (err) => {
      console.error('save() err = ', err);
      alert('存檔失敗');
    });
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
