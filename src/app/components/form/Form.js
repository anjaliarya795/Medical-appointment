import React from 'react';
import Input from '../input_field/text_input'
import Select from '../input_field/select_field'
import Radio from '../input_field/radio_input'


const Form = () => {
    const options = [
        { value: 'this_week', label: 'This Week' },
        { value: 'next_week', label: 'Next Week' },
        { value: 'this_month', label: 'This Month' },
        { value: 'next_month', label: 'Next Month' },

      ];
    return (
        <div>
            <form action="" id="appointment_form" className="py-28 bg-opacity-80 w-full mx-auto bg-white">
                <div className="mx-auto container px-10 ">

                    <div className=" space-y-10 rounded-xl bg-white lg:w-8/12 mx-auto ">
                    <div className='flex flex-col p-4'>

                        <div className="md:inline-flex  w-full  text-gray-500 items-center ">


                            <div className="lg:w-6/12 md:px-5 w-full mx-auto  space-y-5">
                                    
                                <Input id={"name"} labelName={"Name"} type={"text"} placeholder={"Anjali Arya"}/>

                                <Input id={"email"} labelName={"Email"} type={"email"} placeholder={"anjalisinha498@gmail.com"}/>

                                <Input id={"tel"} labelName={"Phone no."}  type={"tel"} placeholder={"9898989898"}/>

                                <Input id={"age"} labelName={"Age"} type={"tel"} placeholder={"21"}/>

                                <Radio id={"gender"} labelName={"Gender"} />

                            </div>

                            <div className="lg:w-6/12 md:px-5 w-full mx-auto  space-y-5">

                                <Select id={"speciality"} labelName={"Speciality"} options={options} />
                                
                                <Select id={"app_needed"} labelName={"Appointment needed"} options={options} />
                                
                                <Select id={"day"} labelName={"Day preferred"} options={options} />

                                <div>
                                    <label  className="text-sm text-teal-900">Address</label>
                                    <div className="w-full inline-flex border">

                                        <textarea
                                            className="w-full p-3 border-gray-200 overflow-hidden border-1 border"
                                            rows={3}
                                        />
                                    </div>
                                    
                                </div> 
                                
                            </div>

                        </div>

                            <button className="text-white rounded-md text-center  from-teal-700 via-teal-1 to-teal-700 bg-gradient-to-r px-16 text-md py-3 inline-flex  
                        focus:outline-none hover:scale-105 mt-5 w-fit self-end" >Submit</button>
                        
                    </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
