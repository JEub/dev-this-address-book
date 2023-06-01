import { useState } from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import UserModal from "../components/UserModal";

const LandingPage = (props) => {
    const {userInfo, setUserInfo} = props;
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>LandingPage</div>
      <Nav userInfo={userInfo} showModal = {showModal}
        setShowModal = {setShowModal}/>
      {/* import atom into main container to read */}
      <Main 
        userInfo = {userInfo} 
        setUserInfo = {setUserInfo}/>
      <UserModal 
        showModal = {showModal}
        setShowModal = {setShowModal}
        userInfo = {userInfo}
        setUserInfo = {setUserInfo}/>
      <button onClick = {() => {setShowModal(true)}}>Open</button>
    </>
  ); 
};

export default LandingPage;
