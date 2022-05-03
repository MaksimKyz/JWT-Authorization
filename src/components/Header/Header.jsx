import React from 'react';
import styled from "styled-components";
import logo from './Img/logo.svg'
import {Container} from "../../generalStyle/generalStyle";
import {NavLink, useHistory} from "react-router-dom";

const Header = (props) => {
    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <Logo to={'/'}>
                        <img src={logo} alt=""/>
                        <Text>FullStats</Text>
                    </Logo>
                    <Info>
                        {props.children}
                    </Info>
                </HeaderContent>
            </Container>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
  height: 65px;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Info = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`

const Logo = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  cursor: pointer;
  z-index: 2;
  text-decoration: none;
  color: #333333;
`

const Text = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const Status = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  a{
    text-decoration: none;
    color: #fff;
  }
`