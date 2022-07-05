import {
    BgContainer,
    Astronaut,
    RightContainer,
    TextContainer,
    InputText,
    InputContainer,
    Btn
} from './welcomeStyle'
import { toPersianNumber } from '../../utils/translateNumber';
import Modal from '../../components/Modal/Modal';
import React, { useState, useEffect, useCallback } from 'react'
import {useNavigate} from 'react-router-dom'


function Welcome(){
    const [valid,setValid] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [ID,setID] = useState('1111111111');
    const [showModal,setShowModal] = useState(false);
    const navigate = useNavigate()
   
    const handleChange = event => {
        document.getElementById("stuID").value = toPersianNumber(event.target.value);
        setID(event.target.value);
    }
 
    useEffect(() => {
        const len = ID.length;
        setValid(len == 10);
      },[ID]);
 
    const checkAcceptance = useCallback(async () => {
        try {
          const response = await fetch("http://localhost:8000/api/checker/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({student_number: ID})
          });

          const jsonRes = await response.json();

          if (jsonRes['status'] == 'true') {
            setAccepted(true);
            setShowModal(true);
          } else {
            setAccepted(false);
            setShowModal(true);
          }
        } catch (error) {
          console.log(error.message);
        }
      }, [ID]);   
  
    const verify = () => {
        if(valid)
            checkAcceptance();
        else
            alert("کد ملی باید 10 رقم باشه");
    }
    const redirectToSignup = () => {
        navigate('/sign_up');
    }
    const redirectToHome = () => {
        navigate('/');
    }
    return(
        <>
         {showModal && accepted && <Modal Title="تبریک!" Text=" تبریک میگیم در مرحله دوم پذیرفته شدی, برای ادامه مراحل روی دکمه ثبت‌نام کلیک کنید :)" onConfirm={redirectToSignup} btnText="ثبت نام"/>}
         {showModal && !accepted && <Modal Title="به امید دیدار!" Text="متاسفانه در این ایستگاه از سفر فضایی مون باید با شما خداحافظی کنیم." onConfirm={redirectToHome} btnText="بازگشت"/>}
        <BgContainer >
            <RightContainer>
                <TextContainer>
                    به مرحله سوم از سومین سفر فضایی اینترکارسولار خوش اومدید!
                </TextContainer>
                <InputText>
                    کد ملی خود را وارد کنید:
                </InputText>
                <InputContainer id='stuID' type='text' onChange={handleChange}/>
                <Btn onClick={verify} disabled = {!valid}>ارسال</Btn>
            </RightContainer>
            <Astronaut src = {process.env.PUBLIC_URL + '/spaceman6.png'}/>
        </BgContainer >  
        </>

    )
}
export default Welcome;