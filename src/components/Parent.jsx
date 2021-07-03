import React, { useState, Component } from 'react';
import Input from './Child';

const Form = function (props) {

    const [value, setValue] = useState('');
    let [nameUser, setNameUser] = useState('');

    const onchange = (data) => {
        setValue(data);
        setNameUser(data);
    }

    const submited = (event) => {
        event.preventDefault();
        alert(nameUser);
      };

    const handleProfile = (event) => {
        console.log('parent' + nameUser);
    }

    return (
        <div>
            <form onSubmit={submited}>
                <Input data={value} onchange={(e) => { onchange(e) }}/>
                <button onClick={handleProfile}>Submit</button>
            </form>
        </div>
    );
}
export default Form;