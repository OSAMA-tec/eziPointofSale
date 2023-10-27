import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import BussinessForm from './BussinessForm';
import BussinessSetting from './BussinessSetting';
import OwnerForm from './OwnerForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Registration = () => {
    const Navigate = useNavigate ();

    const languages = [
        {
            code: "en",
            name: "English",
            country_code: "gb"
        },
        {
            code: "es",
            name: "Spanish-Espanol",
            country_code: "es"
        },
        {
            code: "fr",
            name: "French-Francias",
            country_code: "fr"
        },
        {
            code: "ar",
            name: "العربية",
            country_code: "ar",
            dir: "rtl"
        },
        {
            code: "cn",
            name: "Chinees",
            country_code: "gb"
        },
        {
            code: "de",
            name: "Germany",
            country_code: "de"
        },
        {
            code: "hi",
            name: "Hindi",
            country_code: "hi"
        },
        {
            code: "id",
            name: "Indoneshian",
            country_code: "id"
        },
        {
            code: "lo",
            name: "Lao",
            country_code: "gb"
        },
        {
            code: "nl",
            name: "Dutch",
            country_code: "nl"
        },
        {
            code: "ps",
            name: "Pashto",
            country_code: "ps"
        },
        {
            code: "ro",
            name: "Romanian",
            country_code: "ro"
        },
        {
            code: "sq",
            name: "Albania",
            country_code: "sq"
        },
        {
            code: "tr",
            name: "Turkeye",
            country_code: "gb"
        },
        {
            code: "vi",
            name: "Vietnam",
            country_code: "vi"
        }
    ]
    const [lang, setLang] = useState('en')
    
    const [page, setPage] = useState(1)
    const [formData, setFormData] = useState({
        business_name :"",
        start_date:"",
        currency:"",
        img_data:"",
        website:"",
        contact_number:"",
        altr_contact_number:"",
        country:"",
        state:"",
        city:"",
        zip_code:"",
        landmark:"",
        time_zone:"",
        tax_1_name:"",
        tax_1_number:"",
        tax_2_name:"",
        tax_2_number:"",
        financial_ysm:"",
        stck_ac_mthd:"",
        prefix:"",
        first_name:"",
        last_name:"",
        username:"",
        email:"",
        password:"",
        c_password:""
    })
    const finalFormData = {
        businessName : formData.business_name,
        startDate:formData.start_date,
        currency:formData.currency,
        logo:formData.img_data,
        website:formData.website,
        contactNumber:formData.contact_number,
        alternateContactNumber:formData.altr_contact_number,
        country:formData.country,
        state:formData.state,
        city:formData.city,
        zipCode:formData.zip_code,
        landmark:formData.landmark,
        timeZone:formData.time_zone,
        tax1Name:formData.tax_1_name,
        tax1No:formData.tax_1_number,
        tax2Name:formData.tax_2_name,
        tax2No:formData.tax_2_number,
        financialYearStartMonth:formData.financial_ysm,
        stockAccountingMethod:formData.stck_ac_mthd,
        prefix:formData.prefix,
        firstName:formData.first_name,
        lastName:formData.last_name,
        userName:formData.username,
        email:formData.email,
        password:formData.password,
        cpassword:formData.c_password
    }
    const [frmstatus, setFrmstatus] = useState(true)
    const [bs_status, setBs_status] = useState(true)
const [psstatus, setPsstatus] = useState(true)
    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const registerAdmin = async () => {

        try {
            // const token = localStorage.getItem('token');
            console.log(finalFormData)
            const response = await axios.post(`http://localhost:8000/admin/auth/register`,finalFormData);
            console.log(response)
            //navigate to login
        } catch (error) {
            console.error('Error Registering Admin:', error);
        }
    };
    const handleSubmit= () =>{
        
        if(formData.first_name.length ===0 ||
            formData.username.length ===0 ||
            formData.password.length ===0 ||
            formData.c_password.length===0){
              setPsstatus(false)
            }else{
                registerAdmin()
                console.log(formData)
            }
        
    }
    const handleClick = () => {
        if (page < 3) {
            if(page===1){
              if(formData.business_name.length ===0 ||
                formData.currency.length ===0 || 
                formData.country.length ===0 || 
                formData.city.length ===0 || 
                formData.state.length ===0 ||
                formData.zip_code.length===0 ||
                formData.time_zone.length ===0 ||
                formData.landmark.length === 0){
                    setFrmstatus(false)
                }else{
                    setPage(page + 1)
                }
                
            }
            if(page===2){
                if(formData.financial_ysm.length ===0 ||
                  formData.stck_ac_mthd.length ===0 ){
                    setBs_status(false)
                  }else{
                      setPage(page + 1)
                  }
                  
              }
            
        }
        
    }
    const langChange = (e) => {
        if (e.target.name === "lang") {
            setLang(e.target.value)
        }
    }
  const getFormData = () => {
        if (page === 1) {
           return <BussinessForm  formData={formData} setFormData={setFormData}  frmstatus ={frmstatus}/>
        } else if (page === 2 ) {
           return <BussinessSetting formData={formData} setFormData={setFormData} bs_status={bs_status}/>
        } else {
           return <OwnerForm formData={formData} setFormData={setFormData} psstatus={psstatus}/>
        }
    }
    useEffect(() => {
        i18next.changeLanguage(lang)
        if (lang === "ar") {
            document.body.dir = 'rtl'
        } else {
            document.body.dir = 'ltr'
        }
    }, [lang])
  
    // const pages =["Bussiness","Bussiness Setting","Owner"]
    const { t } = useTranslation();
    return (
        <div className='grid md:grid-cols-8 sm:grid-cols-1 min-h-screen w-full'>
            <div className='md:flex flex-col hidden  col-span-3 min-h-screen items-center w-full relative  justify-center'>
                <div className='w-full h-full'>
                    <img src='https://store.ezipos.pk/img/home-bg.jpg' alt='pos' className='w-full  h-full' />
                    <div className='bg-black/50 absolute w-full h-full top-0 '></div>
                    <div className='absolute top-[50%]  w-full flex flex-col items-center justify-center '>
                        <div className='text-white  font-bold flex  text-3xl'>Ezi Point Of Sale</div>
                        <div className='text-blue-500 flex justify-center font-semibold text-2xl'>1# Inventory Management System</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:col-span-5 items-center w-full   bg-gray-800 p-5'>
                <div className='flex justify-between w-full '>
                    <select name="lang" value={lang} id='lang' onChange={langChange} className='w-[150] '>
                        {languages.map((val, index) => {
                            return <option key={index} value={val.code}> {val.name}</option>
                        })}
                    </select>
                    <div className='flex '>
                        <button className=' text-white text-xl   mx-2'> {t('all_ready_registered')}</button>
                        <Link to="/login" className=' text-white text-xl mx-2'> Sign In</Link>
                    </div>
                </div>
                <div className='flex flex-col w-[80%]  mt-16 '>
                    <h1 className='text-white text-xl text-start'>{t('rgstr_d_gt_strd')}</h1>
                    <div className='header flex justify-between'>
                        <div className={`min-h-[70px]  w-[200px] ${page === 1 ? "bg-blue-500 text-white" : "bg-white text-gray-500"} mt-2 rounded-xl flex items-center justify-center`}>
                            <h1 className='text-xl  font-bold'> 1. {t('bussiness')}</h1>
                        </div>
                        <div className={`min-h-[70px]  w-[200px] ${page === 2 ? "bg-blue-500 text-white" : "bg-white text-gray-500"} mt-2 rounded-xl flex items-center justify-center`}>
                            <h1 className='text-lg  font-bold'> 2. {t('bzns_setting')}</h1>
                        </div>
                        <div className={`min-h-[70px]  w-[200px] ${page === 3 ? "bg-blue-500 text-white" : "bg-white text-gray-500"} mt-2 rounded-xl flex items-center justify-center`}>
                            <h1 className='text-xl  font-bold'> 3. {t('Owner')}</h1>
                        </div>
                    </div>
                    <div className='body mt-5 p-5 flex flex-col bg-gray-700 '>
                        <form>
                        {getFormData()}

                        </form>
                        
                    
                    </div>
                    <div className='footer flex justify-end mt-10'>
                        <button disabled={page === 1} className={` ${page !== 1 ? "bg-blue-400 text-white " : "bg-white text-gray-400"} rounded-md  text-xl px-2 py-1 mx-2`} onClick={handlePrevious}> {t('prvs')}</button>
                        {page !== 3 && <button className=' bg-blue-400 text-white rounded-md   text-xl px-2 py-1 mx-2' onClick={handleClick}>
                            {t('next')}
                        </button>}
                    {page === 3 && <button type='submit' className=' bg-blue-400 text-white rounded-md   text-xl px-2 py-1 mx-2' onClick={handleSubmit}>
                        {t('rgst')}
                    </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration