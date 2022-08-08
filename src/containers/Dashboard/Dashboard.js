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
    const [userInfo, setUserInfo] = useState({firstname: "", lastname: "", phone: "", ID:""});
    let workshop = {name:"", timeBegin:"", timeEnd:""};
    let schedule = []
    const handleUserInfo = async() => {
        setTab(1)
        //request data
        try{
            const token = await auth.checkLogin();
            const resUser = await fetch(process.env.REACT_APP_URL + "/api/u/auth/users/me/", {
                method: 'GET',
                headers: { 
                          'Authorization': `JWT ${token}`,
                          'Accept' : 'application/json',             
                          'Content-Type': 'application/json',
            },
              });
            const userData = await resUser.json();
            if (resUser.status === 200) {
                setUserInfo({
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    ID: userData.ID,
                    phone: userData.phone
                })
                console.log(userInfo)
            }
            else{             
                const errors = resUser.non_field_errors;
                alert(errors);
              }
            } catch (error) {
              console.log(error.message);}

    }
    const handleSchedule = () => {
        setTab(2)
        //request data 
        //store in array of objects
    }
    const handleEntrance = () => {
        setTab(3)
        //request data
        //store in object
    }
        return (
        <BgContainer>
            <NavBar onConfirm={auth.logout} />
            <RightContainer>
                <TabCard onClick={handleUserInfo}>اطلاعات فضانورد</TabCard>
                <TabCard onClick={handleSchedule}>برنامه کارگاه ها</TabCard>
                <TabCard onClick={handleEntrance}>ورود به کلاس</TabCard>
            </RightContainer>
            {tab == 1 && <UserInfo />}
            {tab == 2 && <Schedule />}
            {tab == 3 && <Entrance />}
        </BgContainer>
    );
};

export default Dashboard;