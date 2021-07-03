import React from "react";
import Card from "./components/Card";
import Table from "./components/Table";
import User from "./components/User";
import Votes from "./components/Votes";

import '../src/styles/Reset.css';
import '../src/styles/App.css';

function App() {
  return (
    <div className="wrapper">
        <User />
      <div className="table-wrapper">
        <div className="header-table">
          <Card name="Name 1" vote="3"/>
          <Card name="Name 2" vote="5"/>
          <Card name="Name 3" vote="6"/>
        </div>

        <div className="center-table">
          <Table />
        </div>

        <div className="footer-table">
          <Card name="Name 4" vote="4"/>
          <Card name="Name 5" vote="3"/>
          <Card name="Name 6" vote="6"/>
        </div>
      </div>
      <div className="footer">
        <Votes />
      </div>
    </div>
  );
}

export default App;
