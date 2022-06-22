import React from "react";
import { connect } from "react-redux";
import { setSearchField } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

const SearchBox = (props) => {
  console.log("Searchbox component");
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={props.onSearchChange}
      />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchBox);
