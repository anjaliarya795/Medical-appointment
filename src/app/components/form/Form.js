import React from 'react';

const Form = () => {
    return (
        <div>
            <form action="" className="py-40 bg-gray-100  bg-opacity-50 w-11/12 mx-auto">
                <div className="mx-auto container max-w-2xl">

                    <div className="bg-white space-y-10 rounded-xl shadow-2xl shadow-teal-950 py-5">
                

                        <div className="md:inline-flex  w-full p-4 text-gray-500 items-center">


                            <div className="md:w-6/12 md:px-5 w-full mx-auto max-w-sm space-y-5">
                                <div>
                                    <label className="text-sm text-gray-400">Full name</label>
                                    <div className="w-full inline-flex border">
                                        
                                        <input
                                            required
                                            type="text"
                                            className="w-full  p-2"
                                            placeholder="Anjali Arya"
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label className="text-sm text-gray-400">Email</label>
                                    <div className="w-full inline-flex border">
                                        
                                        <input
                                            type="email"
                                            className="w-full  p-2"
                                            placeholder="anjalisinha498@gmail.com"
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label className="text-sm text-gray-400">Age</label>
                                    <div className="w-full inline-flex border">
                                        
                                        <input
                                            required
                                            type="number"
                                            className="w-full p-2"
                                            placeholder="21"
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label className="text-sm text-gray-400">Mobile</label>
                                    <div className="w-full inline-flex border">
                                        
                                        <input
                                            required
                                            type="tel"
                                            className="w-full  p-2"
                                            placeholder="9999999999"
                                        />
                                    </div>
                                </div>




                                <div>
                                    <label className="text-sm text-gray-400">Gender</label>
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
                                </div>  
                            </div>



                            <div className="md:w-6/12 md:px-5 w-full mx-auto max-w-sm space-y-5">
                                

                                <div>
                                    <label className="text-sm text-gray-400">Speciality</label>
                                    <div className="w-full inline-flex border">
                                    <select
                                            required
                                            className="w-full p-2"
                                        >
                                            <option value="one">one</option>
                                            <option value="two">two</option>
                                            <option value="three">three</option>
                                            
                                        </select>
                                    </div>
                                </div>



                                <div>
                                    <label className="text-sm text-gray-400">Appointment needed</label>
                                    <div className="w-full inline-flex border">
                                        <select
                                            required
                                            className="w-full  p-2"
                                        >
                                            <option value="This Week">This Week</option>
                                            <option value="Next Week">Next Week</option>
                                            <option value="This Month">This Month</option>
                                            <option value="Next Month">Next Month</option>
                                            
                                        </select>
                                    </div>
                                </div>



                                <div>
                                    <label className="text-sm text-gray-400">Preferred day</label>
                                    <div className="w-full inline-flex border">
                                        
                                        <select
                                            required
                                            className="w-full  p-2"
                                        >
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                        </select>
                                    </div>
                                </div>




                                <div>
                                    <label className="text-sm text-gray-400">Address</label>
                                
                                        <textarea
                                            className="w-full  p-3 border-gray-200 overflow-hidden border-1 border"
                                            rows={4}
                                        />
                                </div> 

                            
                                
                            </div>

                            
                        </div>

                        
                    

                        <button className="text-white rounded-md text-center bg-teal-1 py-2 px-10 inline-flex  
                        focus:outline-none float-right hover:bg-teal-800 ">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
