export abstract class DataModel {


  constructor(private originData?) {

  }

  protected copyDataToSelf(): void {
    if (this.originData) {
      // console.log(`DataModel copyDataToModel() origin data = `, this.originData);
      for (const key in this.originData) {
        if (this.originData.hasOwnProperty(key)) {
          this[key] = this.originData[key];
        }
      }
      // console.log(`DataModel copyDataToModel() this = `, this);
    }

  }
}
