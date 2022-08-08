import React,{useState, useEffect} from 'react'
import NavBar from '../../components/DashBoard/NavBar/NavBar.js'
import {BgContainer, RightContainer, TabCard,} from './DashboardStyle'
import auth from "../Login/auth";
import UserInfo from '../../components/DashBoard/UserInfo/UserInfo.js'
import Entrance from '../../components/DashBoard/ClassEntrance/Entrance.js'
import Schedule from '../../components/DashBoard/Schedule/Schedule.js'

const Dashboard = () => {
    //TODO: uncomment it after test
    // useEffect(() => {
    //     auth.checkLogin().then((access) => {
    //         if (!access) {
    //               window.location.href = "/login";
    //             }
    //         });
    //     }, []);
    const [tab,setTab] = useState(1)
        return (
        <BgContainer>
            <NavBar onConfirm={auth.logout} />
            <RightContainer>
                <TabCard onClick={()=>setTab(1)}>اطلاعات فضانورد</TabCard>
                <TabCard onClick={()=>setTab(2)}>برنامه کارگاه ها</TabCard>
                <TabCard onClick={()=>setTab(3)}>ورود به کلاس</TabCard>
            </RightContainer>
            {tab == 1 && <UserInfo />}
            {tab == 2 && <Schedule />}
            {tab == 3 && <Entrance />}
        </BgContainer>
    );
};

export default Dashboard;