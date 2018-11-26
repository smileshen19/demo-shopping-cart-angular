import { DataModel } from "../class/data.model";

export interface ISale {
  SaleDetails: ISaleDetailsItem[];
  No: string;
  TradeDate: string;
  CustomerID: string;
  TaxRate: number;
  TaxID: string;
  ZipCode: string;
  City: string;
  District: string;
  Address: string;
  TotalAmount: number;
  TotalTax: number;
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

export interface ISaleDetailsItem {
  No: string;
  Seq: number;
  ItemID: string;
  ItemName: string;
  Unit: string;
  Qty: number;
  SalePrice: number;
  Discount: number;
  Price: number;
  Amount: number;
  IsFree: boolean;
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

export class Sale extends DataModel implements ISale {
  SaleDetails: ISaleDetailsItem[] = [new SaleDetailsItem()];
  No = '';
  TradeDate = '';
  CustomerID = '';
  TaxRate: number = null;
  TaxID = '';
  ZipCode = '';
  City = '';
  District = '';
  Address = '';
  TotalAmount: number = null;
  TotalTax: number = null;
  Memo = '';
  Str1 = '';
  Str2 = '';
  Str3 = '';
  Str4 = '';
  Int1: number = null;
  Int2: number = null;
  Mon1: number = null;
  Mon2: number = null;

  constructor(data?: ISale) {
    super(data);
    if (data) { this.copyDataToSelf(); }
  }
}

export class SaleDetailsItem implements ISaleDetailsItem {
  No = '';
  Seq: number = null;
  ItemID = '';
  ItemName = '';
  Unit = '';
  Qty: number = null;
  SalePrice: number = null;
  Discount: number = null;
  Price: number = null;
  Amount: number = null;
  IsFree = false;
  Memo = '';
  Str1 = '';
  Str2 = '';
  Str3 = '';
  Str4 = '';
  Int1: number = null;
  Int2: number = null;
  Mon1: number = null;
  Mon2: number = null;
}
