import React from 'react';
import styled from "styled-components";
import {Container} from "../../../generalStyle/generalStyle";
import logo from './Img/logo.svg'
import {NavLink} from "react-router-dom";
import { useSelector} from "react-redux";
import MyProfile from "../MyProfile/MyProfile";
const HomeHeader = (props) => {
    const selector = useSelector(state => state.auth)
    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <Logo>
                        <img src={logo} alt=""/>
                        FullStats
                    </Logo>
                    <Status>
                        {selector.isAuth
                            ?  <MyProfile/>
                            :  <NavLink to={'/login'}>Войти</NavLink>
                            }
                    </Status>
                </HeaderContent>
            </Container>
        </HeaderContainer>
    );
};

export default HomeHeader;

const HeaderContainer = styled.div`
  height: 65px;
  position: absolute;
  width: 100%;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Logo = styled.div`
  width: 140px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
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