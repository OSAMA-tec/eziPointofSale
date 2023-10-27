import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const AddorEditUsers = () => {
    const Navigate = useNavigate ();

    const parms = useParams()
    // console.log(parms.id)
    const _id = parms.id
    const [rolesData, setRolesData] = useState([]);

    const [userData, setUserData] = useState({
        prefix: "",
        firstName: "",
        lastName: "",
        email: "",
        // isActive: false,
        allowLogin: false,
        userName: "",
        password: "",
        cPassword: "",
        role: "",
        allLocations: "",
        salesCommissionPercentage: "",
        maxSaleDiscountPercentage: "",
        // isAllowSelectedContacts: "",
        dateOfBirth: "",
        gender: "",
        maritalStatus: "",
        bloodGroup: "",
        mobileNumber: "",
        alternateContactNumber: "",
        familyContactNumber: "",
        facebookLink: "",
        twitterLink: "",
        socialMedia1: "",
        socialMedia2: "",
        customField1: "",
        customField2: "",
        customField3: "",
        customField4: "",
        guardianName: "",
        idProofName: "",
        idProofNumber: "",
        permanentAddress: "",
        currentAddress: "",
        accountHolderName: "",
        accountNumber: "",
        bankName: "",
        bankIdentifierCode: "",
        branch: "",
        taxPayerId: "",
        // department: "",
        // designation: "",
        // primaryWorkLocation: "",
        // basicSalary: "",
        // basicSalary2: "",
        // payComponent: ""


    })
    // const [userByIdData, setUserByIdData] = useState();

    const [iserror, setIserror] = useState(false)
    const fetchRoles = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/roles`);
            // console.log(response)
            setRolesData(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };
    const fetchUserById = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/users/${_id}`);
            // console.log(response)
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch user's roles records
        if(_id){
            fetchRoles();
            fetchUserById();
        }
        else{
            fetchRoles();

        }
    }, []);

    const addUser = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(finalFormData)
            const response = await axios.post(`http://localhost:8000/admin/users`,userData);
            console.log(response)
            if (response.status === 201) {
                Navigate("/home/users");
            }
        } catch (error) {
            console.error('Error Adding User:', error);
        }
    };

    const addUserById = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(finalFormData)
            const response = await axios.put(`http://localhost:8000/admin/users/${_id}`,userData);
            console.log(response)
            
        } catch (error) {
            console.error('Error Adding User:', error);
        }
    };
    const handleClick = (e) => {
        e.preventDefault()
        if (userData.firstName.length === 0 ||
            userData.email.length === 0 ||
            userData.password.length === 0 ||
            userData.cPassword.length === 0 ||
            userData.role.length === 0) {
            setIserror(true)
        } else if (_id) {
            addUserById()
            console.log("Handle Update")
        } else {
            addUser()
            console.log("Handle Save")
        }

    }
    return (

        <div className='flex flex-col   py-5 bg-gray-200 min-h-screen' >
            <form>
                <h1 className='text-2xl items-start flex mx-6 justify-start  font-semibold'>{_id ? "Edit User" : "Add User"}</h1>
                {/* Add User */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-3 w-[96%] mx-[2%] bg-white shadow-sm p-5 shadow-gray-400'>
                    <div className='flex flex-col items-start w-full md:w-[300px]'>
                        <h1 className='text-lg'>Prefix:</h1>
                        <input value={userData.prefix} onChange={(e) => setUserData({ ...userData, prefix: e.target.value })} type='text' placeholder='Mr / Mrs / Miss' className='focus:outline-none w-full md:w-[300px]  border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <h1 className='text-lg flex'>First Name: * <span className='text-red-500 mx-2 mt-1 text-sm'> {iserror && userData.firstName.length === 0 ? "Required Field" : ""} </span></h1>
                        <input value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} type='text' placeholder='First Name' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <h1 className='text-lg'>Last Name:</h1>
                        <input value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} type='text' placeholder='Last Name' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <h1 className='text-lg flex'>Email:* <span className='text-red-500 mx-2 mt-1 text-sm'> {iserror && userData.email.length === 0 ? "Required Field" : ""}</span></h1>
                        <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} type='email' placeholder='Email' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                    </div>
                    {/* <div className='flex  items-start mt-8'>
                        <input value={userData.isActive} onChange={(e) => setUserData({ ...userData, isActive: e.target.value })} type='checkbox' className='focus:outline-none rounded-md mt-1 w-5 h-5' />
                        <h1 className='text-lg mx-2'>Is Active ?</h1>
                    </div> */}
                </div>
                {/* Roles and Permissions */}
                <div className='flex flex-col mt-5 w-[96%] mx-[2%] bg-white shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'>Roles and Permissions</h1>

                    <div className='flex  items-start mt-8'>
                        <input value={userData.allowLogin} onChange={(e) => setUserData({ ...userData, allowLogin: e.target.value })} type='checkbox' className='focus:outline-none rounded-md mt-1 w-5 h-5' />
                        <h1 className='text-lg mx-2'>Allow Login</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 '>

                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Username:</h1>
                            <input value={userData.userName} onChange={(e) => setUserData({ ...userData, userName: e.target.value })} type='text' placeholder='Username' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                            <h1 className='text-sm text-gray-400'>Leave blank to auto generate username</h1>
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-lg flex'>Password:* <span className='text-red-500 mx-2 mt-1 text-sm'> {iserror && userData.password.length === 0 ? "Required Field" : ""}</span></h1>
                            <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} type='password' placeholder='Password' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-lg flex'>Confirm Password:* <span className='text-red-500 mx-2 mt-1 text-sm'> {iserror && userData.cPassword.length === 0 ? "Required Field" : ""}</span></h1>
                            <input value={userData.cPassword} onChange={(e) => setUserData({ ...userData, cPassword: e.target.value })} type='password' placeholder='Confirm Password' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>


                    </div>
                    <div className='flex flex-col items-start w-full mt-5'>
                        <h1 className='text-lg flex'>Role:* <span className='text-red-500 mx-2 mt-1 text-sm'> {iserror && userData.role.length === 0 ? "Required Field" : ""}</span></h1>
                        <select value={userData.role} onChange={(e) => setUserData({ ...userData, role: e.target.value })} type='text' className='focus:outline-none w-full md:w-1/2 border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                            <option value={""}>--Select Role --</option>
                            {rolesData.map((role) => (
                                <option key={role._id} value={role._id}>
                                    {role.name}
                                </option>
                            ))}

                        </select>
                    </div>

                    {/* <div className='flex items-start w-full mt-5'>
                        <div className='flex'>
                            <h1 className='text-lg'>Access Locations</h1>

                        </div>
                        <div className='flex flex-col mx-5'>
                            <div className='flex  items-start '>
                                <input name='allLocations' value={userData.allLocations} onChange={(e) => setUserData({ ...userData, allLocations: e.target.value })} type='checkbox' className='focus:outline-none rounded-md mt-1 w-5 h-5' />
                                <h1 className='text-lg mx-2'>All Locations</h1>
                            </div><div className='flex  items-start mt-2'>
                                <input name='allLocations' value={userData.allLocations} onChange={(e) => setUserData({ ...userData, allLocations: e.target.value })} type='checkbox' className='focus:outline-none rounded-md mt-1 w-5 h-5' />
                                <h1 className='text-lg mx-2'>Eziline Software House (Pvt.) Ltd (BL0001)</h1>
                            </div>
                        </div>

                    </div> */}


                </div>
                {/* Sales */}
                {/* <div className='flex flex-col mt-5 w-[96%] mx-[2%] bg-white shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'>Sales</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 '>

                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Sales Commission Percentage (%):</h1>
                            <input value={userData.salesCommissionPercentage} onChange={(e) => setUserData({ ...userData, salesCommissionPercentage: e.target.value })} type='text' placeholder='Sales Commission Percentage (%)' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-lg'>Max sales discount percent:</h1>
                            <input value={userData.maxSaleDiscountPercentage} onChange={(e) => setUserData({ ...userData, maxSaleDiscountPercentage: e.target.value })} type='text' placeholder='Max sales discount percent:' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    {/* <div className='flex  items-start mt-5'>
                        <input value={userData.isAllowSelectedContacts} onChange={(e) => setUserData({ ...userData, isAllowSelectedContacts: e.target.value })} type='checkbox' className='focus:outline-none rounded-md mt-1 w-5 h-5' />
                        <h1 className='text-lg mx-2'>Allow Selected Contacts</h1>
                    </div> */} 


                {/* </div> */}
                {/* More Information */}
                <div className='flex flex-col mt-5 w-[96%] mx-[2%] bg-white my-5 shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'>More Information</h1>


                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Date of Birth:</h1>
                            <input value={userData.dateOfBirth} onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })} type='date' placeholder='Date of Birth' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Gender:*</h1>
                            <select value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Others"}>Others</option>

                            </select>
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Martial Status:</h1>
                            <select value={userData.maritalStatus} onChange={(e) => setUserData({ ...userData, maritalStatus: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>
                                <option value={"Married"}>Married</option>
                                <option value={"Unmarried"}>Unmarried</option>
                                <option value={"Divorced"}>Divorced</option>

                            </select>
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Blood Group:</h1>
                            <input value={userData.bloodGroup} onChange={(e) => setUserData({ ...userData, bloodGroup: e.target.value })} type='text' placeholder='Blood Group' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Mobile Number:</h1>
                            <input value={userData.mobileNumber} onChange={(e) => setUserData({ ...userData, mobileNumber: e.target.value })} type='text' placeholder='Mobile Number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Alternate contact number:</h1>
                            <input value={userData.alternateContactNumber} onChange={(e) => setUserData({ ...userData, alternateContactNumber: e.target.value })} type='text' placeholder='Alternate contact number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Family Contact Number:</h1>
                            <input value={userData.familyContactNumber} onChange={(e) => setUserData({ ...userData, familyContactNumber: e.target.value })} type='text' placeholder='Family Contact Number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Facebook Link:</h1>
                            <input value={userData.facebookLink} onChange={(e) => setUserData({ ...userData, facebookLink: e.target.value })} type='text' placeholder='Facebook Link' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Twitter Link:</h1>
                            <input value={userData.twitterLink} onChange={(e) => setUserData({ ...userData, twitterLink: e.target.value })} type='text' placeholder='Twitter Link' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Social Media 1:</h1>
                            <input value={userData.socialMedia1} onChange={(e) => setUserData({ ...userData, socialMedia1: e.target.value })} type='text' placeholder='Social Media 1' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col w-full'>

                        </div>
                        <div className='flex flex-col w-full'>

                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Social Media 2:</h1>
                            <input value={userData.socialMedia2} onChange={(e) => setUserData({ ...userData, socialMedia2: e.target.value })} type='text' placeholder='Social Media 2' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Custom Field 1:</h1>
                            <input value={userData.customField1} onChange={(e) => setUserData({ ...userData, customField1: e.target.value })} type='text' placeholder='Custom Field 1' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Custom Field 2:</h1>
                            <input value={userData.customField2} onChange={(e) => setUserData({ ...userData, customField2: e.target.value })} type='text' placeholder='Custom Field 2' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Custom Field 3:</h1>
                            <input value={userData.customField3} onChange={(e) => setUserData({ ...userData, customField3: e.target.value })} type='text' placeholder='Custom Field 3' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Custom Field 4:</h1>
                            <input value={userData.customField4} onChange={(e) => setUserData({ ...userData, customField4: e.target.value })} type='text' placeholder='Custom Field 4' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Guardian Name:</h1>
                            <input value={userData.guardianName} onChange={(e) => setUserData({ ...userData, guardianName: e.target.value })} type='text' placeholder='Guardian Name' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>ID Proof name:</h1>
                            <input value={userData.idProofName} onChange={(e) => setUserData({ ...userData, idProofName: e.target.value })} type='text' placeholder='ID Proof name' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>ID Proof number:</h1>
                            <input value={userData.idProofNumber} onChange={(e) => setUserData({ ...userData, idProofNumber: e.target.value })} type='text' placeholder='ID Proof number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col col-span-2 items-start w-full '>
                            <h1 className='text-lg'>Permanent Address:</h1>
                            <textarea value={userData.permanentAddress} onChange={(e) => setUserData({ ...userData, permanentAddress: e.target.value })} rows={4} type='text' placeholder='Permanent Address' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col col-span-2 items-start w-full '>
                            <h1 className='text-lg'>Current Address:</h1>
                            <textarea value={userData.currentAddress} onChange={(e) => setUserData({ ...userData, currentAddress: e.target.value })} rows={4} type='text' placeholder='Current Address' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                    </div>

                </div>
                {/* Bank Details */}
                <div className='flex flex-col mt-5 w-[96%] mx-[2%] bg-white shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'> Bank Details</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-5 '>

                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Account Holder's Name:</h1>
                            <input value={userData.accountHolderName} onChange={(e) => setUserData({ ...userData, accountHolderName: e.target.value })} type='text' placeholder='Account Holder Name ' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-lg'>Account Number:</h1>
                            <input value={userData.accountNumber} onChange={(e) => setUserData({ ...userData, accountNumber: e.target.value })} type='text' placeholder='Account Number' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Bank Name:</h1>
                            <input value={userData.bankName} onChange={(e) => setUserData({ ...userData, bankName: e.target.value })} type='text' placeholder='Bank Name' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-lg'>Bank Identifier Code:</h1>
                            <input value={userData.bankIdentifierCode} onChange={(e) => setUserData({ ...userData, bankIdentifierCode: e.target.value })} type='text' placeholder='Bank Identifier Code' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Branch:</h1>
                            <input value={userData.branch} onChange={(e) => setUserData({ ...userData, branch: e.target.value })} type='text' placeholder='Branch' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-lg'>Tax Payer ID:</h1>
                            <input value={userData.taxPayerId} onChange={(e) => setUserData({ ...userData, taxPayerId: e.target.value })} type='text' placeholder='Tax Payer ID' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                </div>
                {/* HRM Details
                <div className='flex flex-col mt-5 w-[96%] mx-[2%] bg-white shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'>HRM Details</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 '>

                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Department:</h1>
                            <select value={userData.department} onChange={(e) => setUserData({ ...userData, department: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>


                            </select>
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Designation:</h1>
                            <select value={userData.designation} onChange={(e) => setUserData({ ...userData, designation: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>


                            </select>
                        </div>
                    </div>
                </div> */}

                {/* Payroll
                <div className='flex flex-col mt-5 w-[96%] mx-[2%] bg-white shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'>Payroll</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 '>

                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Primary Work Location:</h1>
                            <select value={userData.woprimaryWorkLocation} onChange={(e) => setUserData({ ...userData, primaryWorkLocation: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>
                                <option value={"Ezline Softwar House (Pvt). Ltd(BL001)"}>Ezline Softwar House (Pvt). Ltd(BL001)</option>


                            </select>
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Basic Salary:</h1>
                            <div className='flex'>
                                <input value={userData.basicSalary} onChange={(e) => setUserData({ ...userData, basicSalary: e.target.value })} type='text' placeholder='Basic Salary' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                                <select value={userData.basicSalary2} onChange={(e) => setUserData({ ...userData, basicSalary2: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                    <option value={"Per Month"}>Per Month</option>
                                    <option value={"Per Week"}>Per Week</option>
                                    <option value={"Per Day"}>Per Day</option>


                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-lg'>Pay Components:</h1>
                            <input value={userData.payComponent} onChange={(e) => setUserData({ ...userData, payComponent: e.target.value })} type='text' placeholder='Pay Components' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                </div> */}

                <button onClick={handleClick} className='flex items-center  text-white w-20 bg-green-400 rounded-sm px-3 py-1 justify-start m-5'>{_id ? "Update" : "Save"}</button>
            </form>
        </div>



    )
}

export default AddorEditUsers