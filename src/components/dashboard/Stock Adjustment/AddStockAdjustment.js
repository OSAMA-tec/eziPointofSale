import React, { useState , useEffect} from "react";
import {
  FaCalendar,
  FaInfoCircle,
  FaMapMarker,
  FaMinus,
  FaPlus,
  FaPlusCircle,
  FaSearch,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

import { MdCancel } from "react-icons/md";
import AddProduct from "../Product/AddorEditProduct";
import AddorEditContact from "../contacts/AddorEditContact";
import ImportProduct from "../Product/ImportProduct";
import axios from 'axios';
import { useNavigate } from "react-router-dom"


const AddStockAdjustment = () => {

  const Navigate = useNavigate();

  const [productsData, setProductsData] = useState([]);


  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const [isAddSupplier, setIsAddSupplier] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [info1, setInfo1] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    businesLocation: "",
    totalamountRecovered: 0,
    inputData: [],
    reason: "",
    referenceNumber: "",
    adjustmentType: "",
  });
  const params = useParams();
  const id = params.id;

  const handleChange = (e, index) => {
    const updatedData = formData.inputData.map((item, ind) => {
      if (ind === index) {
        // Create a new copy of the item with the modified subItem
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });
    console.log(updatedData);
    setFormData({ ...formData, inputData: updatedData });
  };

  const deleteByIndex = (index) => {
    let newArray = [...formData.inputData];
    newArray.splice(index, 1);
    setFormData({ ...formData, inputData: newArray });
  };

  const findTotal = () => {
    let total = 0;
    formData.inputData.map((val) => {
      return (total += val.subtotal);
    });
    return total;
  };
  const total = findTotal();

  const [isserror, setIsserror] = useState(false);
  

  const [isCliked, setIsCliked] = useState(false);
  const [newProduct, setNewProduct] = useState(false);
  const [isProductUpload, setIsProductUpload] = useState(false);
  const displayData = () => {
    if (newProduct === true) {
      return <AddProduct />;
    } else if (isProductUpload === true) {
      return <ImportProduct />;
    } else if (isAddSupplier === true) {
      return <AddorEditContact id={0} />;
    }
  };


  const fetchProducts = async () => {
  
    try {
      // const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/admin/products`);
      // console.log(response)
      setProductsData(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
useEffect(() => {
    // Make an API call to fetch SPG's records
  
      fetchProducts()


  }, []);
const addSAJ = async () => {

    try {
      // const token = localStorage.getItem('token');
      // console.log(formData)
      const response = await axios.post(`http://localhost:8000/admin/stock-adjustment`, formData);
      // console.log(response)
      if (response.status === 201) {
        Navigate("/home/stock-transfer");
      }
    } catch (error) {
      console.error('Error Adding Product:', error);
    }
  };


  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.businesLocation.length === 0 ||
      formData.inputData.length === 0 
    ) {
      setIsserror(true);
      console.log(isserror);
    } else if (id) {
      console.log("Handle Update", formData);
    } else {
      addSAJ()
      console.log("Handle Save", formData);
    }
  };
  return (
    <div className="w-full h-full p-3 bg-gray-100">
      <h1 className="text-xl text-start font-bold ">Add Stock Adjustment</h1>

      <div className="flex w-full  min-h-[100px] flex-col p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600">
        <div className="flex my-2 w-full md:w-1/4 relative"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
          <div className="flex flex-col text-sm text-start ">
            <h2 className="font-bold">Business Location:</h2>
            <div className="flex  w-full  relative">
              <FaMapMarker
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />

              <select
                value={formData.businesLocation}
                onChange={(e) => {
                  setFormData({ ...formData, businesLocation: e.target.value });
                }}
                type="text"
                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
              >
                <option value={"Please Select"}>Please Select</option>
                <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>
                  Eziline Software House (Pvt.) Ltd (BL0001)
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="flex text-sm text-start font-bold">Reference No:</h1>
            <input
              value={formData.referenceNumber}
              onChange={(e) => {
                setFormData({ ...formData, referenceNumber: e.target.value });
              }}
              type="Text"
              placeholder="Reference No"
              className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex text-sm text-start font-bold">
              <h1>Date:*</h1>
              <h2 className="text-red-400">
                {isserror && formData.date.length === 0
                  ? "Required field"
                  : ""}
              </h2>
            </div>
            <div className="flex">
              <FaCalendar
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />

              <input
                value={formData.date}
                onChange={(e) => {
                  setFormData({ ...formData, date: e.target.value });
                }}
                type="Date"
                placeholder="Select Date Time"
                className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex mx-2">
              <div className="text-start font-bold">
                <div className="flex flex-row">
                  <h1>Adjustment Type:* </h1>
                  <FaInfoCircle
                    onMouseOver={() => {
                      setInfo1(true);
                    }}
                    onMouseLeave={() => {
                      setInfo1(false);
                    }}
                    size={15}
                    style={{ color: "skyblue" }}
                    className="mx-1 mt-1 cursor-help"
                  />
                </div>

                <h2 className="text-red-400">
                  {isserror && formData.adjustmentType.length === 0
                    ? "Required field"
                    : ""}
                </h2>
              </div>
              <div className="flex mx-2">
                {info1 && (
                  <div className="flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-15 p-2 z-10 bg-white shadow-md shadow-gray-300">
                    <p className="text-start mt-2 text-gray-800">
                      Normal:Adjustment for normal reasons like Damage, Leakage
                      etc.
                    </p>
                    <p className="text-start mt-2 text-gray-800">
                      Abnormal:Adjustment for normal reasons like Fire, Accident
                      etc.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <select
              value={formData.adjustmentType}
              onChange={(e) => {
                setFormData({ ...formData, adjustmentType: e.target.value });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              <option value={""}>Please Selecet</option>
              <option value={"Normal"}>Normal</option>
              <option value={"Abnormal"}>Abnormal</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600">
        <h1 className="text-xl text-start font-bold ">Search Products</h1>
        <div className="flex flex-col items-center justify-center md:flex-row w-full">
          <div className="flex md:w-[60%] mt-4 md:mt-0">
            <div className="flex w-full   md:mt-0 relative">
              <div className="flex w-full">
                <FaSearch
                  size={15}
                  className="w-8 h-8 p-2 border-[1px] border-gray-600"
                />
                <input
                  onClick={() => {
                    setIsClicked(!isClicked);
                  }}
                  value={inputValue1}
                  onChange={(e) => {
                    setInputValue1(e.target.value);
                  }}
                  type="Text"
                  placeholder="Enter Product name / SKU / Scan bar code"
                  className="px-2 w-full py-[2px] border-[1px] border-gray-600 focus:outline-none"
                />
              </div>
              {isClicked && (
                <ul
                  className={`bg-white w-full    border-[1px]   z-10 absolute top-8 border-gray-600  ${
                    isClicked ? "max-h-60" : "max-h-0"
                  } `}
                >
                  {productsData?.map((data) => (
                    <li
                      key={data?.Name}
                      className={`p-1 px-9 text-start text-sm hover:bg-sky-600 hover:text-white
                                ${
                                  data?.productName?.toLowerCase() ===
                                    inputValue1?.toLowerCase() &&
                                  "bg-sky-600 text-white"
                                }
                                 ${
                                   data?.productName?.toLowerCase().startsWith(
                                     inputValue
                                   )
                                     ? "block"
                                     : "hidden"
                                 }`}
                      onClick={() => {
                        if (
                          data?.productName?.toLowerCase() !==
                          inputValue1.toLowerCase()
                        ) {
                          setInputValue1(data?.productName);
                          let array = formData.inputData;
                          array = [...array, { product: data?._id, quantity: 0, unitPrice: 0, subtotal: 0 }];
                          setFormData({ ...formData, inputData: array });
                          setInputValue1("");
                          setIsClicked(!isClicked);
                        }
                      }}
                    >
                      {data?.productName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <FaPlusCircle
              onClick={() => {
                setNewProduct(true);
                setIsCliked(true);
              }}
              size={20}
              style={{ color: "blue" }}
              className="w-8 h-8 p-1 border-[1px] border-gray-600"
            />
          </div>
        </div>
        <div className="flex overflow-x-scroll  mt-5 ">
          <table className="table-auto  mb-2 w-full  px-5 ">
            <thead>
              <tr className="h-[50px]">
                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">
                  Product
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">
                  Quantity
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">
                  Unit Price
                </th>

                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">
                  Subtotal
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">
                  <FaTrash size={15} />{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.inputData.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""} `}
                  >
                    <td className=" py-1 px-1">
                      <div className="flex flex-col">
                        <p className="text-start">{value.productName}</p>
                        <textarea
                          rows={2}
                          type="text"
                          name="info"
                          value={value.info}
                          onChange={(e) => {
                            handleChange(e, index);
                          }}
                          className="border-[1px] w-3/4 px-1 border-black focus:outline-none"
                        />
                        <h1 className="text-xs text-start text-gray-500">
                          Add product IMEI, Serial number or other informations
                          here.
                        </h1>
                      </div>
                    </td>
                    <td className="px-1 py-1 text-sm">
                      <div className="flex flex-col">
                        <div className="flex">
                          <FaMinus
                            size={15}
                            className="border-[1px] h-8 text-red-400 w-1/6 p-1 border-black"
                          />
                          <input
                            type="number"
                            name="quantity"
                            value={value.quantity}
                            onChange={(e) => {
                            handleChange(e, index);
                          }}
                            className="border-[1px] w-4/6 px-1 py-1 border-black focus:outline-none"
                          />
                          <FaPlus
                            size={15}
                            className="border-[1px] h-8 w-1/6 p-1 text-green-400 border-black"
                          />
                        </div>
                        <select
                          name="unit"
                          value={value.unit}
                          onChange={(e) => {
                            handleChange(e, index);
                          }}
                          className="border-[1px] mt-2 w-full px-1 py-1 border-black focus:outline-none"
                        >
                          <option value={"Litter"}>Litter</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex flex-col">
                        <input
                          name="unitPrice"
                          type="number"
                          value={value.unitPrice}
                          onChange={(e) => handleChange(e, index)}
                          className="border-[1px] w-full px-1 py-1 border-black focus:outline-none"
                        />
                        <h1 className="text-xs mt-3 text-gray-500">
                          Previous Unit Price: Rs. {20.5}
                        </h1>
                      </div>
                    </td>

                    <td className=" py-1 px-1 text-start">
                      <input
                        name="subtotal"
                        type="number"
                        value={
                          (value.subtotal = value.quantity * value.unitPrice)
                        }
                        onChange={(e) => handleChange(e, index)}
                        className="border-[1px] w-3/4 px-1 border-black focus:outline-none"
                      />
                    </td>
                    <td className="px-1 py-1 ">
                      <FaTimes
                        size={15}
                        onClick={() => {
                          deleteByIndex(index);
                        }}
                        className="cursor-pointer text-red-400"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr></tr>
            </tfoot>
          </table>
        </div>
        <div className="w-full h-[1px] bg-black mt-5"></div>
        <div className="flex flex-col items-end mt-5 justify-end">
          <div className="flex ">
            <h1 className="font-bold mx-2">Total Items</h1>
            <h1 className=" mx-2"> {formData.inputData.length}.00</h1>
          </div>
          <div className="flex ">
            <h1 className="font-bold mx-2">Net Total Amount</h1>
            <h1 className=" mx-2"> {total}</h1>
          </div>
        </div>
      </div>

      <div className="flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col ">
            <h1 className="flex text-sm text-start font-bold">
              Total Amount Recovered:
            </h1>
            <input
              value={formData.totalamountRecovered}
              onChange={(e) => {
                setFormData({ ...formData, totalamountRecovered: e.target.value });
              }}
              type="number"
              className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col ">
            <h1 className="flex text-sm text-start font-bold">Reason:</h1>
            <textarea
              rows={4}
              value={formData.reason}
              onChange={(e) => {
                setFormData({ ...formData, reason: e.target.value });
              }}
              placeholder="Shipping Details"
              type="Text"
              className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-end justify-end mt-5">
          <div className="flex ">
            <h1 className="font-bold mx-2">Purchase Total:</h1>
            <h1 className=" mx-2">Rs 0.00</h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 ">
          <button
            onClick={handleClick}
            className="bg-green-500 px-2 py-2 items-center justify-center flex w-25"
          >
            {id ? "Update" : "Save"}
          </button>
        </div>
      </div>

      {isCliked && (
        <div className="absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen">
          <div className="w-full md:w-[70%]">
            <div
              onClick={() => {
                setIsCliked(false);
                setIsAddSupplier(false);
                setNewProduct(false);
                setIsProductUpload(false);
              }}
              className=" flex items-end justify-end  w-full mt-10 bg-white px-5 pt-2"
            >
              <MdCancel size={20} />
            </div>
            {displayData()}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStockAdjustment;
