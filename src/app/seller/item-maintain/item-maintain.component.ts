import { Component, OnInit } from '@angular/core';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { ImageService } from 'src/app/service/image.service';

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
  isBuyerPage = false;

  maintainAction: MaintainAction = MaintainAction.Create;

  item = new Item();

  form: FormGroup;

  selectedFile: File;
  imgUrl = '';
  oldImgUrl = '';

  constructor(
    public itemApiService: ItemApiService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public imageService: ImageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'ID': [{ value: '', disabled: this.isBuyerPage }],
      'Name': [{ value: '', disabled: this.isBuyerPage }],
      'Category': [{ value: '', disabled: this.isBuyerPage }],
      'Unit': [{ value: '', disabled: this.isBuyerPage }],
      'Price': [{ value: '', disabled: this.isBuyerPage }],
      'Description': [{ value: '', disabled: this.isBuyerPage }],
    });

    this.activatedRoute.params.subscribe((routeParams: { id: string }) => {
      // reset
      this.maintainAction = routeParams.id === MaintainAction.Create ? MaintainAction.Create : MaintainAction.Update;
      this.selectedFile = undefined;
      this.imgUrl = '';
      this.oldImgUrl = '';
      this.afterRouteParamsChange();
      // get data
      this.itemApiService.getByKey(routeParams.id)
        .subscribe((item) => {
          this.item = item;
          this.oldImgUrl = this.item.Str1;
          this.imgUrl = this.item.Str1;
        });
    });
  }

  afterRouteParamsChange() {

  }

  save() {
    let saveOb = of(undefined);
    // 圖片
    if (!this.imgUrl) { this.item.Str1 = ''; }
    if (this.selectedFile && this.oldImgUrl !== this.imgUrl) {
      saveOb = saveOb.pipe(
        concatMap(x => this.imageService.uploadImg(this.selectedFile).pipe(tap((url: string) => { this.item.Str1 = url; }))),
      );
    }
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

  clickImg(fileInput) {
    if (this.isBuyerPage) { return; }
    fileInput.click();
  }

  cancel() {
    this.router.navigateByUrl('seller/item-management');
  }

  onFileChanged(event) {
    const files: FileList = event.target.files;
    const file: File = files[0];
    if (!file) { this.selectedFile = undefined; this.imgUrl = ''; return; }
    if (file.size > 1048576) { alert('圖片不可大於1mb'); return; }
    this.selectedFile = file;
    // 假url預覽圖片
    const reader = new FileReader();
    reader.onload = (onloadEvent: any) => {
      // 暫存圖片url
      this.imgUrl = onloadEvent.target.result;
    };
    reader.readAsDataURL(file);
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }
}
