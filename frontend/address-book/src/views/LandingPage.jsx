import { useState } from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import UserModal from "../components/UserModal";
import UserLogin from "../components/Login";

const LandingPage = (props) => {
    const {userInfo} = props;
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div>LandingPage</div>
      <Nav userInfo={userInfo}/>
      {/* import atom into main container to read */}
      <Main/>
      <UserLogin
        showLogin={showLogin}
        setShowLogin={setShowLogin}/>
      <UserModal 
        showModal={showModal}
        setShowModal={setShowModal}/>
      <button onClick={() => {setShowModal(true)}}>Open</button>
    </>
  );
};

export default LandingPage;
