import { QuarterSells } from "../../static/static"
import { TitleAndContentGridLayout } from "../../styled/containers/containers"
import { BannerText, HeadingTextLevelThreeCenteredFlexCentered } from "../../styled/texts/texts"

interface IMediumTicket {
 quarter: string
 year: number
 sector: string
}

function MediumTicket(props: IMediumTicket) {
 const data = QuarterSells.find(sells => sells.getYear() === props.year)
  ?.getQuartersSellings().find(quarter => quarter.getQuarter() === props.quarter)
 const ticket = data!.getTotalIncome(props.sector) / data!.getTotalSold(props.sector)

 return (
  <TitleAndContentGridLayout>
   <HeadingTextLevelThreeCenteredFlexCentered>Medium Ticket</HeadingTextLevelThreeCenteredFlexCentered>
   <BannerText>${ ticket.toFixed(2) }</BannerText>
  </TitleAndContentGridLayout>
 )
}

export default MediumTicket
