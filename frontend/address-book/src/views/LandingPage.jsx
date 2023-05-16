import { useState } from "react";

import Nav from "../components/Nav";
import UserModal from "../components/UserModal";

const LandingPage = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>LandingPage</div>
      <Nav />
      <UserModal 
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <button onClick={() => {setShowModal(true)}}>Open</button>
    </>
  );
};

export default LandingPage;
