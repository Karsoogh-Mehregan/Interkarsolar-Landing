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
function Signup() {
    const [value, setValue] = useState({firstname: "", lastname: "", phone: "", ID:"", username:"", password:""});
    const [paymentUrl, setPaymentUrl] = useState();
    const [errors, setErrors] = useState({});
    const [showModal,setShowModal] = useState(false);
    //const [accessToken,setAccessToken] = useState();
    
    let level1 = false;
    let level2 = false;
    let accessToken;

    useEffect(() => {
        setValue({...value, ['username']: value["ID"], ['password']: value['ID']});
       },[value['ID']]);

   


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
    const set_username = () => {
        setValue({...value, ['username']: value["ID"], ['password']: value['ID']});
    }
    const verify = () => {
        // console.log(value)
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
        if (value['ID'].length != 10)
            err["ID"] = "کدملی باید ۱۰ رقم باشه.";
        if (value['phone'] == "" || value['phone'].length != 11 || !value['phone'].startsWith('09')) {
            err["phone"] = " شماره همراه نامعتبر است. ";
        }

        setErrors(err);
        
        if (Object.keys(err).length == 0) {
            set_username();
            signupHandler();  
        }
        
    }
    const signupHandler = useCallback(async () => {
        try {
          const response = await fetch("http://localhost:8000/api/u/auth/users/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
          });

          const jsonRes = await response.json();
          console.log(JSON.stringify(value))
          if (response.status === 201) {
            level1 = true;
        }
        else{
            const errors = jsonRes.non_field_errors;
            console.log(jsonRes)
            alert(errors);           
          }
        } catch (error) {
          console.log(error.message);
        }

        if(level1){
            try{
                const response2 = await fetch("http://localhost:8000/api/u/auth/jwt/create/", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": value['username'],
                        "password": value['username']
                    })
                  });
                  const jsonRes2 = await response2.json();
                //  if (response2.status === 201) {
                    accessToken = jsonRes2.access
                    console.log(jsonRes2)
                    level2 = true;
                // }
                // else{             
                //     const errors = jsonRes2;
                //     alert(errors);
                //     console.log(errors)
                //   }
                } catch (error) {
                  console.log(error.message);}
        }
        console.log(accessToken)
        if(level2){
            try{
                const response3 = await fetch("http://localhost:8000/api/purchase/", {
                    method: 'POST',
                    headers: { 
                              'Authorization': `JWT ${accessToken}`,
                              'Accept' : 'application/json',             
                              'Content-Type': 'application/json',
                },
                  });
                  const jsonRes3 = await response3.json();
                  if (response3.status === 201) {
                    setPaymentUrl(jsonRes3.url)
                }
                else{             
                    const errors = jsonRes3;
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
            {showModal && <Modal Title={"موفق"} Text={" ثبت نام شما موفقیت آمیز بود. به درگاه پرداخت هدایت میشوید"} onConfirm ={redirectToPayment} btnText="ادامه"/>}
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
                    <Input name='ID' type ='text' id="LEFT" onChange={handleChange}/>
                </InputContainer>
                {errors["ID"] && (
                <ErrorText> {errors["ID"]}</ErrorText>
                )}      
            </FormContainer>
            <SubmitButton onClick={verify}>پرداخت</SubmitButton>
            <SubmitText>هزینه ثبت‌نام: ۱۵۰ هزارتومان</SubmitText>
            </CenterContainer>
        </Bg>
    );
}
export default Signup;