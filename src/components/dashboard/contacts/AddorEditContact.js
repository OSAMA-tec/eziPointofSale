import React, { useState, useEffect } from 'react'
import { FaBriefcase, FaCalendar, FaChevronCircleDown, FaEnvelope, FaGlobe, FaIdBadge, FaInfo, FaMapMarker, FaMobile, FaMoneyBillAlt, FaPhone, FaUser, FaUsers } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AddorEditContact = (props) => {
    const params = useParams()
    const type= params.type
    console.log(type)
    const [iserror, setIsError] = useState(false)
    const [moreInfor, setMoreInfor] = useState(false)
    const [radioVal, setRadioVal] = useState('')
    const [formData, setFormData] = useState({
        contactType: type,
        contact_id:"",
        customer_grp:"",
        prefix:"",
        firstName:"",
        middleName:"",
        lastName:"",
        mobile:"",
        businessName:"",
        alternateContactNumber:"",
        landline:"",
        email:"",
        assignedTo:"",
        dateOfBirth:"",
        taxNumber:"",
        openingBalance:"",
        payTerm:"",
        payTerm1:"",
        creditLimit:"",
        addressLine1:"",
        addressLine2:"",
        city:"",
        state:"",
        country:"",
        zipCode:"",
        customField1:"",
        customField2:"",
        customField3:"",
        customField4:"",
        customField5:"",
        customField6:"",
        customField7:"",
        customField8:"",
        customField9:"",
        customField10:"",
        shippingAddress:""

    })

    const handleClick = async () => {
        if (
            (formData.firstName.length === 0 && radioVal === "individual") ||
            formData.contactType.length === 0 ||
            formData.mobile.length === 0
        ) {
            setIsError(true);
        } else {
            const postData = {
                contactType: formData.contactType,
                businessName:formData.businessName,
                firstName: formData.firstName,
                email:formData.email,
                mobile: formData.mobile,
                taxNumber:formData.taxNumber,
                
                openingBalance:formData.openingBalance,
                advanceBalance:formData.advanceBalance,
                addressLine1:formData.addressLine1,
                purchaseDue:formData.purchaseDue,
                purchaseReturn:formData.purchaseReturn,
                customField1:formData.customField1,
                customField2:formData.customField2,
                customField3:formData.customField3,
                customField4:formData.customField4,
                customField5:formData.customField5,
                customField6:formData.customField6,
                customField7:formData.customField7,
                customField8:formData.customField8,
                customField9:formData.customField9,
                customField10:formData.customField10,
                


                // Add other fields here...
            };

            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:8000/contacts/supplier', postData, {
                    headers: {
                        'Authorization': token
                    }
                });
            
                if (response.status === 201) {
                    console.log('Contact created successfully:', response.data);
                } else {
                    console.log('Unexpected response status:', response.status);
                }
            } catch (error) {
                if (error.response) {
                    console.error('Error creating contact:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error', error.message);
                }
                // Handle errors here
            }
        }
    };

   

    return (
        <div className='flex w-full  flex-col justify-center items-center bg-white p-5'>
            <h1 className=' text-xl font-bold flex justify-start w-full'>{props.id !== 0 ? "Edit a contact" : "Add a new contact"}</h1>
            <div className=' w-full flex flex-col'>
                <div className='grid grid-cols-1 mt-2 md:grid-cols-3 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Contact Type:* <p className='text-red-400'>{iserror && formData.contactType.length === 0 ? "Required Field":""}</p></h1>
                        <div className='flex'>
                            < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <select value={formData.contactType} onChange={(e) => { setFormData({ ...formData, contactType: e.target.value }) }} type='text'  className='px-2 py-[3px] border-[1px] border-gray-600 focus:outline-none' >
                                <option value={""}>Please Select</option>
                                <option value={"supplier"}>Suppliers</option>
                                <option value={"customer"}>Customers</option>
                                <option value={"Both "}>Both (Suppliers & Customers) </option>

                            </select>
                        </div>

                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex items-center '>
                            <input type='radio' className='w-5 h-5' name='contact-type-r' value='individual' onChange={(e) => { setRadioVal(e.target.value) }} />
                            <h1 className='flex text-lg text-start mx-1'>Individual</h1>
                        </div>
                        <div className='flex items-center'>
                            <input type='radio' className='w-5 h-5' name='contact-type-r' value='business' onChange={(e) => { setRadioVal(e.target.value) }} />
                            <h1 className='flex text-lg text-start mx-1'>Business</h1>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Contact ID:</h1>
                        <div className='flex'>
                            < FaIdBadge size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.contact_id} onChange={(e) => { setFormData({ ...formData, contact_id: e.target.value }) }} type='text' placeholder='Contact ID' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <h1 className='flex text-sm text-start'>Leave Empty to autogenerate</h1>

                    </div>
                </div>
                {formData.contactType === "customer" &&
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>

                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Customer Group:</h1>
                            <div className='flex'>
                                < FaUsers size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <select value={formData.customer_grp} onChange={(e) => { setFormData({ ...formData, customer_grp: e.target.value }) }} type='text' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' >
                                    <option value={""}>None</option>


                                </select>
                            </div>

                        </div>
                        <div ></div>
                        <div ></div>
                        <div ></div>
                    </div>
                }
                {radioVal === "individual" &&
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Prefix:</h1>
                            <input value={formData.prefix} onChange={(e) => { setFormData({ ...formData, prefix: e.target.value }) }} type='text' placeholder='Mr / Mrs / Miss' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'> First Name:* <p className='text-red-400'>{iserror && formData.firstName.length === 0 && radioVal ==="individual" ? "Required Field":""}</p></h1>
                            <input value={formData.firstName} onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }) }} type='text' placeholder='First Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Middle Name:</h1>
                            <input value={formData.middleName} onChange={(e) => { setFormData({ ...formData, middleName: e.target.value }) }} type='text' placeholder='Middle Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Last Name:</h1>
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                }
                {radioVal === "business" &&
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Business Name:</h1>
                            <div className='flex'>
                                < FaBriefcase size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input value={formData.businessName} onChange={(e) => { setFormData({ ...formData, businessName: e.target.value }) }} type='text' placeholder='Business Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>


                    </div>
                }
                <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Mobile:* <p className='text-red-400'>{iserror && formData.mobile.length === 0 ? "Required Field":""}</p></h1>
                        <div className='flex'>
                            < FaMobile size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.mobile} onChange={(e) => { setFormData({ ...formData, mobile: e.target.value }) }} type='text' placeholder='Mobile' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Alternate Contact Number:</h1>
                        <div className='flex'>
                            < FaPhone size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.alternateContactNumber} onChange={(e) => { setFormData({ ...formData, alternateContactNumber: e.target.value }) }} type='text' placeholder='Alternate Contact Number' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Landline:</h1>
                        <div className='flex'>
                            < FaPhone size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.landline} onChange={(e) => { setFormData({ ...formData, landline: e.target.value }) }} type='text' placeholder='Landline' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Email:</h1>
                        <div className='flex'>
                            < FaEnvelope size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type='email' placeholder='Email' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-2'>

                    {radioVal === "individual" &&
                        <div className='flex flex-col '>
                            <h1 className='flex text-sm text-start'>Date of Birth:</h1>
                            <div className='flex'>
                                < FaCalendar size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input value={formData.dateOfBirth} onChange={(e) => { setFormData({ ...formData, dateOfBirth: e.target.value }) }} type='text' placeholder='Date of Birth' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>

                    }
                    <div className='flex flex-col md:col-span-2'>
                        <h1 className='flex text-sm text-start'>Assigned to:</h1>
                        <div className='flex'>
                            < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.assignedTo} onChange={(e) => { setFormData({ ...formData, assignedTo: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div >

                    </div>


                </div>
                <div className='flex items-center justify-center w-full mt-5'>
                    <div className='w-[150px] bg-blue-600 items-center justify-center py-4 text-white flex' onClick={() => { setMoreInfor(!moreInfor) }}>
                        <h1 className='flex text-sm text-start'>More Information</h1>
                        < FaChevronCircleDown size={15} className='mx-1 border-[1px] border-gray-600' />
                    </div>
                </div>
                {moreInfor &&
                    <>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='grid grid-cols-1 md:grid-cols-3 my-5  gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Tax Number:</h1>
                                <div className='flex'>
                                    < FaInfo size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.taxNumber} onChange={(e) => { setFormData({ ...formData, taxNumber: e.target.value }) }} type='text' placeholder='Tax Number' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Opening Balance:</h1>
                                <div className='flex'>
                                    < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.openingBalance} onChange={(e) => { setFormData({ ...formData, openingBalance: e.target.value }) }} type='text' placeholder='Opening Balance' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Pay Term:</h1>
                                <div className='flex'>
                                    <input value={formData.payTerm} onChange={(e) => { setFormData({ ...formData, payTerm: e.target.value }) }} type='text' placeholder='Salary' className='px-2 py-[3px] w-1/2 border-[1px] border-gray-600 focus:outline-none' />
                                    <select value={formData.payTerm1} onChange={(e) => { setFormData({ ...formData, payTerm1: e.target.value }) }} type='text' className='px-2 py-[3px] w-1/2 border-[1px] border-gray-600 focus:outline-none'>
                                        <option value={""}>Please Select</option>
                                        <option value={"Months"}>Months</option>
                                        <option value={"Days"}>Days</option>
                                    </select>

                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Credit Limit:</h1>
                                <div className='flex'>
                                    < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.creditLimit} onChange={(e) => { setFormData({ ...formData, creditLimit: e.target.value }) }} type='text' placeholder='Credit Limit' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                                <h1 className='flex text-sm text-start'>Keep Blank for no limit</h1>

                            </div>


                        </div>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-5  gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Address Line 1:</h1>
                                <input value={formData.addressLine1} onChange={(e) => { setFormData({ ...formData, addressLine1: e.target.value }) }} type='text' placeholder='Address Line 1' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />

                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Address Line 2:</h1>
                                <input value={formData.addressLine2} onChange={(e) => { setFormData({ ...formData, addressLine2: e.target.value }) }} type='text' placeholder='Address Line 2' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />

                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 mb-5 mt-2 gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>City</h1>
                                <div className='flex'>
                                    < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.city} onChange={(e) => { setFormData({ ...formData, city: e.target.value }) }} type='text' placeholder='City' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>State:</h1>
                                <div className='flex'>
                                    < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.state} onChange={(e) => { setFormData({ ...formData, state: e.target.value }) }} type='text' placeholder='State' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Country:</h1>
                                <div className='flex'>
                                    < FaGlobe size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.country} onChange={(e) => { setFormData({ ...formData, country: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Zip Code:</h1>
                                <div className='flex'>
                                    < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.zipCode} onChange={(e) => { setFormData({ ...formData, zipCode: e.target.value }) }} type='text' placeholder='Zip/Postal Code' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>

                        </div>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='grid grid-cols-1 md:grid-cols-4 my-5  gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 1:</h1>
                                <input value={formData.customField1} onChange={(e) => { setFormData({ ...formData, customField1: e.target.value }) }} type='text' placeholder='Custom Field 1' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 2:</h1>
                                <input value={formData.customField2} onChange={(e) => { setFormData({ ...formData, customField2: e.target.value }) }} type='text' placeholder='Custom Field 2' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 3:</h1>
                                <input value={formData.customField3} onChange={(e) => { setFormData({ ...formData, customField3: e.target.value }) }} type='text' placeholder='Custom Field 3' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 4:</h1>
                                <input value={formData.customField4} onChange={(e) => { setFormData({ ...formData, customField4: e.target.value }) }} type='text' placeholder='Custom Field 4' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 5:</h1>
                                <input value={formData.customField5} onChange={(e) => { setFormData({ ...formData, customField5: e.target.value }) }} type='text' placeholder='Custom Field 5' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 6:</h1>
                                <input value={formData.customField6} onChange={(e) => { setFormData({ ...formData, customField6: e.target.value }) }} type='text' placeholder='Custom Field 6' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 7:</h1>
                                <input value={formData.customField7} onChange={(e) => { setFormData({ ...formData, customField7: e.target.value }) }} type='text' placeholder='Custom Field 7' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 8:</h1>
                                <input value={formData.customField8} onChange={(e) => { setFormData({ ...formData, customField8: e.target.value }) }} type='text' placeholder='Custom Field 8' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 9:</h1>
                                <input value={formData.customField9} onChange={(e) => { setFormData({ ...formData, customField9: e.target.value }) }} type='text' placeholder='Custom Field 9' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 10:</h1>
                                <input value={formData.customField10} onChange={(e) => { setFormData({ ...formData, customField10: e.target.value }) }} type='text' placeholder='Custom Field 10' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>


                        </div>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='flex items-center justify-center w-full my-5'>
                            <div className='flex flex-col w-1/2'>
                                <h1 className='flex text-sm text-start'>Shipping Address:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Shipping Address' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>

                    </>
                }

                <div className='flex items-end justify-end'>
                    <button onClick={handleClick} className='w-[100px] text-center px-3 py-1 border-[1px] border-gray-400 bg-green-400 mx-2'>{props.id !== 0 ? "Update" : "Save"}</button>

                </div>
            </div>
        </div>
    )
}

export default AddorEditContact