import React from 'react';

const DropdownSelect = ({ name, lableName, _handleChange, val }) => ( <
        div >
        <
        select name = { name }
        onChange = { _handleChange } >
        <
        option value = "" > select < /option> {
            lableName.map((values, i) => < option value = { val[i] }
                key = { values } > { values } < /option>)} <
                /select>

                <
                /div>
            );

            export default DropdownSelect;