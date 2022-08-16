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
const Entrance = ({workshop}) => {
    let workshop_OFF = workshop.link == '';
    console.log(workshop.link)
    return (
        <Div>
            <Top>
                کلاس های فعال
            </Top>

            <Div2>
                <Img></Img>
                { workshop_OFF && <Par>کارگاهی در این لحظه فعال نیست.</Par>}
                { !workshop_OFF && <Par>{workshop.name} در حال برگزاری است.</Par>}
                { !workshop_OFF && <Button href={workshop.link} target='_blank'>ورود به کلاس</Button>}
            </Div2>
        </Div>
    );
};

export default Entrance;