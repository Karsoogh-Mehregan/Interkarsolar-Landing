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
    Link,
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
                            تاریخ<CalenderImage/></Data>
                        <Data>
                            زمان<ClockImage/>
                        </Data>
                        <Data><Link href='' target='_blank'>لینک کلاس</Link></Data>
                    </DataWrapperDiv>
                </InnerWrapperDiv>

                <InnerWrapperDiv>
                    <HeadDiv>
                        اسم کارگاه
                    </HeadDiv>
                    <DataWrapperDiv>
                        <Data>
                            تاریخ<CalenderImage/></Data>
                        <Data>
                            زمان<ClockImage/>
                        </Data>
                        <Data><Link href='' target='_blank'>لینک کلاس</Link></Data>
                    </DataWrapperDiv>
                </InnerWrapperDiv>
            </Div2>
        </Div>
    );
};

export default Schedule;