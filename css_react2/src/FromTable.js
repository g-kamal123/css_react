import React from "react";

const FromTable = () => {
  return (
    <div className="formtable">
      <div className="rowsss">
        <input placeholder="First name" />

        <input placeholder="Last name" />
      </div>
      <div className="rowsss">
        <input placeholder="work mail" />

        <input placeholder="Phone" />
      </div>
      <div className="rowsss">
        <input placeholder="Company" />

        <input placeholder ="job function" type='number'/>
      </div>
      <div className="country">
        <input placeholder ="Country" type='number'/>
      </div>
      <div>
        <textarea className="help" placeholder="How can we help?" />
      </div>
      <div className="getstartedbtn">Get Started</div>
    </div>
  );
};

export default FromTable;
