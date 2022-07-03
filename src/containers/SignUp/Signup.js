import {
    Bg,
    FormContainer,
    InputContainer,
    InputLabel,
    Input,
    CenterContainer,
    SubmitButton

} from './SignupStyle.js'
import React, {useState, useEffect, useCallback} from 'react'
function Signup(){
    const [value, setValue] = useState({firstname: "", lastname: "", phone: "", ID:""});
    const [paymentUrl, setPaymentUrl] = useState();

    // useEffect(() => {
    //     console.log(value)
    //   },[value]);

    const handleChange = e => {
        setValue({...value, [e.target.name]: e.target.value});
    }
    const verify = () => {
        console.log(value)
        if(value['firstname']=="")
            alert("فیلد نام نباید خالی باشه");
        else if(value['lastname'] == "")
            alert("فیلد نام خانوادگی نباید خالی باشه");
        else if(value['ID'].length != 10)
            alert("کد ملی باید 10 رقم باشه");
        else if(value['phone'] == "" || value['phone'].length != 11 || !value['phone'].startsWith('09')){
            alert(" شماره همراه نامعتبر است ")
        }
        else
            signupHandler();

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
            <h1>ثبت نام مرحله سوم</h1>
            <FormContainer>
                <InputContainer>
                    <Input name='firstname' type ='text' onChange={handleChange}/>
                    <InputLabel>: نام</InputLabel>
                </InputContainer>
                <InputContainer>
                    <Input name='lastname' type ='text' onChange={handleChange}/>
                    <InputLabel> : نام خانوادگی</InputLabel>
                </InputContainer>
                <InputContainer>
                    <Input name='phone' type ='text' onChange={handleChange}/>
                    <InputLabel placeholder='09'> : شماره تلفن</InputLabel>
                </InputContainer>
                <InputContainer>
                    <Input name='ID' type ='text' onChange={handleChange}/>
                    <InputLabel> : کدملی</InputLabel>
                </InputContainer>
            </FormContainer>
            <SubmitButton onClick={verify}>پرداخت</SubmitButton>
            <h2>هزینه ثبت نام : 150 هزار تومان</h2>
            </CenterContainer>
        </Bg>
    );
}
export default Signup;