import { useState } from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import Nav from "../components/Nav";
import Main from "../components/Main";
import UserModal from "../components/UserModal";
import { modalData, modalState } from "../states";

const LandingPage = (props) => {
    const {userInfo} = props;
    const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <>
      <div>LandingPage</div>
      <Nav userInfo={userInfo}/>
      {/* import atom into main container to read */}
      <Main/>
      <UserModal 
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData}/>
      {/* <button onClick={() => {setShowModal(true)}}>Open</button> */}
    </>
  );
};

export default LandingPage;
