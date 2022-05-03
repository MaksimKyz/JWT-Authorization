import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import arrow from './chevron-down.svg'
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";
import {logout} from "../../../store/authStore";
const MyProfile = (props) => {
    const [active,setActive] = useState(false)
    const selector = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const ref = useRef();
    useOnClickOutside(ref, () => setActive(false));

    const logoutProfile = () =>{
        dispatch(logout())
    }

    return (
        <MyProfileContainer>
            <MainInfo onClick={()=>setActive(!active)}>
                {selector.user?.profile?.first_name}
                {' '}
                {selector.user?.profile?.last_name}
                <img src={arrow} alt=""/>
            </MainInfo>
            <Exit active={active} ref={ref} onClick={logoutProfile}>
                Выход
            </Exit>
        </MyProfileContainer>
    );
};

export default MyProfile;


const MyProfileContainer = styled.div`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  position: relative;
`

const MainInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
`

const Exit = styled.div`
  display: ${props => props.active ? 'block' : 'none'};;
  background: #FFFFFF;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 16px 32px;
  position: absolute;
  top: 120%;
  right: -10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #333333;
  :after{
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    top:-6px;
    border-radius: 2px;
    right: 9px;
    transform: rotate(45deg);
  }
`