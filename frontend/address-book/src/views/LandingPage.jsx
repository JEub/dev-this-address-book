import { useState } from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import UserModal from "../components/UserModal";
import UserLogin from "../components/Login";

const LandingPage = (props) => {
  const { userInfo, setUserInfo } = props;
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Nav
        userInfo={userInfo}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {/* import atom into main container to read */}
      <Main
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setShowModal={setShowModal}
      />
      <UserModal
        showModal={showModal}
        setShowModal={setShowModal}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    </>
  );
};

export default LandingPage;
