import { DataModel } from "../class/data.model";

export interface IItem {
  ID: string;
  Name: string;
  Unit: string;
  Category: string;
  Price: number;
  Description: string;
  Barcode: string;
  SafetyStock: number;
  StopDate: string;
  Str1: string;
  Str2: string;
  Str3: string;
  Str4: string;
  Int1: number;
  Int2: number;
  Mon1: number;
  Mon2: number;
}

export class Item extends DataModel implements IItem {
  ID = '';
  Name = '';
  Unit = '';
  Category = '';
  Price: number = null;
  Description = '';
  Barcode = '';
  SafetyStock: number = null;
  StopDate: string = null;
  Str1 = '';
  Str2 = '';
  Str3 = '';
  Str4 = '';
  Int1: number = null;
  Int2: number = null;
  Mon1: number = null;
  Mon2: number = null;

  constructor(data?: IItem) {
    super(data);
  }

}
