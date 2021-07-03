import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Input from './Child';

function User(props) {

  const [cookies, setCookie] = useCookies(["user"]);
  const [profile, setProfile] = useState(cookies.user === undefined ? true : false);
  const value = useState('');
  const [userName, setUserName] = useState('');
  const [nameUser, setNameUser] = useState('');

  const onchange = (data) => {
    setNameUser(data);
  }

  const submited = (event) => {
    event.preventDefault();
    if(nameUser){
      setNameUser(nameUser);
      setProfile(false);
      // Set cookie session user name
      setCookie("user", nameUser, {
        path: "/"
      });
    }
  };

  const handleProfile = () => {
    console.log('HANDLEEE');
    setUserName(nameUser);
  }

  return (
    <div>
      <div className={`profile-wrapper ${profile ? 'show' : 'hide'}`}>
        <form onSubmit={submited}>
          <Input data={value} onchange={(event) => { onchange(event) }}/>
          <button onClick={handleProfile}>Save Name</button>
        </form>
      </div>
      <div className={`avatar ${profile ? "hide" : "show"}`}>
        <p>{userName ? userName : cookies.user}</p>
      </div>
    </div>
  );
}

export default User;