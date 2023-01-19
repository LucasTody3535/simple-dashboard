import styled from "styled-components";

export const InfinityGridLayout = styled.div`
 display: grid;
 grid-auto-rows: 49%;
 grid-template-columns: repeat(2, 49%);
 width: 100%;
 height: 100%;
 overflow-y: scroll;
 column-gap: 2%;
 row-gap: 2%;
 padding: 2%;
`

export const TitleAndContentGridLayout = styled.div`
 display: grid;
 height: 100%;
 width: 100%;
 row-gap: 2%;
 grid-template-rows: 30px auto;
 grid-template-columns: 100%;
`

export const GrayTitleAndContentGridLayout = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 5% 95%;
  grid-template-columns: 100%;
  background-color: rgba(33, 31, 31, 0.1);
  padding: 2px;
`
