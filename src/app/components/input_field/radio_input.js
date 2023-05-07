import React from 'react';

const RadioInput = (id,labelName) => {
    return (
        <>
            <label htmlFor={id} className="text-sm text-teal-900">{labelName}</label>

            <div className="w-full inline-flex border">
                                        
                <div className="w-full px-2 flex py-2.5 ">
                    <div className="w-4/12 px-1  flex ">
                        <input type="radio" className="w-6/12" id="Male" value="Male" />
                        <label for="Male" className="text-sm text-teal-950 " >Male</label>

                    </div>
                    <div className="w-4/12 px-1 flex">
                        <input type="radio" className="w-6/12" id="Female" value="Female" />
                        <label for="Female" className="text-sm text-teal-950" >Female</label>

                    </div>
                    <div className="w-4/12 px-1 flex">
                        <input type="radio" className="w-6/12" id="Other" value="Other" />
                        <label for="Other" className="text-sm text-teal-950" >Other</label>

                    </div>
                </div>
                
            </div>
        </>
    );
}

export default RadioInput;
