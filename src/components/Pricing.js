import React, { useEffect, useState } from 'react'

import cookies from "js-cookie"
import PekagesCard from './PekagesCard';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
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
            code: "ur",
            name: "Urdu",
            country_code: "pk",
            dir: "rtl"
        },
        {
            code: "vi",
            name: "Vietnam",
            country_code: "vi"
        }

    ]
    const [lang, setLang] = useState('en')
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    const langChange = (e) => {
        if (e.target.name === "lang") {
            setLang(e.target.value)
        }
    }
    useEffect(() => {
        i18next.changeLanguage(lang)
        document.body.dir = currentLanguage.dir || "ltr"
    }, [lang, currentLanguage])

    const { t } = useTranslation();
    return (
        <div className='bg-gray-800 items-center flex flex-col w-full min-h-screen p-5 pb-10'>
            <div className='flex justify-between w-full'>
                <select name="lang" value={lang} id='lang' onChange={langChange} className='w-[150] '>
                    {languages.map((val, index) => {
                        return <option key={index} value={val.code}> {val.name}</option>
                    })}
                </select>
                <div className='flex '>
                    <button className='bg-red-400 text-white text-xl px-2 py-1 mx-2'> {t('register_question')}</button>
                    <button className=' text-white text-xl mx-2'> {t('pricing')}</button>
                </div>
            </div>
            <div className='container  mt-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-white text-3xl font-semibold'>Ezi Point of Sale</h1>
                    <hr className='text-white w-full h-[2px]'/>
                </div>
                <div className='mt-5 bg-white w-full rounded-lg border-t-2 border-gray-300 min-h-screen'>
                <h1 className=' text-xl text-start p-10'>{t('Packages')}</h1>
                    <PekagesCard />
                </div>
            </div>

        </div>
    )
}

export default Pricing