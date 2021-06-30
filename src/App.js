import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import Table from "./components/Table";
import User from "./components/User";
import Votes from "./components/Votes";

import './Reset.css';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <Form />
        <User name={`Dan`}/>
      <div className="table-wrapper">
        <div className="header-table">
          <Card name="Dan" vote="3"/>
          <Card name="Dan" vote="3"/>
          <Card name="Dan" vote="3"/>
        </div>

        <div className="center-table">
          <Table />
        </div>

        <div className="footer-table">
          <Card name="Dan" vote="3"/>
          <Card name="Dan" vote="3"/>
          <Card name="Dan" vote="3"/>
        </div>
      </div>
      <div className="footer">
        <Votes />
      </div>
    </div>
  );
}

export default App;
