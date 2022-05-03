import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 250px;
  height: 100%;
  @media (max-width: 1250px) {
    margin: 0 150px;
  }
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`

export const Tittle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`

export const SubTittle = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #333333;    
`

export const HelpText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #919EAB;
  margin-top: ${(props) => `${props.mt}px`};
`
export const CustomNav = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #3258FB;
  text-decoration: none;
`
export const Error = styled.div`
  font-size: 10px;
  color: red;
`
export const BigError = styled.div`
  font-weight: bolder;
  font-size: 12px;
  color: red;
`