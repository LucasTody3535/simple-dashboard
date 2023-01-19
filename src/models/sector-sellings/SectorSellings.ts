export class SectorSellings {
 private name: string
 private quantitySold: number
 private totalIncome: number

 constructor(name: string, quantity: number, income: number) {
  this.name = name
  this.quantitySold = quantity
  this.totalIncome = income
 }

 getName() {
  return this.name
 }

 getQuantitySold() {
  return this.quantitySold
 }

 getTotalIncome() {
  return this.totalIncome
 }
}

