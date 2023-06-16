import { useState } from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import {useRecoilState, useRecoilValue} from 'recoil';
import UserModal from "../components/UserModal";
import UserLogin from "../components/Login";
import { currentModalState, currentModalData } from '../reactstates';

const LandingPage = () => {
    const [showModal, setShowModal] = useRecoilState(currentModalState);
    const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div>LandingPage</div>
      <Nav 
        showModal = {showModal}
        setShowModal = {setShowModal}
        />
      {/* import atom into main container to read */}
      <Main />
      <UserModal 
        showModal = {showModal}
        setShowModal = {setShowModal}/>
    </>
  ); 
};

export default LandingPage;
