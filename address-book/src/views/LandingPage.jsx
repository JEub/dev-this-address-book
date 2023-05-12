import {useState} from 'react';
import Nav from "../components/Nav";
import Main from "../components/Main";


const LandingPage = (props) => {

  const {userInfo} = props;
  return (
    <>
      <div>LandingPage</div>
      <Nav userInfo={userInfo}/>
      {/* import atom into main container to read */}
      <Main/>
    </>
  );
};

export default LandingPage;
