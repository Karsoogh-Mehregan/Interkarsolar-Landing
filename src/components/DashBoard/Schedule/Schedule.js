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
const Schedule = ({workshopList}) => {
    const createTable = () => {
        const table = []
        console.log(workshopList[0])
        for (let i = 0; i < workshopList.length; i += 1) {
            console.log("test")
            let [date_begin, time_begin] = workshopList[i].time_begin.split('T')
            let [date_end, time_end] = workshopList[i].time_end.split('T')

            const time_begin_array = time_begin.split(':')
            time_begin = time_begin_array[0] + ':' + time_begin_array[1]
        
            const time_end_array = time_end.split(':')
            time_end = time_end_array[0] + ':' + time_end_array[1]

            table.push(
                <InnerWrapperDiv>
                    <HeadDiv>
                        workshopList[i].workshop.name
                    </HeadDiv>
                    <DataWrapperDiv>
                        <Data>
                            {date_begin}<CalenderImage></CalenderImage></Data>
                        <Data>
                            {time_begin} - {time_end}<ClockImage></ClockImage>
                        </Data>
                        <Data><Link href={workshopList[i].link} target='_blank'>لینک کلاس</Link></Data>
                    </DataWrapperDiv>
                </InnerWrapperDiv>
            );
    }}
    return (
        <Div>
            <Top>
                 کارگاه ها
            </Top>

            <Div2>
                {createTable()}
            </Div2>
        </Div>
    );
};

export default Schedule;