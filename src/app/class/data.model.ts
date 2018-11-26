export abstract class DataModel {

  constructor(data?: any) {
    if (data) {
      this.copyDataToModel(data);
    }
  }

  private copyDataToModel(data): void {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }
}
