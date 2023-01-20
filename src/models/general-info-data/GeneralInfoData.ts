export class GeneralInfoData {
 private kpi: string
 private totalSellings: number
 private totalIncome: number

 constructor(kpi: string, totalSellings: number, totalIncome: number) {
  this.kpi = kpi
  this.totalSellings = totalSellings
  this.totalIncome = totalIncome
 }

 getKpi() {
  return this.kpi
 }

 getTotalSellings() {
  return this.totalSellings
 }

 getTotalIncome() {
  return this.totalIncome
 }
}

