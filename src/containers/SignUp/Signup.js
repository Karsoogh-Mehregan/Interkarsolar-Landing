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
import React, {useState, /*useEffect,*/ useCallback} from 'react'
function Signup(){
    const [value, setValue] = useState({firstname: "", lastname: "", phone: "", ID:""});
    const [paymentUrl, setPaymentUrl] = useState();
    const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     console.log(value)
    //   },[value]);

    const handleChange = e => {
        if (e.target.name === "ID" || e.target.name === "phone")
        {
            e.target.value = toPersianNumber(e.target.value);
        }
        setValue({...value, [e.target.name]: e.target.value});
    }
    const verify = () => {
        // console.log(value)
        let err = {};
        if(value['firstname']=="")
            err["firstname"] = "فیلد نام نباید خالی باشه";
        if (value['lastname'] == "")
            err["lastname"] = "فیلد نام خانوادگی نباید خالی باشه";
        if (value['ID'].length != 10)
            err["ID"] = "کد ملی باید ۱۰ رقم باشه";
        if (value['phone'] == "" || value['phone'].length != 11 || !value['phone'].startsWith('09')) {
            err["phone"] = " شماره همراه نامعتبر است ";
        }
        if(err.length==0)
            signupHandler();
        
        setErrors(err);
    }
    const signupHandler = useCallback(async () => {
        try {
          const response = await fetch("https://interkarsolar.ir/backend", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
          });
    
          const jsonRes = await response.json();
    
          if (response.status === 200) {
            setPaymentUrl(jsonRes.url);
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
                    <InputLabel placeholder='09'> شماره تلفن :</InputLabel>
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