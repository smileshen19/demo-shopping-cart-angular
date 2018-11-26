import { DataModel } from '../class/data.model';

export interface ICustomer {
  ID: string;
  Name: string;
  TaxID: string;
  ContactName: string;
  ContactTitle: string;
  CellPhone: string;
  Tel: string;
  Fax: string;
  EMail: string;
  ZipCode: string;
  City: string;
  District: string;
  Address: string;
  Memo: string;
  Str1: string;
  Str2: string;
  Str3: string;
  Str4: string;
  Int1: number;
  Int2: number;
  Mon1: number;
  Mon2: number;
}

export class Customer extends DataModel implements ICustomer {
  ID = '';
  Name = '';
  TaxID = '';
  ContactName = '';
  ContactTitle = '';
  CellPhone = '';
  Tel = '';
  Fax = '';
  EMail = '';
  ZipCode = '';
  City = '';
  District = '';
  Address = '';
  Memo = '';
  Str1 = '';
  Str2 = '';
  Str3 = '';
  Str4 = '';
  Int1: number = null;
  Int2: number = null;
  Mon1: number = null;
  Mon2: number = null;

  constructor(data?: ICustomer) {
    super(data);
    if (data) { this.copyDataToSelf(); }
  }

}
