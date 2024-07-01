
"use client"
import styled from 'styled-components';

interface iCardBGColor {
    cardBGColor?: string 
  }

interface iRowSpace{
  rowSpace?: string 
}  
export const GridCardContentStyle = styled.div<iCardBGColor>`
padding-top: 0.5rem;
padding-left: 2rem;
padding-right: 2rem;
background-color: ${(props) => props.cardBGColor ? props.cardBGColor : undefined};
`

export const CardItemStyle = styled.div<iCardBGColor>`
background-color: ${(props) => props.cardBGColor ? props.cardBGColor : undefined};
`

export const GridRowSpacing = styled.div<iRowSpace>`
height: ${(props) => props.rowSpace ? props.rowSpace : undefined}px;
`