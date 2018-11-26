import { HttpService } from '../service/http.service';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export abstract class WebApiService<DataInterface, DataModel> {

  apiUrl = environment.webApiUrl;
  apiName: string;
  httpService: HttpService;

  private _dataModelConstructor: { new(data?: DataInterface): DataModel };

  constructor(
    apiName: string,
    _dataModelConstructor: { new(data?: DataInterface): DataModel },
    httpService: HttpService,
  ) {
    this.apiName = apiName;
    this._dataModelConstructor = _dataModelConstructor;
    this.httpService = httpService;
  }

  getAll(): Observable<DataModel[]> {
    return this.httpService.get(`${this.apiUrl}/${this.apiName}`)
      .pipe(
        tap(x => { console.log(`${this.apiName}: getAll()`, x); }),
        map((x: DataInterface[]) => x.map(y => new this._dataModelConstructor(y)))
      );
  }

  getByKey(key: string | number): Observable<DataModel> {
    return this.httpService.get(`${this.apiUrl}/${this.apiName}`)
      .pipe(
        tap(x => { console.log(`${this.apiName}: getByKey(${key})`, x); }),
        map((x: DataInterface) => new this._dataModelConstructor(x))
      );
  }

  create(data: DataInterface): Observable<DataModel> {
    return this.httpService.post(`${this.apiUrl}/${this.apiName}`, data)
      .pipe(
        tap(x => { console.log(`${this.apiName}: create()`, data, x); }),
        map((x: DataInterface) => new this._dataModelConstructor(x))
      );
  }

  update(key: string | number, data: DataInterface): Observable<DataModel> {
    return this.httpService.put(`${this.apiUrl}/${this.apiName}/${key}`, data)
      .pipe(
        tap(x => { console.log(`${this.apiName}: update(${key})`, data, x); }),
        map((x: DataInterface) => new this._dataModelConstructor(x))
      );
  }

  delete(key: string | number): Observable<any> {
    return this.httpService.delete(`${this.apiUrl}/${this.apiName}/${key}`)
      .pipe(
        tap(x => { console.log(`${this.apiName}: delete(${key})`, x); }),
      );
  }
}
