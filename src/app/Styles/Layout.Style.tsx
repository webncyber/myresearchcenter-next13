"use client"
import styled from 'styled-components';
import { Page } from '../../../types';

interface iContentSection {
  contentBGColor?: string,
  contentTopSpacing?: string
}

interface iBodyBGColor {
  bodyBGColor?: string 
}
export const Body = styled.body<iBodyBGColor>`
background-color: ${(props) => props.bodyBGColor ? props.bodyBGColor : "#FFF"};

margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

`
export const HeadingSection = styled.div`
    width: 100%;
`
export const ContentCentered = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const HeroSection = styled.div`
  width: 100%;
`
export const ContentSection = styled.div<iContentSection>
`background-color: ${(props) => props.contentBGColor ? props.contentBGColor : "#FFF"};
    border-radius: 6px;
    width: 80%;
    position: absolute;    
    padding-right: 0px;
    @media screen and (max-width: 660px) {
        top: ${(props) => props.contentTopSpacing ? props.contentTopSpacing + "px" : "280px"}
      }

      @media screen and (min-width: 660px) {
        top: ${(props) => props.contentTopSpacing ? props.contentTopSpacing + "px" : "330px"}
      }

`

export const FooterSection = styled.div`
display: -webkit-flex;
display: flex;
justify-content: flex-end;
-webkit-justify-content: flex-end;
align-items: center;
padding-top: 40px;
  position: relative;

  div:first-child{
    width: 92%;
  }
`

export const Container = styled.div`
position: relative;
`