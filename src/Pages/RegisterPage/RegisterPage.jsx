import React, {useEffect} from 'react';
import useInput from "../../hooks/useInput";
import CustomInput from "../../components/CustomInput/CustomInput";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import { register} from "../../store/authStore";
import {Container, CustomNav, Error, HelpText, SubTittle, Tittle} from "../../generalStyle/generalStyle";
import {useHistory} from "react-router-dom";
import pageImage from "./img/Artboard.svg";
import Header from "../../components/Header/Header";

const RegisterPage = (props) => {
    const password = useInput('',{isEmpty:true})
    const email = useInput('',{isEmpty:true,email:true})
    const username = useInput('',{isEmpty:true})
    const first_name = useInput('',{isEmpty:true})
    const last_name = useInput('',{isEmpty:true})
    const dispatch = useDispatch()
    const selector = useSelector(state => state.auth)
    const history = useHistory();

    useEffect(()=>{
        if (selector.isAuth)
            history.push('/')
    },[selector.isAuth])

    const registerHandler =async () => {
        await dispatch(register({first_name:first_name.value,last_name:last_name.value,username:username.value,email:email.value,password:password.value}))
    }

    return (
        <RegisterPageContainer>
            <Header>
                <SubTittle>Уже есть аккаунт? <CustomNav to={'/login'}> Войти</CustomNav></SubTittle>
            </Header>
            <IMG>
                <img src={pageImage} alt=""/>
            </IMG>
            <Container>
                <RegisterPageContent>
                    <FormContainer>
                        <Tittle>Зарегистрироваться</Tittle>
                        <SubTittle>Зарегистрируйтесь, чтобы начать работу с сервисом:</SubTittle>

                        <Flex>
                            <CustomInput margin={'0'} width={'48%'} label={'Имя'} type="text" {...first_name} />
                            <CustomInput margin={'0'} width={'48%'} label={'Фамилия'} type="text" {...last_name} />
                        </Flex>
                        {(first_name.isDirty && first_name.isEmpty)||(last_name.isDirty && last_name.isEmpty) && <Error>Поля не могут быть пустыми</Error>}

                        <CustomInput label={'Username'} type="text" {...username} />
                        {(username.isDirty && username.isEmpty) && <Error>Поле не может быть пустым</Error>}

                        <CustomInput label={'Password'} type="password" {...password}/>
                        {(password.isDirty && password.isEmpty) &&  <Error>Поле не может быть пустым</Error>}

                        <CustomInput label={'Email'} type="email" {...email}/>
                        {(email.isDirty && email.isEmpty) &&  <Error>Поле не может быть пустым</Error>}
                        {(email.isDirty && email.emailError) && <Error>Введите корректный email</Error>}

                        <CustomButton mt={'24px'} onClick={registerHandler}>
                            Зарегестрироваться
                        </CustomButton>
                        <HelpText mt={24}>Регистрируясь, я соглашаюсь с минимальными условиями   обслуживания и <a
                            href="#">Политикой конфиденциальности.</a></HelpText>
                        <MobileRegister>
                            <div>Уже есть аккаунт? <CustomNav to={'/login'}> Войти</CustomNav></div>
                        </MobileRegister>
                    </FormContainer>
                </RegisterPageContent>
            </Container>
        </RegisterPageContainer>
    );
};

export default RegisterPage;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const RegisterPageContent = styled.div`
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

const MobileRegister = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
`
