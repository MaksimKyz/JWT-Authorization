import React, {useEffect, useState} from 'react';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {login, setCheckedFollow} from "../../store/authStore";
import {BigError, Container, CustomNav, Error, HelpText, SubTittle, Tittle} from "../../generalStyle/generalStyle";
import { useHistory } from "react-router-dom";
import pageImage from './img/Artboard Copy.svg'
import Notification from "../../components/Notification/Notification";
import Header from "../../components/Header/Header";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";

const Login = (props) => {
    const username = useInput('',{isEmpty:true})
    const password = useInput('',{isEmpty:true})
    const dispatch = useDispatch()
    const selector = useSelector(state => state.auth)
    const history = useHistory();


    useEffect(()=>{
        if (selector.isAuth)
            history.push('/')
    },[selector.isAuth])

    const loginHandler = () => {
             dispatch(login({username:username.value,password:password.value}))
    }
    const checked = ()=>{
        dispatch(setCheckedFollow())
    }


    const disabled = !username.inputValid || !password.inputValid

    return (
        <LoginPageContainer>
            <Header>
                <SubTittle>Нет учетной записи? <CustomNav to={'/register'}>Зарегистрироваться</CustomNav></SubTittle>
            </Header>
            <IMG>
                <img src={pageImage} alt=""/>
            </IMG>
            <Container>
                <LoginPageContent>
                    <FormContainer>
                        <Tittle>Войти</Tittle>
                        <SubTittle>Введите свои данные ниже</SubTittle>

                        <NotificationContainer>
                            <Notification>
                                Используй email: demo@minimals.ru /  пароль: demo1234
                            </Notification>
                        </NotificationContainer>
                        {selector.error?<BigError>Неправельно введены данные</BigError>:''}

                        <CustomInput label={'Username'} type="text" {...username}/>
                        {(username.isDirty && username.isEmpty) && <Error>Поле не может быть пустым</Error>}

                        <CustomInput label={'Password'} type="password" {...password}/>
                        {(password.isDirty && password.isEmpty) && <Error>Поле не может быть пустым</Error>}
                        <Flex>
                            <div>
                                <CustomCheckbox
                                    checked={selector.checkedFollow}
                                    onChange={checked}
                                >Запомнить меня</CustomCheckbox>
                            </div>
                            <CustomNav to={'/forgot'}>Забыли пароль?</CustomNav>
                        </Flex>

                        <CustomButton disabled={disabled} onClick={loginHandler}>
                            Войти
                        </CustomButton>

                        <MobileRegister>
                            <div>Нет учетной записи? <CustomNav to={'/register'}>Зарегистрироваться</CustomNav></div>
                        </MobileRegister>
                    </FormContainer>
                </LoginPageContent>
            </Container>
        </LoginPageContainer>
    );
};

export default Login;

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const LoginPageContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 1100px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`

const IMG = styled.div`
  position: absolute;
  left: 10%;
  box-shadow: 0 16px 32px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    display: none;
  }
`

const FormContainer = styled.div`
  width: 480px;
  @media (max-width: 600px) {
    width: 100%;
  }
`


const NotificationContainer = styled.div`
  margin-top: 40px;
`

const MobileRegister = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
`

const Flex = styled.div`
display: flex;
  justify-content: space-between;
  margin: 24px 0;
`