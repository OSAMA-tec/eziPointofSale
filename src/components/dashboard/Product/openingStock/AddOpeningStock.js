import React, { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const AddOpeningStock = () => {
    const Navigate = useNavigate ();

    const location = useLocation();
    const formDataFromPreviousPage = location.state?.formData;
    // console.log(formDataFromPreviousPage)
    const [unitData, setUnitData] = useState([]);

    const [formData, setFormData] = useState({
        ...formDataFromPreviousPage,
        location: " Eziline Software House (Pvt.) Ltd (BL0001)",
        openingStock: [{
            productName: "",//
            quantityRemaining: 0,
            unit: "",//
            unitCostBfrTx: 0,
            lotNumber: "",
            subTotalBfrTax: 0,
            date: "",
            note: ""
        }]


    })
    const handleChange = (e, index) => {
        const updatedData = formData.openingStock.map((item, ind) => {
            if (ind === index) {
                // Create a new copy of the item with the modified subItem
                return {
                    ...item, [e.target.name]: e.target.value,
                };
            }
            return item;
        });
        console.log(updatedData)
        setFormData({ ...formData, openingStock: updatedData });
    }
    const addRow = () => {
        let newArray = formData.openingStock
        newArray = [...newArray, {
            productName: "",
            quantityRemaining: 0,
            unit: "",
            unitCostBfrTx: 0,
            lotNumber: "",
            subTotalBfrTax: 0,
            date: "",
            note: ""
        }] 
        setFormData({ ...formData, openingStock: newArray })
      }

      const fetchUnitsById = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/units/${formDataFromPreviousPage.unit}`);
            // console.log(response)
            setUnitData(response.data);

        } catch (error) {
            console.error('Error fetching Selling price Group:', error);
        }
    };
    const addProduct = async () => {

        try {
          // const token = localStorage.getItem('token');
          // console.log(formData)
          const response = await axios.post(`http://localhost:8000/admin/products`, formData);
          console.log(response)
          if (response.status === 201) {
            Navigate("/home/products");
        }
        } catch (error) {
          console.error('Error Adding Product:', error);
        }
      };

      const handleSaveorEdit = () => {
        addProduct()
        console.log("Handle Save", formData)

    }
    useEffect(() => {
        fetchUnitsById()
    }, []);

    return (
        <div className='flex flex-col w-full px-5 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>Add Opening Stock</h1>
            </div>
            <div className='flex flex-col p-5 bg-gray-100'>
                <div className='flex'>
                    <h1 className=' font-semibold text-start '>Location:</h1>
                    <h1 className=' font-semibold text-start mx-1 '>{formDataFromPreviousPage.businessLocation}</h1>
                    {/* <h1 className=' font-semibold text-start mx-1'>({formData.productId})</h1> */}

                </div>
                <table className="table-auto mt-5  w-full  items-start">
                    <thead>
                        <tr className='Fixed bg-green-500 '>
                            <th>
                                <h1 className='text-center font-bold text-white'>Product Name</h1>
                            </th>
                            <th>
                                <h1 className='text-center font-bold text-white'>Quantity Remaining</h1>
                            </th>
                            <th>
                                <h1 className='text-center font-bold text-white'>Unit Cost (Before Tax)</h1>
                            </th>
                            <th>
                                <h1 className='text-center font-bold text-white'>Lot Number</h1>
                            </th>
                            <th>
                                <h1 className='text-center font-bold text-white'>Subtotal (Before tax)</h1>
                            </th>
                            <th>
                                <h1 className='text-center font-bold text-white'>Date</h1>
                            </th>
                            <th>
                                <h1 className='text-center font-bold text-white'>Note</h1>
                            </th>
                            <th>
                                <div onClick={addRow} className='flex items-center justify-center  rounded-sm px-1  mx-1'>
                                    <FaPlus size={15} style={{ color: "white" }} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.openingStock.map((val, index) => {
                            return <tr key={index}>
                                <td className='w-[10%] px-1'>
                                    <h1>{formDataFromPreviousPage.productName}</h1>
                                </td>
                                <td className='w-[20%] px-1'>
                                    <div className='flex w-full '>
                                        <input type='number' name='quantityRemaining' value={val.quantityRemaining} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 w-3/4 border-gray-400 focus:outline-none' />
                                        <input type='text' value={unitData.shortName} readOnly className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none w-1/4' />
                                    </div>
                                </td>
                                <td className='w-[10%] px-1'>
                                    <input type='number' name='unitCostBfrTx' value={val.unitCostBfrTx} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 w-full border-gray-400 focus:outline-none' />
                                </td>
                                <td className='w-[10%] px-1'>
                                    <input type='number' name='lotNumber' value={val.lotNumber} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 w-full border-gray-400 focus:outline-none' />
                                </td>
                                <td className='w-[10%] px-1'>
                                    <input type='number' name='subTotalBfrTax' value={val.subTotalBfrTax = val.unitCostBfrTx * val.quantityRemaining} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 w-full border-gray-400 focus:outline-none' />
                                </td>
                                <td className='w-[10%] px-1'>
                                    <input type='datetime-local' name='date' value={val.date} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 w-full border-gray-400 focus:outline-none' />
                                </td>
                                <td className='w-[30%] px-1'>
                                    <textarea rows={2} cols={5} type='text' name='note' value={val.note} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 w-3/4 border-gray-400 focus:outline-none' />
                                </td>
                            </tr>
                        })}



                    </tbody>

                </table>

            </div>


            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>Save</h1>

                </button>
            </div>
        </div>
    )
}

export default AddOpeningStock