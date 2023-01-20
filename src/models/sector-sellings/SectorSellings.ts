export class SectorSellings {
 private name: string
 private quantitySold: number
 private totalIncome: number
 private totalLost: number

 constructor(name: string, quantity: number, income: number, lost: number) {
  this.name = name
  this.quantitySold = quantity
  this.totalIncome = income
  this.totalLost = lost
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

 getTotalLost() {
  return this.totalLost
 }
}

