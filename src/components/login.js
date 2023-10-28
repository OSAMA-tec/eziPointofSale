import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import {BiSolidUser} from "react-icons/bi"
import {BsFillLockFill} from "react-icons/bs"
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'



const Login = () => {
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
            dir:"rtl"
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
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleLogin = async () => {
        try {
            // const response = await axios.post('http://localhost:8000/admin/auth/login', {
            //     userName,
            //     password,
            // });
    
            // if (response.status === 200) {
            //     const token = response.data.token;
            //     localStorage.setItem('token', token);
            //     console.log(response);
                Navigate("/home");
            // }
    
        } catch (error) {
            console.error(error.response.data);
            // Handle login error
        }
    };
    const handleChange =(e)=>{
        if(e.target.name ==="username"){
            setUserName(e.target.value)
        }else if(e.target.name ==="password"){
            setPassword(e.target.value)
        }else if(e.target.name ==="remember_me"){
            if(e.target.value === true){
                setRemember(true)
            }else{
                setRemember(false)
            }
        }
    }
    const langChange = (e) =>{
        if(e.target.name ==="lang"){
            setLang(e.target.value)
        }
    }
    useEffect(() => {
        i18next.changeLanguage(lang)
        if(lang === "ar"){
            document.body.dir = 'rtl' 
        }else{
          document.body.dir ='ltr'
        }
    }, [lang,])

   
    const { t } = useTranslation();
    return (
        <div className='grid md:grid-cols-8 sm:grid-cols-1 w-full'>
            <div className='md:flex flex-col hidden  col-span-3 items-center w-full relative  justify-center'>
                <div className='w-full h-screen'>
                    <img src='https://store.ezipos.pk/img/home-bg.jpg' alt='pos' className='w-full h-full  ' />
                    <div className='bg-black/50 absolute w-full h-full top-0 '></div>
                    <div className='absolute top-[50%]  w-full flex flex-col items-center justify-center '>
                        <div className='text-white  font-bold flex  text-3xl'>Ezi Point Of Sale</div>
                        <div className='text-blue-500 flex justify-center font-semibold text-2xl'>1# Inventory Management System</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:col-span-5 items-center w-full h-screen  bg-gray-800 p-5'>
                <div className='flex justify-between w-full '>
                    <select name="lang" value={lang} id='lang' onChange={langChange} className='w-[150] '>
                        {languages.map((val, index) => {
                            return <option key={index} value={val.code}> {val.name}</option>
                        })}
                    </select>
                    <div className='flex '>
                        <Link to="/business/Register" className='bg-red-400 text-white text-xl px-2 py-1 mx-2'> Not Yet Registered? Register Now</Link>
                        <button className=' text-white text-xl mx-2'> {t('pricing')}</button>
                    </div>
                </div>
                <div className='flex flex-col w-[70%]  mt-16 '>
                    <h1 className='text-white text-xl text-start'>{t('Login')}</h1>
                    <div className='relative flex mt-5'>
                        <input className='px-3 py-1 w-full' type='text' onChange={handleChange} value={userName} id='username' name='username' placeholder={`${t('Username')}`} />
                        <BiSolidUser size={20} className="absolute top-2 right-1" />
                    </div>
                    <div className='relative flex mt-5'>
                        <input className='px-3 py-1 w-full' type='password' onChange={handleChange} value={password} id='password' name='password' placeholder={`${t('Password')}`} />
                        <BsFillLockFill size={20} className="absolute top-2 right-1" />
                    </div>
                    <div className='flex mt-5'>
                    <input type='checkbox' className='' id='remember-me' name='remember-me' value={remember} /> 
                    <h1 className='text-white mx-3 text-xl'>{t('remember_me')}</h1>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <button type='submit' className='bg-blue-400 text-white text-xl px-2 py-1 mx-2' onClick={handleLogin}> {t('Login')}</button>
                        <button className=' text-white text-xl mx-2'> {t('forgot_ur_password')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login