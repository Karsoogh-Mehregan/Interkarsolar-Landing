import React from 'react'
import {
    Div,
    Div2,
    Top,
    Table,
    TableData,
    TableHead,
}
from "./UserInfoStyle.js";
const UserInfo = () => {
    return (
        <Div>
            <Top>
                اطلاعات کاربری
            </Top>

            <Div2>
                <Table>
                    <tr>
                        <TableHead>نام</TableHead>
                        <TableData>آرش</TableData>
                    </tr>
                   
                    <tr>
                        <TableHead>نام خانوادگی</TableHead>
                        <TableData>آذرپور</TableData>
                    </tr>

                    <tr>
                        <TableHead>کد ملی</TableHead>
                        <TableData>1273925602</TableData>
                    </tr>

                    <tr>
                        <TableHead>شماره همراه</TableHead>
                        <TableData>09162854011</TableData>
                    </tr>
                </Table>
            </Div2>
        </Div>
    );
};

export default UserInfo;