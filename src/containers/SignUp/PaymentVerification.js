import {
    Container,
    CenterContainer,
    HeadingText,
    InfoText,
    BackButton
} from "./PaymentVerificationStyle";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import QueryString from "qs";

const PaymentVerification = props => {
     const [paid, setPaid] = useState(-1);
     const queries = QueryString.parse(props.location.search, { ignoreQueryPrefix: true });
     window.history.replaceState('', '', document.location.origin + "/paymentcallback");
     
     const verificationCheckHandler = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:8000/api/purchase/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(queries)
            });

            if (response.status === 201) {
                setPaid(1);
            } else {
                setPaid(0);
            }
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    useEffect(() => {
        if (queries.Status !== "NOK") {
            verificationCheckHandler();
        } else {
            setPaid(0);
        }
    }, [verificationCheckHandler])

    return (
        <Container>
            <CenterContainer>
                <HeadingText paid={paid}>
                    {paid === 1 && ":)"}
                    {paid === 0 && ":("}
                </HeadingText>
                <InfoText>
                    {paid === 1 && "ثبت نام با موفقیت انجام شد"}
                    {paid === 0 && "در ثبت نام شما مشکلی به وجود اومده"}
                </InfoText>
                <InfoText>
                    {paid === 1 && " !با آرزوی موفقیت شما در مرحله بعد"}
                </InfoText>
                {paid !== -1 && <Link to="/"><BackButton paid={paid}> صفحه اصلی</BackButton></Link>}
            </CenterContainer>
        </Container>
    );
}

export default PaymentVerification;