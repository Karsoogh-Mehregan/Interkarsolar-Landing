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
    // Link,
}
    from "./ScheduleStyle.js";
import { toPersianNumber } from '../../../utils/translateNumber';
const Schedule = ({ workshopList }) => {
    const createTable = () => {
        workshopList.sort(function (a, b) {
            let [date_begin1, time_begin1] = a.time_begin.split('T')
            let [date_begin2, time_begin2] = b.time_begin.split('T')
            if ( date_begin1 <  date_begin2) {return -1;}
            else if (date_begin1 > date_begin2) { return 1; }
            else if (time_begin1 < time_begin2) { return -1; }
            else if (time_begin1 > time_begin2) { return 1; }

        });
        const table = []
        for (let i = 0; i < workshopList.length; i += 1) {
            let [date_begin, time_begin] = workshopList[i].time_begin.split('T')
            let [, time_end] = workshopList[i].time_end.split('T')
            let shamsi_date;

            const time_begin_array = time_begin.split(':')
            time_begin = toPersianNumber(time_begin_array[0]) + ':' + toPersianNumber(time_begin_array[1])
        
            const time_end_array = time_end.split(':')
            time_end = toPersianNumber(time_end_array[0]) + ':' + toPersianNumber(time_end_array[1])

            if(date_begin == "2022-08-17")
                shamsi_date = "۲۷ مرداد"
            else if(date_begin == "2022-08-18")
                shamsi_date = "۲۸ مرداد"
            else if(date_begin == "2022-08-19")
                shamsi_date = "۲۹ مرداد"
            table.push(
                <InnerWrapperDiv>
                    <HeadDiv>
                        {workshopList[i].workshop.name}
                    </HeadDiv>
                    <DataWrapperDiv>
                        <Data>
                            {shamsi_date}<CalenderImage></CalenderImage></Data>
                        <Data>
                            {time_end} - {time_begin}<ClockImage></ClockImage>
                        </Data>
                        {/* <Data><Link href={workshopList[i].link} target='_blank'>لینک کلاس</Link></Data> */}
                    </DataWrapperDiv>
                </InnerWrapperDiv>
            );
            }
        return table;
    }
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