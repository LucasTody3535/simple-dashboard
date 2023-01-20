import { QuarterSells } from '../../static/static'
import SimpleBarChart from '../simple-bar-chart/SimpleBarChart'

interface IQuarterSellingsChart {
 quarter: string
 year: number
 sector: string
 for: "sellings" | "incomes" | "outcomes"
}

function QuarterSellingsChart(props: IQuarterSellingsChart) {

 const data = QuarterSells.find(sells => sells.getYear() === props.year)
  ?.getQuartersSellings().find(quarter => quarter.getQuarter() === props.quarter)
  ?.getSectorsSellings().filter(sector => sector.getName() !== props.sector)

 let legend = ""
 let barDataKey = ""
 let xAxisDatakey = ""
 let color = ""

 if(props.for === "sellings") {
  legend = "Total Sellings by Sector"
  barDataKey = "quantitySold"
  xAxisDatakey = "name"
  color = "hotpink"
 } else if(props.for === "incomes") {
  legend = "Total Income by Sector"
  barDataKey = "totalIncome"
  xAxisDatakey = "name"
  color = "limegreen"
 } else if(props.for === "outcomes") {
  legend = "Total Outcome by Sector"
  barDataKey = "totalLost"
  xAxisDatakey = "name"
  color = "red"
 }

 return(
  <SimpleBarChart data={data} xAxisDataKey={xAxisDatakey} barDataKey={barDataKey}
  legend={legend} color={color}>
  </SimpleBarChart>
 )
}

export default QuarterSellingsChart

