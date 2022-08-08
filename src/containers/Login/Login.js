import axios from "axios";
import auth from "./auth";
import {
    Bg,
    FormContainer,
    InputContainer,
    InputLabel,
    Input,
    CenterContainer,
    SubmitButton,
    Title,
    ErrorText,
} from './LoginStyle.js'
import { toPersianNumber } from '../../utils/translateNumber';
import { toEnglishNumber } from '../../utils/translateNumber';
import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import Modal from '../../components/Modal/Modal.js';



function Login() {
    const [errors, setErrors] = useState({});
    const [value, setValue] = useState({username:"", password:""});
    const [showModal,setShowModal] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.checkLogin().then((access) => {
          if (access) {
            auth.logout();
            //window.location.href = `/panel`;
          }
        });
      }, []);
    
    
    const handleChange = e => {
            setValue({...value, [e.target.name]: toEnglishNumber(e.target.value)});
            e.target.value = toPersianNumber(e.target.value);
    }
    const handleLogin = () => {
        const dataBody = JSON.stringify({
                "username": value['username'],
                "password": value['password']
            })
        console.log(dataBody)
        axios
          .post(process.env.REACT_APP_URL + "/api/u/auth/jwt/create/", dataBody, {
            headers: {
              "Content-Type": 'application/json',
            },
          })
          .then((res) => {
            if(res.status == 200){
                auth.setAccessToken(res.data.access);
                auth.setRefreshToken(res.data.refresh);
                window.location.href = `/panel`;
            }
            else{
                setShowModal(true)
            }
          })
          .catch((err) => {
            console.log(err.message)
            setShowModal(true)
        });
      };
      const verifyForm = async () => {
        let err = {};
        let isEmpty = false;
        for (let key in value) {
          if (value[key].length < 1 || !value[key].replace(/\s/g, "").length) {
            err[key] = " این فیلد نباید خالی باشه.";
            isEmpty = true;
          } 
        }
        if (isEmpty) {
          setErrors(err);
          return;
        }
        handleLogin();
      };
      const redirectToHome = () => {
        navigate('/');
    }
        return(
        <Bg>
            {showModal && <Modal Title={":("} Text={"یه چیزی اشتباه اس."} onConfirm ={redirectToHome} btnText="بازگشت" color="#AF0029"/>}
            <CenterContainer>
            <Title>ورود </Title>
            <FormContainer>
                <InputContainer>
                    <InputLabel> نام کاربری:</InputLabel>
                    <Input name='username' type ='text' id="LEFT" onChange={handleChange}/>
                </InputContainer>
                {errors["username"] && (
                <ErrorText> {errors["username"]}</ErrorText>
                )}
                <InputContainer >
                    <InputLabel> رمز عبور:</InputLabel>
                    <Input name='password' type ='password' id="LEFT" onChange={handleChange} />
                    0{/*TODO: toggle password visiblity*/}
                </InputContainer>
                {errors["password"] && (
                <ErrorText> {errors["password"]}</ErrorText>
                )}           
            </FormContainer>
            <SubmitButton onClick={verifyForm} >ورود</SubmitButton>
            </CenterContainer>
        </Bg>
    );
}
export default Login;
