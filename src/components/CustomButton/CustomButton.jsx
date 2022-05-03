import React from 'react';
import styled from "styled-components";

const CustomButton = (props) => {
    return (
        <Button mt={props.mt} disabled={props.disabled} width={props.width} onClick={()=>props.onClick()}>
            {props.children}
        </Button>
    );
};

export default CustomButton;

const Button = styled.button`
  background: #3258FB;
  border: none;
  box-shadow: 0 8px 16px rgba(50, 88, 251, 0.24);
  border-radius: 8px;
  width: ${props => props.width || '100%'};
  margin-top: ${props => props.mt || '0'};
  padding: 11px 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  color: #fff;
  cursor: pointer;
  :disabled{
    background: #919EAB;
    cursor: auto;
  }
`