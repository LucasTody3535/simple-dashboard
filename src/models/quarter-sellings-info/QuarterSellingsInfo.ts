import { Quarters } from "../../enums/quarters/Quarters";
import { SectorSellings } from "../sector-sellings/SectorSellings";

export class QuarterSellingsInfo {
 private quarter: Quarters
 private sectorsSellings: Array<SectorSellings>

 constructor(quarter: Quarters, sectorsSellings: Array<SectorSellings>) {
  this.quarter = quarter
  this.sectorsSellings = sectorsSellings
 }

 getQuarter() {
  return this.quarter
 }

 getSectorsSellings() {
  return this.sectorsSellings
 }

 getTotalSold(excludeSector: string) {
  return this.getSectorsSellings()
   .filter((sector) => sector.getName() !== excludeSector)
   .map(sector => sector.getQuantitySold())
   .reduce((previous, actual) => previous + actual)
 }

 getTotalIncome(excludeSector: string) {
  return this.getSectorsSellings()
   .filter((sector) => sector.getName() !== excludeSector)
   .map(sector => sector.getTotalIncome())
   .reduce((previous, actual) => previous + actual)
 }

 getTotalLoss(excludeSector: string) {
  return this.getSectorsSellings()
   .filter((sector) => sector.getName() !== excludeSector)
   .map(sector => sector.getTotalLost())
   .reduce((previous, actual) => previous + actual)
 }
}

