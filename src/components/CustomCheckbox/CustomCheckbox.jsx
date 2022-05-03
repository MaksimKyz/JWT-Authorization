import React from 'react';
import styled from "styled-components";

const CustomCheckbox = (props) => {
    return (
        <CheckboxContainer  onClick={()=>props.onChange()}>
            <StyledCheckbox checked={props.checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <Text>{props.children}</Text>
        </CheckboxContainer>
    );
};

export default CustomCheckbox;

const CheckboxContainer = styled.div`
    display: flex;
    cursor: pointer;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#3258FB' : 'transparent'};
  border-radius: 3px;
  border: 1.5px solid rgba(145, 158, 171, 0.3);
  transition: all 150ms;
  cursor: pointer;
  
`

const Text = styled.span`
  margin-left: 10px;
`