import { QuarterSellingsInfo } from "../quarter-sellings-info/QuarterSellingsInfo"

export class AnnualSellingsInfo {
 private year: number
 private quartersSellings: Array<QuarterSellingsInfo>

 constructor(year: number, quartersSellings: Array<QuarterSellingsInfo>) {
  this.year = year
  this.quartersSellings = quartersSellings
 }

 getYear() {
  return this.year
 }

 getQuartersSellings() {
  return this.quartersSellings
 }
}
