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
import { toPersianNumber } from '../../../utils/translateNumber';
const UserInfo = ({user}) => {
    return (
        <Div>
            <Top>
                اطلاعات کاربری
            </Top>

            <Div2>
                <Table>
                    <tr>
                        <TableHead>نام</TableHead>
                        <TableData>{user.firstname}</TableData>
                    </tr>
                   
                    <tr>
                        <TableHead>نام خانوادگی</TableHead>
                        <TableData>{user.lastname}</TableData>
                    </tr>

                    <tr>
                        <TableHead>کد ملی</TableHead>
                        <TableData>{toPersianNumber(user.ID)}</TableData>
                    </tr>

                    <tr>
                        <TableHead>شماره همراه</TableHead>
                        <TableData>{toPersianNumber(user.phone)}</TableData>
                    </tr>
                </Table>
            </Div2>
        </Div>
    );
};

export default UserInfo;