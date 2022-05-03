import React, {useState} from 'react';
import styled from "styled-components";
import eae from './img/eye.svg'
import eaeOff from './img/eye-off.svg'
const CustomInput = (props) => {
    const [visibleEae,setVisibleEae] = useState(false)

    return (
        <InputContainer margin={props.margin} width={props.width}>
            <Input value={props.value} onChange={props.onChange} onBlur={props.onBlur} type={visibleEae?'text':props.type}/>
            <Label value={props.value}>{props.label}</Label>
            {props.type==='password'?
                <Eae onClick={()=>{setVisibleEae(!visibleEae)}}>
                    {visibleEae?
                    <img src={eaeOff} alt=""/>
                        :
                    <img src={eae} alt=""/>}
                </Eae>:null
            }
        </InputContainer>
    );
};

export default CustomInput;

export const Label = styled.label`
    position: absolute;
    left: 15px;
    transition: top 0.5s ease,font-size 0.5s ease ,z-index 1s ease;
    top:${(props) => props.value ===''?'12px':'-10px'};
    z-index: ${(props) => props.value ===''?'-1':'1'};
    padding: 0 5px;
    font-weight: 400;
    font-size: ${(props) => props.value ===''?'16px':'12px'};
    line-height: 24px;
    color: #919EAB;
    background: #fff;
`

const Input = styled.input`
    border: 1px solid rgba(145, 158, 171, 0.3);
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px 16px;
    width: 100%;
    background: transparent;
    outline: none;
    :focus{
      +${Label}{
        top:-10px;
        z-index: 1;
        font-size: 12px;
      }
    }
`
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || '24px 0 3px 0'};
  width: ${(props) => props.width||'100%'};
`

const Eae = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
`

