import React, { useRef, useState, useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { FaInfoCircle, FaMinus, FaPlus, FaPlusCircle, FaSearch, FaTimes, FaTrash } from 'react-icons/fa';
import JoditEditor from 'jodit-react';
import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const AddorEditProduct = () => {
  const editor = useRef(null)
  const params = useParams()
  const _id = params.id


  const dummyData = [
    {
      id: 1,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com"
    },
    {
      id: 2,
      Username: "username1",
      Name: "User1",
      Role: "Admin",
      Email: "username@gmail.com"
    },
    {
      id: 3,
      Username: "username2",
      Name: "User2",
      Role: "Admin",
      Email: "username2@gmail.com"
    },
    {
      id: 4,
      Username: "username3",
      Name: "User3",
      Role: "Admin",
      Email: "username3@gmail.com"
    },
    {
      id: 5,
      Username: "username4",
      Name: "User4",
      Role: "Admin",
      Email: "username4@gmail.com"
    },
    {
      id: 6,
      Username: "username5",
      Name: "User5",
      Role: "Admin",
      Email: "username5@gmail.com"
    },
    {
      id: 7,
      Username: "username6",
      Name: "User6",
      Role: "Admin",
      Email: "username6@gmail.com"
    }
  ]
  const [unitsData, setUnitsData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [variationData, setVariationData] = useState([]);

  const [skuInfor, setSkuInfor] = useState(false)
  const [skuInfor1, setSkuInfor1] = useState(false)
  // const [info, setInfo] = useState(false)
  const [infor, setInfor] = useState(false)
  const [open, setOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  // const [productImei, setProductImei] = useState(false)
  // const [isSelling, setIsSelling] = useState(false)
  const inpuRef = useRef()
  const inpuRef1 = useRef()
  // const [isWoocommerce, setIsWoocommerce] = useState(false)
  const [variationValue1, setVariationValue1] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [isAdSlngPrcGrp, setIsAdSlngPrcGrp] = useState(false)
  const [isOpeningStock, setIsOpeningStock] = useState(false)
  const [isAddOther, setIsAddOther] = useState(false)
  const [isSave, setIsSave] = useState(false)

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    productName: "",
    sku: "",
    barcodeType: "",
    unit: "",
    businessLocation: "",
    manageStock: false,
    // alertQuantity: 0,
    productDescription: "",
    productImage: "",
    // productBroucher: "",
    // imeiSerialNumber: false,
    // notforSelling: false,
    // weight: 0,
    // servieStaffTime: "",
    // woocommerceSync: false,
    productType: "",
    variationType: [{ variationTempleateID: "", variation: [{ subSKU: "", value: "", variationImage: "" }] }],
    combo: [],
    netTotal: 0,
    dfltSellingPrice: 0,
    margin: 0
  })
  // if (index === -1)
  const handleSubChange = (e, index, i) => {

    const updatedData = formData.variationType.map((item, ind) => {
      if (ind === index) {
        // Create a new copy of the item with the modified subItem
        return {
          ...item,
          variation: item.variation.map((subItem, x) =>
            x === i ? { ...subItem, [e.target.name]: e.target.value } : subItem
          ),
        };
      }
      return item;
    });
    setFormData({ ...formData, variationType: updatedData });
  }

  const handleChange = (e, index) => {
    const updatedData = formData.variationType.map((item, ind) => {
      if (ind === index) {
        // Create a new copy of the item with the modified subItem
        return {
          ...item, variationTempleateID: e.target.value, variation: []
        };
      }
      return item;
    });
    // console.log(updatedData)
    setFormData({ ...formData, variationType: updatedData });
  }
  const handleComboCahange = (index, e) => {
    const updatedData = formData.combo.map((item, ind) => {
      if (ind === index) {
        // Create a new copy of the item with the modified subItem
        return {
          ...item, [e.target.name]: e.target.value
        };
      }
      return item;
    });
    console.log(updatedData)
    setFormData({ ...formData, combo: updatedData });
  }

  const addToArray = (name) => {
    let updatedData = formData.combo
    updatedData = [...updatedData, { productName: name, quantity: "", unit: "", unitType: [{ value: "" }], ppexcludeTax: "", totalAmountExcluedeTax: "" }]
    setFormData({ ...formData, combo: updatedData });

  }

  const handleValues = (e, index) => {
    setVariationValue1([...variationValue1, { value: e.target.value }])
    const updatedData1 = formData.variationType.map((item, ind) => {
      if (ind === index) {
        // Create a new copy of the item with the modified subItem
        return {
          ...item, variation: [...item.variation, { subSKU: "", value: e.target.value, variationImage: "" }]
        };
      }
      return item;
    });
    setFormData({ ...formData, variationType: updatedData1 });

  }

  const handleRemove = (index, i) => {
    let number = i
    const updatedData1 = formData.variationType
    updatedData1[index].variation.splice(number, 1)
    setFormData({ ...formData, variationType: updatedData1 });

  }
  const deleteByIndex = (index) => {
    let updatedData1 = formData.combo
    updatedData1.splice(index, 1)
    setFormData({ ...formData, combo: updatedData1 });
  }


  const addRow = () => {
    let newArray = formData.variationType
    newArray = [...newArray, { variationTempleateID: "", variation: [{ subSKU: "", value: "", variationImage: "" }] }]
    setFormData({ ...formData, variationType: newArray })
  }



  const fetchUnits = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/admin/units`, {
        headers: {
            'Authorization': token
        }
    });
      // console.log(response)
      setUnitsData(response.data);
    } catch (error) {
      console.error('Error fetching units:', error);
    }
  };

  const fetchVariations = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/admin/variations/all-records`, {
        headers: {
            'Authorization': token
        }
    });
      console.log(response.data)
      setVariationData(response.data);
      // console.log(variationData)

    } catch (error) {
      console.error('Error fetching variations:', error);
    }
  };

  const fetchProducts = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/admin/products`, {
        headers: {
            'Authorization': token
        }
    });
      // console.log(response)
      setProductsData(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const fetchProductById = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/admin/products/${_id}`, {
        headers: {
            'Authorization': token
        }
    });
      // console.log(response)
      setFormData(response.data);

    } catch (error) {
      console.error('Error fetching Product:', error);
    }
  };
  useEffect(() => {
    // Make an API call to fetch SPG's records
    if (_id) {
      fetchUnits()
      fetchProducts()
      fetchProductById();
      fetchVariations()
    }
    else {
      fetchUnits()
      fetchProducts()
      fetchVariations()
    }


  }, []);

  const addProduct = async () => {

    try {
      const token = localStorage.getItem('token');
      // console.log(formData)
      const response = await axios.post(`http://localhost:8000/admin/products`, formData, {
        headers: {
            'Authorization': token
        }
    });
      // console.log(response)
      if (response.status === 201) {
        console.log("Success")
      }
    } catch (error) {
      console.error('Error Adding Product:', error);
    }
  };

  const addProductById = async () => {

    try {
      const token = localStorage.getItem('token');
      // console.log(formData)
      const response = await axios.put(`http://localhost:8000/admin/products/${_id}`, formData, {
        headers: {
            'Authorization': token
        }
    });
      console.log(response)

    } catch (error) {
      console.error('Error Adding Product:', error);
    }
  };
  const [isserror, setIsserror] = useState(false)
  const handleClick = () => {

    if (formData.productName.length === 0 ||
      // formData.barcodeType.length === 0 ||
      formData.unit.length === 0 ||
      formData.productType.length === 0
    ) {
      setIsserror(true)
      console.log(isserror)
    }
    else if (_id) {
      // // Check if isOpeningStock is true
      // if (isOpeningStock) {
      //   // Navigate to the opening stock page and pass the formData as state
      //   navigate("/home/opening-stock/add", { state: { formData } });
      // }
      // else if (isAdSlngPrcGrp) {
      //   navigate("/home/products/add-selling-prices", { state: { formData } })
      //   setIsAdSlngPrcGrp(false)
      // }
      // else {
      // addProductById()
      //   console.log("Handle Update", formData)

      // }
    }
    else {
      // Check if isOpeningStock is true
      if (isOpeningStock) {
        // Navigate to the opening stock page and pass the formData as state
        navigate("/home/opening-stock/add", { state: { formData } });
      }
      else if (isAdSlngPrcGrp) {
        navigate("/home/products/add-selling-prices", { state: { formData } })
        // setIsAdSlngPrcGrp(false)
      }
      else if (isAddOther) {
        setTimeout(() => {
          navigate("/home/products/create")
        }, 1000)
      }
      else {
        // addProduct()
        console.log("Handle save ", formData);
      }
      // else {
      //   console.log("Error")
      // }
    

    // if (isAdSlngPrcGrp) {
    //   navigate("/home/products/add-selling-prices")
    //   setIsAdSlngPrcGrp(false)
    // }
    // else if (isOpeningStock) {
    //   navigate("/home/opening-stock/add" )}


    // }
  }}
  return (
    <div className='w-full flex flex-col bg-gray-100 p-5 min-h-screen'>
      <h1 className='text-xl  text-start mb-4'>Add new Product</h1>
      <div className='w-full p-5 border-t-[3px] bg-white  border-blue-600 pb-[100px] rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>
              Product Name:*
              <span className='text-red-400'>{isserror && formData.productName.length === 0 ? "Required field" : ""}</span>

            </h1>
            <input type='text' value={formData.productName} onChange={(e) => { setFormData({ ...formData, productName: e.target.value }) }} placeholder='Product Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col relative'>
            <div className='flex '>
              <h1 className='text-start font-bold'>SKU:</h1>
              <FaInfoCircle onMouseOver={() => { setSkuInfor(true) }} onMouseLeave={() => { setSkuInfor(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {skuInfor &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start'>Unique Product ID or Stock Keepin Unit</p>
                  <p className='text-start mt-2'>Keep it blank to automatically generate sku</p>
                  <p className='text-start mt-2 text-gray-600'>you can modify sku prefix in Business Setting</p>

                </div>
              }
            </div>
            <input type='text' value={formData.sku} onChange={(e) => { setFormData({ ...formData, sku: e.target.value }) }} placeholder='SKU' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col '>

            <h1 className='flex text-start font-bold'>
              Barcode Type:*
              <span className='text-red-400'>{isserror && formData.barcodeType.length === 0 ? "Required field" : ""}</span>

            </h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => { setIsOpen1(!isOpen1); }}
                  className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                  value={formData.barcodeType}
                  onChange={(e) => { setFormData({ ...formData, barcodeType: e.target.value }) }}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${isOpen1 && "rotate-180"} absolute top-1 right-3`} />


              </div>
              {isOpen1 &&
                <ul

                  className={`bg-white  w-[245px] mx-[30px] border-[1px] absolute top-6 z-10 right-0 border-gray-600 overflow-y-auto ${isOpen1 ? "max-h-60" : "max-h-0"} `}
                >
                  <div className="flex items-center px-2 sticky top-0 bg-white">
                    <input
                      type="text"
                      value={inputValue1}
                      onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
                      className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                    />
                  </div>
                  {dummyData?.map((data) => (
                    <li
                      key={data?.Name}
                      className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === formData.barcodeType?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue1)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.Name?.toLowerCase() !== formData.barcodeType.toLowerCase()) {

                          setFormData({ ...formData, barcodeType: data?.Name })
                          setIsOpen1(false);
                          setInputValue("");
                        }
                      }}
                    >
                      {data?.Name}
                    </li>
                  ))}
                </ul>
              }
            </div>

          </div>
          <div className='flex flex-col '>
            <h1 className='flex text-start font-bold'>
              Unit:*
              <span className='text-red-400'>{isserror && formData.unit.length === 0 ? "Required field" : ""}</span>

            </h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => setOpen(!open)}
                  className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                  value={formData.unit}
                  onChange={(e) => { setFormData({ ...formData, unit: e.target.value }) }}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-1 right-7`} />

                <FaPlusCircle size={20} style={{ color: "skyblue" }} className='w-8 h-8 p-1  border-[1px] border-gray-600' />

              </div>
              {open &&
                <ul

                  className={`bg-white  w-[250px] mx-[30px] border-[1px] absolute z-10 top-8 right-0 border-gray-600 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
                >
                  <div className="flex items-center px-2 sticky top-0 bg-white">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                      className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                    />
                  </div>
                  {unitsData?.map((data) => (
                    <li
                      key={data?._id}
                      className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.name?.toLowerCase() === formData.unit?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.name?.toLowerCase().startsWith(inputValue)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.name?.toLowerCase() !== formData.unit.toLowerCase()) {
                          setFormData({ ...formData, unit: data?._id })
                          setOpen(false);
                          setInputValue("");
                        }
                      }}
                    >
                      {data?.name + ' ' + data?.shortName}
                    </li>
                  ))}
                </ul>
              }
            </div>

          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>


          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input value={formData.manageStock} onChange={(e) => { setFormData({ ...formData, manageStock: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
              <div className='flex mx-2'>
                <h1 className='text-start font-bold'>Manage Stock?</h1>
                <FaInfoCircle onMouseOver={() => { setSkuInfor1(true) }} onMouseLeave={() => { setSkuInfor1(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                {skuInfor1 &&
                  <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                    <p className='text-start'>Enable or disable stock management for product</p>
                    <p className='text-start mt-2 text-gray-600'>Stock management should be disable mostly for services. Example Hair Cutting, Repairing etc</p>

                  </div>
                }
              </div>

            </div>
            <h1 className='text-start text-gray-500'>Enable Stock management at product level</h1>

          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

          {/* <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Alert Quantity:</h1>
            <input value={formData.alertQuantity} onChange={(e) => { setFormData({ ...formData, alertQuantity: e.target.value }) }} type='text' placeholder='Alert Quantity' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div> */}
          <div className='flex flex-col relative'>
            <div className='flex '>
              <h1 className='text-start font-bold'>Business Location:</h1>
              <FaInfoCircle onMouseOver={() => { setInfor(true) }} onMouseLeave={() => { setInfor(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {infor &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start'>Location Where Product will be available</p>

                </div>
              }
            </div>
            <input value={formData.businessLocation} onChange={(e) => { setFormData({ ...formData, businessLocation: e.target.value }) }} type='text' placeholder='Business Location' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Weight:</h1>
            <input value={formData.weight} onChange={(e) => { setFormData({ ...formData, weight: e.target.value }) }} type='number' placeholder='Weight' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex w-full mt-3'>

          <div className='flex flex-col w-[67%]'>
            <h1 className='flex text-start font-bold'>Description:</h1>
            <JoditEditor
              className='w-full h-[300px] border-[1px] border-gray-500'
              ref={editor}
              value={formData.productDescription} onChange={(newContent) => { setFormData({ ...formData, productDescription: newContent }) }}
            />
          </div>
          <div className=' flex flex-col w-[30%] mx-[1.5%]'>
            <h2 className='text-start font-bold '> Product Image:</h2>
            <div className='flex'>
              {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
              <input value={formData.productImage} readOnly type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
              <input value={formData.productImage} onChange={(e) => { setFormData({ ...formData, productImage: e.target.value }) }} className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
              <div onClick={() => { inpuRef.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
                <AiTwotoneFolderOpen size={32} />
                Browse
              </div>
            </div>
            <p className='text-start  flex '>Max File size: 5MB:
              <br />
              Aspec Ration should be 1:1
            </p>

          </div>


        </div>

        {/* <div className=' flex flex-col mt-5 w-[30%] mx-[1.5%]'>
          <h2 className='text-start font-bold '> Product Broucher:</h2>
          <div className='flex'>
            
            <input value={formData.productBroucher} readOnly type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
            <input value={formData.productBroucher} onChange={(e) => { setFormData({ ...formData, productBroucher: e.target.value }) }} className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef1} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
            <div onClick={() => { inpuRef1.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
              <AiTwotoneFolderOpen size={32} />
              Browse
            </div>
          </div>
          <p className='text-start  flex '>Max File size: 5MB:
            <br />
            Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
          </p>

        </div> */}





      </div>
      {/* <div className='w-full p-5 border-t-[3px] bg-white  mt-5 border-blue-600 pb-[100px] rounded-xl'>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>


          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input value={formData.imeiSerialNumber} onChange={(e) => { setFormData({ ...formData, imeiSerialNumber: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
              <div className='flex mx-2'>
                <h1 className='text-start text-xs font-semibold'>Enable Product description, IMEI or Serial Number</h1>
              </div>

            </div>
            <FaInfoCircle onMouseOver={() => { setProductImei(true) }} onMouseLeave={() => { setProductImei(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
            {productImei &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-12 left-4 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start'>Enable or disable stock management for product</p>
                <p className='text-start mt-2 text-gray-600'>Stock management should be disable mostly for services. Example Hair Cutting, Repairing etc</p>

              </div>
            }

          </div>
          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input value={formData.notforSelling} onChange={(e) => { setFormData({ ...formData, notforSelling: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
              <div className='flex mx-2'>
                <h1 className='text-start font-bold'>Not for Selling</h1>
                <FaInfoCircle onMouseOver={() => { setIsSelling(true) }} onMouseLeave={() => { setIsSelling(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                {isSelling &&
                  <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                    <p className='text-start mt-2 text-gray-600'>If Checked Product will not be displayed in sales screen for selling purposes.</p>

                  </div>
                }
              </div>

            </div>

          </div>


        </div>
        <div className='flex flex-col mt-5 w-1/3'>
          <div className='flex flex-col mt-2'>
            <h1 className='flex text-start font-bold'>Weight:</h1>
            <input value={formData.weight} onChange={(e) => { setFormData({ ...formData, weight: e.target.value }) }} type='text' placeholder='Weight' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col mt-2'>
            <h1 className='flex text-start font-bold'>Service staff timer/Preparation time (In minutes)::</h1>
            <input value={formData.servieStaffTime} onChange={(e) => { setFormData({ ...formData, servieStaffTime: e.target.value }) }} type='text' placeholder='Service staff timer/Preparation time (In minutes):' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex'>
          <input value={formData.woocommerceSync} onChange={(e) => { setFormData({ ...formData, woocommerceSync: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          <div className='flex mx-2'>
            <h1 className='text-start font-bold'>Disable Woocommerce Sync</h1>
            <FaInfoCircle onMouseOver={() => { setIsWoocommerce(true) }} onMouseLeave={() => { setIsWoocommerce(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
            {isWoocommerce &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start mt-2 text-gray-600'>If Checked Product will not be displayed in sales screen for selling purposes.</p>

              </div>
            }
          </div>

        </div>

      </div> */}
      <div className='w-full p-5 border-t-[3px] bg-white  mt-5 border-blue-600 pb-[100px] rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>
              Product Type:*
              <span className='text-red-400'>{isserror && formData.productType.length === 0 ? "Required field" : ""}</span>

            </h1>
            <select value={formData.productType} onChange={(e) => { setFormData({ ...formData, productType: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
              <option value={"Single"}>Single</option>
              <option value={"Variable"}>Variable</option>
              <option value={"Combo"}>Combo</option>

            </select>
          </div>


        </div>

        {formData.productType === "Variable" &&
          <div className='flex flex-col mt-5'>
            <div className='flex items-start'>
              <h1 className='text-lg text-start'>Add Variation:*</h1>
              <div className='flex items-center justify-center bg-blue-600 rounded-sm p-2 mx-1'>
                <FaPlus onClick={addRow} size={15} style={{ color: "white" }} className='cursor-pointer' />
              </div>


            </div>
            <div className='flex overflow-x-scroll  mt-5 ' >
              <table className="table-auto  w-full  mb-2   px-5 ">
                <thead>
                  <tr className='py-1 bg-green-500'>
                    <th className=" py-2 title-font w-[20%] text-start border-[1px] border-white  tracking-wider font-bold text-white text-sm ">Variation</th>
                    <th className=" py-2 title-font w-[80%] text-start border-[1px] border-white tracking-wider font-bold text-white text-sm ">Variation Value</th>

                  </tr>

                </thead>
                <tbody >
                  {formData.variationType.map((val, index) => {
                    return <tr key={index} className='min-h-[300px] text-start'>
                      <td className='flex flex-col'>

                        <select value={val.variationTempleateID} onChange={(e) => { handleChange(e, index) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
                          {variationData.map((variations) => (
                            <option key={variations._id} value={variations._id}>
                              {variations.variationName}
                            </option>
                          ))}

                        </select>

                        {val.variationTempleateID.length > 0 &&
                          <div className='mt-5'>
                            <h1 className='font-semibold text-xs text-start'>Selecet Variation Values</h1>
                            <select value={''} onChange={(e) => { handleValues(e, index) }} className='w-full border-[1px] border-black py-1 px-1 focus:outline-none' >
                              {variationData.map((variations) => (

                                val.variationTempleateID === variations._id ?
                                  <>
                                    {variations.variationValues.map((values) => (

                                      <option>
                                        {values}
                                      </option>
                                    ))}

                                  </>
                                  :
                                  <>


                                  </>

                              ))}

                            </select>
                          </div>
                        }

                      </td>
                      <td className=''>
                        <table className="table-auto  w-full  items-start">
                          <thead>
                            <tr className='mt-[2px]'>
                              <th className='w-[25%]'>
                                <div className='flex px-2 py-1 border-[1px] border-white  relative bg-blue-700 mt-[2px]'>

                                  <h1 className='text-start font-bold text-white'>SKU:</h1>
                                  {/* <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                  {info &&
                                    <div className='flex flex-col w-[180px] rounded-md  border-[2px] border-gray-400 absolute top-8 p-2 20 bg-white shadow-md shadow-gray-300'>
                                      <p className='text-start'>SKU is Optional</p>
                                      <p className='text-start mt-3'>Keep it blank to automatically generate sku</p>

                                    </div>
                                  } */}
                                </div>
                              </th>
                              <th className='w-[25%]'>
                                <div className='flex px-2 py-1 border-[1px] border-white  bg-blue-700 mt-[2px]'>
                                  <h1 className='text-start font-bold text-white'>Value</h1>
                                </div>
                              </th>
                              <th className='w-[45%]'>
                                <div className='flex px-2 py-1 border-[1px] border-white  bg-blue-700 mt-[2px]'>
                                  <h1 className='text-start font-bold text-white'>Variation Images</h1>
                                </div>
                              </th>
                              <th className='w-[5%]'>
                                <div className='flex px-1 py-2 border-[1px] border-white   bg-blue-700 mt-[2px]'>
                                  <div className='flex items-center justify-center bg-green-600 rounded-sm px-1  mx-1'>
                                    <FaPlus size={15} style={{ color: "white" }} />
                                  </div>
                                </div>

                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {formData.variationType[index].variation.map((data, i) => {
                              return <tr key={i}>
                                <td>
                                  <input type='text' name='subSKU' value={data.subSKU || ""} onChange={(e) => handleSubChange(e, index, i)} className='border-[1px] w-full border-black focus:outline-none' />

                                </td>
                                <td>
                                  <input type='text' name='value' value={data.value || ""} onChange={(e) => handleSubChange(e, index, i)} className='border-[1px] w-full border-black focus:outline-none' />

                                </td>
                                <td>
                                  <input type='file' name='variationImage' accept="image/*" value={data.variationImage || ''} onChange={(e) => handleSubChange(e, index, i)} className=' w-full px-3  focus:outline-none' />

                                </td>
                                <td>
                                  <div onClick={() => { handleRemove(index, i) }} className='flex items-center justify-center bg-red-500 cursor-pointer rounded-sm px-1 py-1  '>
                                    <FaMinus size={15} style={{ color: "white" }} />
                                  </div>
                                </td>
                              </tr>
                            })}

                          </tbody>

                        </table>
                      </td>

                    </tr>
                  })}


                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
          </div>
        }

        {formData.productType === "Combo" &&
          <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
            <div className='flex flex-col md:flex-row mt-5 w-full items-center justify-center'>
              <div className='flex flex-col   w-[50%] items-center justify-center'>
                <div className='flex w-full   md:mt-0 relative'>
                  <div className='flex w-full'>
                    < FaSearch size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                    <input onClick={() => { setIsClicked(!isClicked) }} value={inputValue2} onChange={(e) => { setInputValue2(e.target.value) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 w-full py-[2px] border-[1px] border-gray-600 focus:outline-none' />
                  </div>
                  {isClicked &&
                    <ul

                      className={`bg-white w-full    border-[1px]   z-10 absolute top-8 border-gray-600  ${isClicked ? "max-h-60" : "max-h-0"} `}
                    >

                      {productsData?.map((data) => (
                        <li
                          key={data?._id}
                          className={`p-1 px-9 text-start text-sm hover:bg-sky-600 hover:text-white
                          ${data?.productName?.toLowerCase() === inputValue2?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
                           ${data?.productName?.toLowerCase().startsWith(inputValue2)
                              ? "block"
                              : "hidden"
                            }`}
                          onClick={() => {
                            if (data?.productName?.toLowerCase() !== inputValue2.toLowerCase()) {
                              setInputValue1(data?.productName)
                              let name = data?.productName
                              addToArray(name)
                              setInputValue2('')
                              setIsClicked(!isClicked);
                            }
                          }}
                        >
                          {data?.productName}
                        </li>
                      ))}
                    </ul>
                  }
                </div>



              </div>

            </div>


            <div className='flex overflow-x-scroll  mt-5 ' >
              <table className="table-auto w-full   mb-2   px-5 ">
                <thead>
                  <tr className='h-[50px] bg-green-500'>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Product Name</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Quantity</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Purchase Price (Excluding Tax) </th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Total Amount (Exc. Tax)</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm "><FaTrash size={15} /> </th>

                  </tr>
                </thead>
                <tbody >
                  {formData.combo.map((value, index) => {
                    return <tr title='Double Click to Edit me' key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}>
                      <td className=" py-1 px-1">{value.productName}</td>
                      <td className="px-1 py-1 text-sm flex flex-col">
                        <input type='number' name='quantity' required value={value.quantity} onChange={(e) => { handleComboCahange(index, e) }} className='border-[1px] px-2  w-1/3 border-gray-400 focus:outline-none' />
                        <select value={value.unit} name='unit' onChange={(e) => { handleComboCahange(index, e) }} type='text' className='border-[1px] px-2  border-gray-400 focus:outline-none'>
                          {/* {value.unitType.map((val, ind) => { */}
                            <option value={productsData.value}>{productsData.value}</option>

                          {/* })} */}
                        </select>
                      </td>
                      <td className="px-1 py-1"> {value.ppexcludeTax}</td>
                      <td className="px-1 py-1">{value.totalAmountExcluedeTax}</td>
                      <td className="px-1 py-1 text-red-400"> <FaTimes size={15} onClick={() => { deleteByIndex(index); }} className='cursor-pointer' /> </td>

                    </tr>
                  })}


                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>

            <div className='flex flex-col items-end justify-end'>
              <div className='flex flex-col justify-end w-1/2   mt-5 '>

                <div className='flex justify-between'>
                  <h1 className='font-bold mx-2'>Net Total Amount</h1>
                  <h1 className=' mx-2'>{formData.netTotal}</h1>

                </div>
              </div>


              <div className='flex justify-end  items-end w-1/2  mt-5 '>
                <div className='flex justify-between w-full'>

                  <div className='flex flex-col'>
                    <h1 className='font-bold mx-2'>x Margin(%)</h1>
                    <input value={formData.margin} onChange={(e) => { setFormData({ ...formData, margin: e.target.value }) }} type='text' placeholder='Alert Quantity' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                  </div>
                  <div className='flex flex-col'>
                    <h1 className='font-bold mx-2'>Default Selling Price</h1>
                    <input value={formData.dfltSellingPrice} onChange={(e) => { setFormData({ ...formData, dfltSellingPrice: e.target.value }) }} type='text' placeholder='Alert Quantity' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
      <div className='flex items-end justify-end mt-5'>
        {/* <button onClick={() => { handleClick(); setIsAdSlngPrcGrp(true) }} className='bg-orange-500 text-lg px-2 py-2 items-center justify-center flex'>Save & Add Selling-Price-Group Prices</button>
        <button onClick={() => { handleClick(); setIsOpeningStock(true) }} className='bg-blue-500 text-lg px-2 py-2 text-white items-center justify-center flex'>Save & Add Opening Stock</button>
        <button onClick={() => { handleClick(); setIsAddOther(true) }} className='bg-red-500 text-lg px-2 py-2 text-white items-center justify-center flex'>Save & Add Another</button>

        
        <button onClick={() => {handleClick(); setIsSave(true)}}className='bg-green-500 text-lg px-2 py-2 items-center justify-center flex'>Save</button> */}
        <button onClick={() => {  setIsAdSlngPrcGrp(true);setIsOpeningStock(false);setIsAddOther(false); handleClick(); }} className='bg-orange-500 text-lg px-2 py-2 items-center justify-center flex'>Save & Add Selling-Price-Group Prices</button>
        <button onClick={() => {  setIsAdSlngPrcGrp(false);setIsOpeningStock(true);setIsAddOther(false); handleClick(); }} className='bg-blue-500 text-lg px-2 py-2 text-white items-center justify-center flex'>Save & Add Opening Stock</button>
        <button onClick={() => {  setIsAdSlngPrcGrp(false);setIsOpeningStock(false);setIsAddOther(true); handleClick(); }} className='bg-red-500 text-lg px-2 py-2 text-white items-center justify-center flex'>Save & Add Another</button>
        <button onClick={() => {  setIsAdSlngPrcGrp(false);setIsOpeningStock(false);setIsAddOther(false); handleClick(); }} className='bg-green-500 text-lg px-2 py-2 items-center justify-center flex'>Save</button>
      </div>
    </div>
  )
}

export default AddorEditProduct