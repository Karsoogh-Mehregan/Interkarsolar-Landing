import React from 'react'
import {
    Div,
    Div2,
    Top,
    InnerWrapperDiv,
    HeadDiv,
    DataWrapperDiv,
    Data,
    ClockImage,
    CalenderImage,
}
from "./ScheduleStyle.js";
const Schedule = () => {
    return (
        <Div>
            <Top>
                کلاس های فعال
            </Top>

            <Div2>
                <InnerWrapperDiv>
                    <HeadDiv>
                        اسم کارگاه
                    </HeadDiv>
                    <DataWrapperDiv>
                        <Data>
                            تاریخ<CalenderImage></CalenderImage></Data>
                        <Data>
                            زمان<ClockImage></ClockImage>
                        </Data>
                        <Data>لینک کلاس</Data>
                    </DataWrapperDiv>
                </InnerWrapperDiv>
            </Div2>
        </Div>
    );
};

export default Schedule;