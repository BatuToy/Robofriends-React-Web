import React from "react";

const SearchBox = ({searchfield , searchChange}) => {
    return (
        <div style={{ marginBottom : '10px'}}>
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search for Robots"
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;