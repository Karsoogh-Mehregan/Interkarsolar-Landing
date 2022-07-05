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
import React, {useState, /*useEffect,*/ useCallback} from 'react'
function Signup(){
    const [value, setValue] = useState({firstname: "", lastname: "", phone: "", ID:"", username:""});
    const [paymentUrl, setPaymentUrl] = useState();
    const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     console.log(value)
    //   },[value]);

    const handleChange = e => {
        if (e.target.name === "ID" || e.target.name === "phone")
        {
            // setValue({...value, [e.target.name]: toEnglishNumber(e.target.value)});
            e.target.value = toPersianNumber(e.target.value);
        }
        // else {
            setValue({...value, [e.target.name]: e.target.value});
        // }
    }
    const set_username = () => {
        setValue({...value, ['username']: value["ID"] });
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
        if (value['phone'] == "" || value['phone'].length != 11 || !value['phone'].startsWith('۰۹')) {
            err["phone"] = " شماره همراه نامعتبر است. ";
        }

        
        if (Object.keys(err).length == 0) {
            set_username();
            signupHandler();  
        }
        else
        {
            setErrors(err);
        }
    }
    const signupHandler = useCallback(async () => {
        try {
          const response = await fetch("http://localhost:8000/api/u/auth/users/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
          });
          console.log(JSON.stringify(value));
          const jsonRes = await response.json();
          console.log(jsonRes);
          if (response.status === 201) {
            setPaymentUrl("http://localhost:8000/api/p/go-to-bank-gateway");
          } else {
            const errors = jsonRes;
            alert(errors);
          }
        } catch (error) {
          console.log(error.message);
        }
      }, [value]);
  
      const redirectToPayment = useCallback(
        () => window.location.href = paymentUrl
        , [paymentUrl])
   
        return(
        <Bg>
            <CenterContainer>
            <Title>ثبت نام مرحله سوم</Title>
            <FormContainer>
                <InputContainer>
                    <InputLabel> نام :</InputLabel>
                    <Input name='firstname' type ='text' onChange={handleChange}/>
                </InputContainer>
                {errors["firstname"] && (
                <ErrorText> {errors["firstname"]}</ErrorText>
                )}
                <InputContainer>
                    <InputLabel>  نام‌خانوادگی :</InputLabel>
                    <Input name='lastname' type ='text' onChange={handleChange}/>
                </InputContainer>
                {errors["lastname"] && (
                <ErrorText> {errors["lastname"]}</ErrorText>
                )}
                <InputContainer >
                    <InputLabel placeholder='۰۹'> شماره تلفن :</InputLabel>
                    <Input name='phone' type ='text' id="LEFT" onChange={handleChange} />
                </InputContainer>
                {errors["phone"] && (
                <ErrorText> {errors["phone"]}</ErrorText>
                )}       
                <InputContainer>
                    <InputLabel>  کدملی :</InputLabel>
                    <Input name='ID' type ='text' id="LEFT" onChange={handleChange}/>
                </InputContainer>
                {errors["ID"] && (
                <ErrorText> {errors["ID"]}</ErrorText>
                )}      
            </FormContainer>
            <SubmitButton onClick={verify}>پرداخت</SubmitButton>
            <SubmitText>هزینه ثبت نام : ۱۵۰ هزار تومان</SubmitText>
            </CenterContainer>
        </Bg>
    );
}
export default Signup;