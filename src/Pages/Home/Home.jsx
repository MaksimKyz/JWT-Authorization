import React, {useEffect} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {checkLogin, userMe} from "../../store/authStore";
import {Container, SubTittle} from "../../generalStyle/generalStyle";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = (props) => {
    const selector = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(checkLogin())
            dispatch(userMe())
    },[])

    return (
        <HomeContainer>
            <HomeHeader/>
            <Overlay/>
            <Container>
                <HomeContent>
                    <HomeTittle>
                        <span>
                            Start a <br/>
                            new project<br/>
                            with <Color>FullStats</Color>
                        </span>
                    </HomeTittle>
                    <Description>
                        Платформа для аналитики поможет вам в выборе товара или ниши, анализи конкурентов,  увеличении продаж и в ускорении оборачиваемости вашего товара
                    </Description>
                    <CustomButton width={'177px'} mt={'40px'}>Перейти к сервису</CustomButton>
                </HomeContent>
            </Container>
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`
const HomeContent = styled.div`
    color: #fff;
    width: 100%;
  height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 600px) {
      align-items: center;
      justify-content: flex-start;
      margin-top: 300px;
    }
`

const HomeTittle = styled.div`
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  color: #FFFFFF;
  @media (max-width: 600px) {
    text-align: center;
    font-size: 32px;
    line-height: 48px;
  }
  
`
const Color = styled.span`
  color: #3258FB;
`

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  max-width: 466px;
  margin-top: 40px;
  @media (max-width: 600px) {
    text-align: center;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  z-index: -100;
  height: 100%;
  width: 100%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  background: radial-gradient(106.64% 115.35% at 4.1% 5.52%, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 0.8) 45.53%, #161C24 100%, #161C24 100%, #161C24 100%)
`