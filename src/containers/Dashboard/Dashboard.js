import React,{useState, useEffect} from 'react'
import NavBar from '../../components/DashBoard/NavBar/NavBar.js'
import {BgContainer, RightContainer, TabCard} from './DashboardStyle'
import auth from "../Login/auth";

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
        </BgContainer>
    );
};

export default Dashboard;