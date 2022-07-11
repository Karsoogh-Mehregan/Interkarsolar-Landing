import {
    Container,
    CenterContainer,
    HeadingText,
    InfoText,
    BackButton
} from "./PaymentVerificationStyle";
import { Link } from "react-router-dom";
import React/*, { useState}*/ from "react";

function PaymentVerification1 () {
    //  const [paid, setPaid] = useState(1);
    const paid = 1
    return (
        <Container>
            <CenterContainer>
                <HeadingText paid={paid}>
                    {paid === 1 && ":)"}
                    {paid === 0 && ":("}
                </HeadingText>
                <InfoText>
                    {paid === 1 && "ثبت‌نامت با موفقیت انجام شد."}
                    {paid === 0 && "در ثبت‌نام شما مشکلی به وجود اومده."}
                </InfoText>
                <InfoText>
                    {paid === 0 && "لطفا دوباره امتحان کن."}
                    {paid === 1 && " با آرزوی موفقیت شما در مرحله بعد! حتما ما را در شبکه‌های اجتماعی دنبال کن تا از جزئیات و زمان دقیق کارگاه‌ها با خبر بشی."}
                </InfoText>
                {paid !== -1 && <Link to="/"><BackButton paid={paid}> صفحه اصلی</BackButton></Link>}
            </CenterContainer>
        </Container>
    );
}

export default PaymentVerification1;