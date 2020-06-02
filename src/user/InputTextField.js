import React from 'react';



const InputTextField = ({ name, _handleChange, placeholder }) => ( <
    div >
    <
    input type = "text"
    name = { name }
    placeholder = { placeholder }
    autoComplete = "off"
    onChange = { _handleChange }
    /> <
    /div>
);

export default InputTextField;