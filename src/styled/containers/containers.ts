import styled from "styled-components";

export const InfinityGridLayout = styled.div`
 display: grid;
 grid-auto-rows: 49%;
 grid-template-columns: repeat(3, 33%);
 width: 100%;
 height: 100%;
 overflow-y: scroll;
 column-gap: 2%;
 row-gap: 2%;
 padding: 0 2%;
`

export const TitleAndContentGridLayout = styled.div`
 display: grid;
 height: 100%;
 width: 100%;
 row-gap: 2%;
 grid-template-rows: 5% 93%;
 grid-template-columns: 100%;
`
