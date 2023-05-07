import React from 'react';

const SelectField = ({id, labelName, options}) => {
    return (
        <div>
            <label htmlFor={id} className="text-sm text-teal-900">{labelName}</label>
                <div className="w-full inline-flex border">

                    <select required className="w-full p-2" id={id}  name={id} >
                            {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                </div>
        </div>
    );
}

export default SelectField;
