



=======
import { useState } from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import UserModal from "../components/UserModal";

const LandingPage = (props) => {
    const {userInfo} = props;
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>LandingPage</div>
      <Nav userInfo={userInfo}/>
      {/* import atom into main container to read */}
      <Main/>
      <UserModal 
        showModal={showModal}
        setShowModal={setShowModal}/>
      <button onClick={() => {setShowModal(true)}}>Open</button>
    </>
  );
};

export default LandingPage;
