import {
    Container,
    CenterContainer,
    HeadingText,
    InfoText,
    BackButton
} from "./PaymentVerificationStyle";
import { Link } from "react-router-dom";
import React/*, { useState}*/ from "react";

function PaymentVerification2(){
    //  const [paid, setPaid] = useState(0);
    const paid = 0
    return (
        <Container>
            <CenterContainer>
                <HeadingText paid={paid}>
                    {paid === 1 && ":)"}
                    {paid === 0 && ":("}
                </HeadingText>
                <InfoText>
                    {paid === 1 && "ثبت‌نام با موفقیت انجام شد."}
                    {paid === 0 && "در ثبت‌نام شما مشکلی به وجود اومده."}
                </InfoText>
                <InfoText>
                    {paid === 1 && " با آرزوی موفقیت شما در مرحله بعد!"}
                </InfoText>
                {paid !== -1 && <Link to="/"><BackButton paid={paid}> صفحه اصلی</BackButton></Link>}
            </CenterContainer>
        </Container>
    );
}

export default PaymentVerification2;