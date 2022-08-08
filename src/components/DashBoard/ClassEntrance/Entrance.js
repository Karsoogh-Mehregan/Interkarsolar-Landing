import React from 'react'
import {
    Div,
    Div2,
    Top,
    Img,
    Par,
    Button,
}
from "./EntranceStyle.js";
const Entrance = () => {
    return (
        <Div>
            <Top>
                کلاس های فعال
            </Top>

            <Div2>
                <Img></Img>
                <Par>کارگاه فلان <br></br> در حال برگزاری است.</Par>
                <Button href=''>ورود به کلاس</Button>
            </Div2>
        </Div>
    );
};

export default Entrance;