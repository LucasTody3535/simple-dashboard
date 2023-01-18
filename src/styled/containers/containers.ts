import styled from "styled-components";

export const InfinityGridLayout = styled.div`
 display: grid;
 grid-auto-rows: 50%;
 grid-template-columns: repeat(2, 50%);
 width: 100%;
 height: 100%;
 overflow-y: scroll;
`

export const TitleAndContentGridLayout = styled.div`
 display: grid;
 height: 100%;
 width: 100%;
 grid-template-rows: 5% 95%;
 grid-template-columns: 100%;
`
