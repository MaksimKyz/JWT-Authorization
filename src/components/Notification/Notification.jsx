import React from 'react';
import styled from "styled-components";
import Shape from './Shape.svg'
const Notification = (props) => {
    return (
        <NotificationContainer>
            <Icon>
                <img src={Shape} alt=""/>
            </Icon>
            {props.children}
        </NotificationContainer>
    );
};

export default Notification;

const NotificationContainer = styled.div`
  background: rgba(50, 88, 251, 0.2);
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
  padding: 14px 12px;
  display: flex;
  word-wrap: break-word;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
`