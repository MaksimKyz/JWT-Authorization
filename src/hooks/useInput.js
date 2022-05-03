import {useEffect, useState} from "react";


const useValidation = (value,validations) =>{
    const [isEmpty,setEmpty] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [inputValid,setInputValid] = useState(false)
    useEffect(()=>{
        for (const validation in validations){
            switch (validation){
                case 'isEmpty':
                    value?setEmpty(false):setEmpty(true)
                    break
                case 'email':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase())?setEmailError(false):setEmailError(true)
            }
        }
    },[value])

    useEffect(()=>{
        if (isEmpty||emailError){
            setInputValid(false)
        }else {
            setInputValid(true)
        }
    },[isEmpty,emailError])


    return{
        isEmpty,emailError,inputValid
    }
}

export default function useInput(initialValue,validations){
    const [value,setValue] = useState(initialValue)
    const [isDirty,setDirty] = useState(false)
    const valid = useValidation(value,validations)
    const onChange = e =>{
        setValue(e.target.value)
    }

    const onBlur = (e) =>{
        setDirty(true)
    }

    return{
        value,onChange,onBlur,isDirty,...valid
    }
}