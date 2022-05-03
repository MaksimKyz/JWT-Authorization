import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import {Container, CustomNav, SubTittle, Tittle} from "../../generalStyle/generalStyle";
import pageImage from "../Login/img/Artboard Copy.svg";
import Notification from "../../components/Notification/Notification";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import CustomButton from "../../components/CustomButton/CustomButton";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

const Forgot = (props) => {
    const email = useInput('')
    return (
        <ForgotPageContainer>
            <Header/>
            <Container>
                <ForgotPageContent>
                    <FormContainer>
                        <Tittle>Забыли свой пароль?</Tittle>
                        <SubTittle>Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам ссылку для сброса пароля.</SubTittle>
                        <CustomInput margin={'24px 0'} label={'Email'} type="text" {...email}/>
                        <CustomButton >
                            Восстановить пароль
                        </CustomButton>
                        <Flex>
                            <CustomNav to={'/login'}>Назад</CustomNav>
                        </Flex>
                    </FormContainer>
                </ForgotPageContent>
            </Container>
        </ForgotPageContainer>
    );
};

export default Forgot;



const ForgotPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ForgotPageContent = styled.div`
  display: flex;
  justify-content: center;
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
const FormContainer = styled.div`
  width: 480px;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Flex = styled.div`
display: flex;
  justify-content: center;
  margin-top: 20px;
`