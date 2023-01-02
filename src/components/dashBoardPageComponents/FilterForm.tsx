import React from "react";

const FilterForm: React.FC<{ className: string }> = (props) => {
  return (
    <div>
      <form className={props.className}>
        <label>Organization</label>
        <input type="text" placeholder="Select" /> <label>Username</label>
        <input placeholder="User" type="text" /> <label>Email</label>
        <input placeholder="Email" type="text" /> <label>Date</label>
        <input placeholder="Date" type="date" /> <label>Phone Number</label>
        <input type="text" placeholder="Phone Number" />
        <label>Status</label>
        <input type="" placeholder="Select" />
        <div>
          <button className="reset_button">Reset</button>
          <button>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
