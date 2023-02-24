import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthToDayPrice'
})
export class MonthToDayPricePipe implements PipeTransform {

  transform(costo: number, ...args: unknown[]): any {

    const dataAttuale: Date = new Date();
    const meseCorrente: number = dataAttuale.getMonth();
    const annoCorrente: number = dataAttuale.getFullYear();
    let costoGiornaliero = 0;
    switch(meseCorrente) {

      case 2:
        if ((annoCorrente % 4 === 0 && annoCorrente % 100 !== 0) || annoCorrente % 400 === 0) {
          costoGiornaliero = costo/29;
          break;
        } else {
          costoGiornaliero = costo/28;
          break;
        }

      case 4:
      case 6:
      case 9:
      case 11:
        costoGiornaliero = costo/30;
        break;

      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        costoGiornaliero = costo/31;
        break;
    }
    return costoGiornaliero;
  }
}
