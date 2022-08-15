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
    const [tab,setTab] = useState(0)
    const [userInfo, setUserInfo] = useState({firstname: "", lastname: "", phone: "", ID:""});
    const [nowWorkshop,setNowWorkshop] = useState({link:""})
    const [workshops, setWorkshops] = useState([]);
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
            else {             
                const errors = resUser.error;
                alert(errors);
              }
            } catch (error) {
              console.log(error.message);}

    }
    const handleSchedule = async() => {
        setTab(2)
        //request data
        try{
            const token = await auth.checkLogin();
            const resWorkshops = await fetch(process.env.REACT_APP_URL + "/api/workshop/schedules/", {
                method: 'GET',
                headers: { 
                          'Authorization': `JWT ${token}`,
                          'Accept' : 'application/json',             
                          'Content-Type': 'application/json',
            },
              });
            const workshopsData = await resWorkshops.json();
            if (resWorkshops.status === 200) {
                setWorkshops(workshopsData);
                console.log(workshops)
            }
            else{             
                const errors = resWorkshops.error;
                alert(errors);
              }
            } catch (error) {
              console.log(error.message);}
    }
    const handleEntrance = async() => {
        setTab(3)
        //request data
        try{
            const token = await auth.checkLogin();
            const resEntrance = await fetch(process.env.REACT_APP_URL + "/api/workshop/schedules/now/", {
                method: 'GET',
                headers: { 
                          'Authorization': `JWT ${token}`,
                          'Accept' : 'application/json',             
                          'Content-Type': 'application/json',
            },
              });
            if (resEntrance.status === 200) {
                setNowWorkshop({
                    link:resEntrance.link
                });
                console.log(nowWorkshop)
            }
            else if(resEntrance.status !== 404){             
                const errors = resEntrance.error;
                alert(errors);
              }
            } catch (error) {
              console.log(error.message);}
    }
        return (
        <BgContainer>
            <NavBar onConfirm={auth.logout} />
            <RightContainer>
                <TabCard onClick={handleUserInfo}>اطلاعات فضانورد</TabCard>
                <TabCard onClick={handleSchedule}>برنامه کارگاه ها</TabCard>
                <TabCard onClick={handleEntrance}>ورود به کلاس</TabCard>
            </RightContainer>
            {tab == 1 && <UserInfo user = {userInfo}/>}
            {tab == 2 && <Schedule workshopList = {workshops}/>}
            {tab == 3 && <Entrance workshop = {nowWorkshop}/>}
        </BgContainer>
    );
};

export default Dashboard;