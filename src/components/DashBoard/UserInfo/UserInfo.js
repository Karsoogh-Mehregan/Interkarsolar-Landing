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
                        <TableData>{user.ID}</TableData>
                    </tr>

                    <tr>
                        <TableHead>شماره همراه</TableHead>
                        <TableData>{user.phone}</TableData>
                    </tr>
                </Table>
            </Div2>
        </Div>
    );
};

export default UserInfo;