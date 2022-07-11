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
    SubmitText,
} from './SignupStyle.js'
import { toPersianNumber } from '../../utils/translateNumber';
import { toEnglishNumber } from '../../utils/translateNumber';
import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/Modal/Modal.js';
import {useLocation} from 'react-router-dom'

function Signup() {
    const [value, setValue] = useState({firstname: "", lastname: "", phone: "", ID:"", username:"", password:""});
    const [paymentUrl, setPaymentUrl] = useState();
    const [errors, setErrors] = useState({});
    const [showModal,setShowModal] = useState(false);

    const location = useLocation();
    const IDCode = location.state.IDCode;
    
    let level1 = false;
    let level2 = false;
    let level3 = false;
    let accessToken;

    useEffect(() => {
        set_ID()
      }, []);
   
      const set_ID = () => {
        setValue({...value,["ID"]: IDCode, ['username']: IDCode, ['password']: IDCode});
    }
   

    const handleChange = e => {
        if (e.target.name === "ID" || e.target.name === "phone")
        {
            setValue({...value, [e.target.name]: toEnglishNumber(e.target.value)});
            e.target.value = toPersianNumber(e.target.value);
        }
        else {
            setValue({...value, [e.target.name]: e.target.value});
        }
    }
    const verify = () => {
        let err = {};
        var persian = /^[\u0600-\u06FF\s]+$/;
        if (!persian.test(value['firstname'])) 
            err["firstname"] = "فیلد نام باید فارسی باشه.";
        if (value['firstname'] == "")
            err["firstname"] = "فیلد نام نباید خالی باشه.";
        if (!persian.test(value['lastname'])) 
            err["lastname"] = "فیلد نام‌خانوادگی باید فارسی باشه.";
        if (value['lastname'] == "")
            err["lastname"] = "فیلد نام‌خانوادگی نباید خالی باشه.";
        if (value['phone'] == "" || value['phone'].length != 11 || !value['phone'].startsWith('09')) {
            err["phone"] = " شماره همراه نامعتبر است. ";
        }

        setErrors(err);
        
        if (Object.keys(err).length == 0) {
            signupHandler();  
        }
        
    }
    const signupHandler = useCallback(async () => {
        try{
            const response2 = await fetch(process.env.REACT_APP_URL + "/api/u/auth/jwt/create/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": value['username'],
                    "password": value['password']
                })
              });
              const jsonRes2 = await response2.json();
              if (response2.status === 200) {
                if(jsonRes2['access']){
                    accessToken = jsonRes2.access
                    level3 = true; // go to purchase directly
                }
            }
                else if(response2.status === 401){
                    level1 = true;
                }
                else{
                    const errors = jsonRes2.non_field_errors;
                    alert(errors);
                }
            } catch (error) {
              console.log(error.message);}
              
            if(level1){ //create account
                  try {
                    const response = await fetch(process.env.REACT_APP_URL + "/api/u/auth/users/", {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(value)
                    });
                    console.log(JSON.stringify(value))
                    const jsonRes = await response.json();
                    if (response.status === 201) {
                      level2 = true;
                  }
                  else{
                      const errors = jsonRes.non_field_errors;
                      alert(errors);           
                    }
                  } catch (error) {
                    console.log(error.message);
                  }
            }
            
            if(level2){ //access key
                    try{
                        const response_2 = await fetch(process.env.REACT_APP_URL + "/api/u/auth/jwt/create/", {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                "username": value['username'],
                                "password": value['password']
                            })
                          });
                          const jsonRes_2 = await response_2.json();
                          if(response_2.status === 200) {
                            accessToken = jsonRes_2.access
                            level3 = true;
                          }
                          else{
                              const errors = jsonRes_2.non_field_errors;
                              alert(errors);
                            }
                        } catch (error) {
                          console.log(error.message);}
                
                
                        }
            if(level3){
                try{
                const response3 = await fetch(process.env.REACT_APP_URL + "/api/purchase/", {
                    method: 'POST',
                    headers: { 
                              'Authorization': `JWT ${accessToken}`,
                              'Accept' : 'application/json',             
                              'Content-Type': 'application/json',
                },
                  });
                  const jsonRes3 = await response3.json();
                  if (response3.status === 200) {
                    setPaymentUrl(jsonRes3.payment_link)
                    setShowModal(true)
                }
                else{             
                    const errors = jsonRes3.non_field_errors;
                    alert(errors);
                  }
                } catch (error) {
                  console.log(error.message);}
            }

      }, [value]);
  
      const redirectToPayment = useCallback(
        () => window.location.href = paymentUrl
        , [paymentUrl])
   
        return(
        <Bg>
            {showModal && <Modal Title={"موفق"} Text={"ثبت‌نام شما موفقیت‌آمیز بود. به درگاه پرداخت هدایت می‌شوید."} onConfirm ={redirectToPayment} btnText="ادامه" color="#00af52"/>}
            <CenterContainer>
            <Title>ثبت‌نام مرحله سوم</Title>
            <FormContainer>
                <InputContainer>
                    <InputLabel> نام:</InputLabel>
                    <Input name='firstname' type ='text' onChange={handleChange}/>
                </InputContainer>
                {errors["firstname"] && (
                <ErrorText> {errors["firstname"]}</ErrorText>
                )}
                <InputContainer>
                    <InputLabel>  نام‌خانوادگی:</InputLabel>
                    <Input name='lastname' type ='text' onChange={handleChange}/>
                </InputContainer>
                {errors["lastname"] && (
                <ErrorText> {errors["lastname"]}</ErrorText>
                )}
                <InputContainer >
                    <InputLabel placeholder='۰۹'> شماره تلفن:</InputLabel>
                    <Input name='phone' type ='text' id="LEFT" onChange={handleChange} />
                </InputContainer>
                {errors["phone"] && (
                <ErrorText> {errors["phone"]}</ErrorText>
                )}       
                <InputContainer>
                    <InputLabel>  کدملی:</InputLabel>
                    <Input name='ID' type ='text' id="LEFT" readOnly value={toPersianNumber(value['ID'])}/>
                </InputContainer>
                {errors["ID"] && (
                <ErrorText> {errors["ID"]}</ErrorText>
                )}      
            </FormContainer>
            <SubmitButton onClick={verify}>پرداخت</SubmitButton>
            <SubmitText>هزینه ثبت‌نام: ۱۵۰ هزارتومان</SubmitText>
            {errors["last"] && (
                <ErrorText> {errors["last"]}</ErrorText>
            )}
            </CenterContainer>
        </Bg>
    );
}
export default Signup;
