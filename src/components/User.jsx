import React, { useState } from "react";
import Input from './Child';

function User(props) {

  const value = useState('');
  const [profile, setProfile] = useState(true);
  const [userName, setUserName] = useState('');
  const [nameUser, setNameUser] = useState('');

  function showCookies() {
    const allcookies = document.cookie;
    console.log(allcookies);
    return allcookies;
  }

  const onchange = (data) => {
    setNameUser(data);
  }

  const submited = (event) => {
    event.preventDefault();
    if(nameUser){
      setNameUser(nameUser);
      setProfile(false);
      showCookies();
    }
      else {
      console.log('Type a name');
    }
  };

  const handleProfile = () => {
    setUserName(nameUser);
  }

  return (
    <div>
      <div className={`profile-wrapper ${profile ? "show" : "hide"}`}>
        <form onSubmit={submited}>
          <Input data={value} onchange={(event) => { onchange(event) }}/>
          <button onClick={handleProfile}>Save Name</button>
        </form>
      </div>
      <div className={`avatar ${profile ? "hide" : "show"}`}>
        <p>{userName}</p>
      </div>
    </div>
  );
}

export default User;