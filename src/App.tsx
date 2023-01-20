import {
 GrayFullSizeDivContainerRounded,
 InfinityGridLayout,
 NavAndContentGridLayout,
 TinyAndBigColumnsGridLayout } from './styled/containers/containers'
import { HorizontalMenuWithThreeItems } from './styled/menus/menus'
import { CenteredSelector } from './styled/selectors/selectors'
import { Quarters } from './enums/quarters/Quarters'
import { QuarterSells } from './static/static'
import { useState } from 'react'
import GeneralInfo from './components/general-info/GeneralInfo'
import QuarterSellingsChart from './components/quarter-sellings-chart/QuarterSellingsChart'
import MediumTicket from './components/medium-ticket/MediumTicker'

function getQuarters() {
 return [Quarters.FIRST_QUARTER, Quarters.SECOND_QUARTER, Quarters.THIRD_QUARTER]
}

function getYears() {
 return QuarterSells.map(quarters => quarters.getYear())
}

function getSectors() {
 return QuarterSells.at(0)?.getQuartersSellings().at(0)?.getSectorsSellings().map(sector => sector.getName())
}

function App() {
  const [quarter, setQuarter] = useState(Quarters.FIRST_QUARTER)
  const [year, setYear] = useState(getYears().at(0)!)
  const [sector, setSector] = useState('None')

  function treatQuarterChange(ev: any) {
   const quarter = (ev.currentTarget as HTMLSelectElement).value
   if(quarter === Quarters.FIRST_QUARTER) setQuarter(Quarters.FIRST_QUARTER)
   else if(quarter === Quarters.SECOND_QUARTER) setQuarter(Quarters.SECOND_QUARTER)
   else if(quarter === Quarters.THIRD_QUARTER) setQuarter(Quarters.THIRD_QUARTER)
  }

  function treatYearChange(ev: any) {
   const year = Number((ev.currentTarget as HTMLSelectElement).value)
   setYear(year);
  }

  function treateSectorChange(ev: any) {
   const sector = (ev.currentTarget as HTMLSelectElement).value
   setSector(sector)
  }

  return (
   <NavAndContentGridLayout>
    <HorizontalMenuWithThreeItems>
     <CenteredSelector value={quarter} onChange={treatQuarterChange}>
      {getQuarters().map((quarter, index) =>
       <option key={index}>{quarter}</option>
      )}
     </CenteredSelector>
     <CenteredSelector value={year} onChange={treatYearChange}>
      {getYears().map((year, index) =>                                           
       <option key={index}>{year}</option>                                     
      )} 
     </CenteredSelector>
     <CenteredSelector value={sector} onChange={treateSectorChange}>
      <option>None</option>
      {getSectors()?.map((sector, index) =>
       <option key={index}>{sector}</option>
      )} 
     </CenteredSelector>
    </HorizontalMenuWithThreeItems>
    <TinyAndBigColumnsGridLayout>
     <GeneralInfo quarter={quarter} year={year} sector={sector}></GeneralInfo>
     <InfinityGridLayout>
      <GrayFullSizeDivContainerRounded>
       <QuarterSellingsChart quarter={quarter} year={year} sector={sector} for="sellings"></QuarterSellingsChart>
      </GrayFullSizeDivContainerRounded>
      <GrayFullSizeDivContainerRounded>
       <QuarterSellingsChart quarter={quarter} year={year} sector={sector} for="incomes"></QuarterSellingsChart>
      </GrayFullSizeDivContainerRounded>
      <GrayFullSizeDivContainerRounded>
       <QuarterSellingsChart quarter={quarter} year={year} sector={sector} for="outcomes"></QuarterSellingsChart>
      </GrayFullSizeDivContainerRounded>
      <GrayFullSizeDivContainerRounded>
       <MediumTicket quarter={quarter} year={year} sector={sector}></MediumTicket>
      </GrayFullSizeDivContainerRounded>
     </InfinityGridLayout>
    </TinyAndBigColumnsGridLayout>
   </NavAndContentGridLayout>
  )
}

export default App

