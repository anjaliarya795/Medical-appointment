import React from 'react';

const Index = ({id,labelName,type,placeholder}) => {
    return (
        <div>
            <label htmlFor={id} className="text-sm text-teal-900" type={type}>{labelName}</label>

            <div className="w-full inline-flex border">
                
                <input
                    type={type}
                    className="w-full  p-2"
                    placeholder={placeholder}
                    id={id}
                    name={id}
                    required
                />

            </div>
        </div>
    );
}

export default Index;
