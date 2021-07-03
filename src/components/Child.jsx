import React from 'react';

const Input = function (props) {

    //console.log("Props in Input :", props);

    const handleChange = event => {
        props.onchange(event.target.value);
    }

    return (
        <div>
            <input placeholder="name"
                id="name"
                onChange= {handleChange}
                autoComplete="off"
            />
        </div>
    );
}
export default Input;