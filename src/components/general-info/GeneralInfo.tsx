import { GeneralInfoData } from "../../models/general-info-data/GeneralInfoData"
import {QuarterSells} from "../../static/static";
import { GrayFilledTitleAndContentGridLayout, VerticalTripleBoxGridLayout } from "../../styled/containers/containers"
import { BannerText, HeadingTextLevelThreeCenteredFlexCentered } from "../../styled/texts/texts";

interface IGeneralInfo {
 quarter: string
 year: number
 sector: string
}

function GeneralInfo(props: IGeneralInfo) {
 const sells = QuarterSells
   .find((sell) => sell.getYear() === props.year)
   ?.getQuartersSellings().find(quarter => quarter.getQuarter() === props.quarter)

 const info = new GeneralInfoData("Sales", sells?.getTotalSold(props.sector) || 0, sells?.getTotalIncome(props.sector) || 0)

 return (
  <VerticalTripleBoxGridLayout>

   <GrayFilledTitleAndContentGridLayout>
    <HeadingTextLevelThreeCenteredFlexCentered>KPI</HeadingTextLevelThreeCenteredFlexCentered>
    <BannerText>{info.getKpi()}</BannerText>
   </GrayFilledTitleAndContentGridLayout>

   <GrayFilledTitleAndContentGridLayout>
    <HeadingTextLevelThreeCenteredFlexCentered>Sellings</HeadingTextLevelThreeCenteredFlexCentered>
    <BannerText>{info.getTotalSellings()}</BannerText>
   </GrayFilledTitleAndContentGridLayout>

   <GrayFilledTitleAndContentGridLayout>
    <HeadingTextLevelThreeCenteredFlexCentered>Income</HeadingTextLevelThreeCenteredFlexCentered>
    <BannerText>{info.getTotalIncome()}</BannerText>
   </GrayFilledTitleAndContentGridLayout>

  </VerticalTripleBoxGridLayout>
 )
}

export default GeneralInfo
