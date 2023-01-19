import { Quarters } from "../enums/quarters/Quarters"
import { AnnualSellingsInfo } from "../models/annual-sellings-info/AnualSellingsInfo"
import { QuarterSellingsInfo } from "../models/quarter-sellings-info/QuarterSellingsInfo"
import { SectorSellings } from "../models/sector-sellings/SectorSellings"

export const QuarterSells: Array<AnnualSellingsInfo> = [
 new AnnualSellingsInfo(2022, [
  new QuarterSellingsInfo(Quarters.FIRST_QUARTER, [
   new SectorSellings("Bakery", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Drinks", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Butchery", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Cereals", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000))
  ]),
  new QuarterSellingsInfo(Quarters.SECOND_QUARTER, [
   new SectorSellings("Bakery", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Drinks", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Butchery", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Cereals", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000))
  ]),
  new QuarterSellingsInfo(Quarters.THIRD_QUARTER, [
   new SectorSellings("Bakery", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Drinks", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Butchery", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000)),
   new SectorSellings("Cereals", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 20000))
  ])
 ])
]

