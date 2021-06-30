import React from "react";

function User({name}) {
  return (
    <div className="avatar">
      <p>{name}</p>
    </div>
  );
}

export default User;