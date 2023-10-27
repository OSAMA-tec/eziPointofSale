import React from 'react'
import { motion } from 'framer-motion'
import { FcCheckmark } from 'react-icons/fc'
import { useTranslation } from 'react-i18next';

const PekagesCard = () => {
    // const languages = [
    //     {
    //         code: "en",
    //         name: "English",
    //         country_code: "gb"
    //     },
    //     {
    //         code: "es",
    //         name: "Spanish-Espanol",
    //         country_code: "es"
    //     },
    //     {
    //         code: "fr",
    //         name: "French-Francias",
    //         country_code: "fr"
    //     },
    //     {
    //         code: "ar",
    //         name: "العربية",
    //         country_code: "ar",
    //         dir: "rtl"
    //     },
    //     {
    //         code: "cn",
    //         name: "Chinees",
    //         country_code: "gb"
    //     },
    //     {
    //         code: "de",
    //         name: "Germany",
    //         country_code: "de"
    //     },
    //     {
    //         code: "hi",
    //         name: "Hindi",
    //         country_code: "hi"
    //     },
    //     {
    //         code: "id",
    //         name: "Indoneshian",
    //         country_code: "id"
    //     },

    //     {
    //         code: "lo",
    //         name: "Lao",
    //         country_code: "gb"
    //     },
    //     {
    //         code: "nl",
    //         name: "Dutch",
    //         country_code: "nl"
    //     },
    //     {
    //         code: "ps",
    //         name: "Pashto",
    //         country_code: "ps"
    //     },
    //     {
    //         code: "ro",
    //         name: "Romanian",
    //         country_code: "ro"
    //     },
    //     {
    //         code: "sq",
    //         name: "Albania",
    //         country_code: "sq"
    //     },
    //     {
    //         code: "tr",
    //         name: "Turkeye",
    //         country_code: "gb"
    //     },
    //     {
    //         code: "ur",
    //         name: "Urdu",
    //         country_code: "pk",
    //         dir: "rtl"
    //     },
    //     {
    //         code: "vi",
    //         name: "Vietnam",
    //         country_code: "vi"
    //     }

    // ]
    
    const { t } = useTranslation();
    
    
    return (
        <div>
            <div className=' mt-2 '>
                <div className='grid grid-cols-1 gap-[10px] pb-[100px] sm:flex-col md:grid-cols-3  mx-[5%]  '>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className='flex flex-col h-[540px] shadow-xl border-t-2 border-green-400 md:w-[350px] shadow-gray-300 rounded-xl'>
                        <div className='h-[100px] px-5    flex flex-col items-center justify-center'>
                            <h1 className=' text-xl '>Standard</h1>
                            <hr className=' w-full h-[2px] mt-2' />

                        </div>
                        <div className=' px-5 flex flex-col items-center rounded-b-3xl justify-center'>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />1 {t('bussiness_location')} </h1>
                            <h1 className='text-gray-500 text-md mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />3 {t('Users')} </h1>
                            <h1 className='text-gray-500 text-md mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />500 {t('Products')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />3000 {t('Invoices')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />{t('Essential_module')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />7 {t('Trial_days')} </h1>
                            
                            <h1 className='text-4xl mt-10 py-5 flex'>₨ 1,500.00 <span className='text-xl mt-3 text-gray-500'>/ 1 {t('months')}</span></h1>
                            
                        </div>
                        <div className='w-full h-[100px] mt-1 bg-gray-400 flex flex-col items-center justify-center'>
                                <button className='w-[70%] bg-green-400 text-xl py-2 text-white'>{t('register_subscribe')}</button>
                                <h1 className='text-sm mt-1'>For Small Business</h1>
                            </div>
                    </motion.div>

                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className='flex flex-col h-[500px] shadow-xl border-t-2 border-green-400 md:w-[350px] shadow-gray-300 rounded-xl'>
                        <div className='h-[100px] px-5    flex flex-col items-center justify-center'>
                            <h1 className=' text-xl '>Executive</h1>
                            <hr className=' w-full h-[2px] mt-2' />

                        </div>
                        <div className=' px-5 flex flex-col items-center rounded-b-3xl justify-center'>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />3 {t('bussiness_location')} </h1>
                            <h1 className='text-gray-500 text-md mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />5 {t('Users')} </h1>
                            <h1 className='text-gray-500 text-md mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />5000 {t('Products')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />10000 {t('Invoices')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />7 {t('Trial_days')} </h1>
                            
                            <h1 className='text-4xl mt-10 py-5 flex'>₨ 3,000.00 <span className='text-xl mt-3 text-gray-500'>/ 1 {t('months')}</span></h1>
                        </div>
                        <div className='w-full h-[100px] bg-gray-400 flex flex-col  items-center justify-center'>
                                <button className='w-[70%] bg-green-400 text-xl py-2 text-white'>{t('register_subscribe')}</button>
                                <h1 className='text-sm mt-1'>Executive Package</h1>
                            </div>
                    </motion.div>


                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className='flex flex-col h-[680px] shadow-xl border-t-2 border-green-400 md:w-[350px] shadow-gray-300 rounded-xl'>
                        <div className='h-[100px] px-5    flex flex-col items-center justify-center'>
                            <h1 className=' text-xl '>Diamond</h1>
                            <hr className=' w-full h-[2px] mt-2' />

                        </div>
                        <div className=' px-5 flex flex-col items-center rounded-b-3xl justify-center'>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />10 {t('bussiness_location')} </h1>
                            <h1 className='text-gray-500 text-md mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />10 {t('Users')} </h1>
                            <h1 className='text-gray-500 text-md mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> {t('unlimited_products')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />15000 {t('Invoices')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />{t('Essential_module')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> {t('manufacturing_module')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />{t('Product_catalouge_module')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> {t('Project_Module')} </h1>
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> {t('Woocommerce_Module')} </h1>
                            
                            <h1 className='text-gray-500 text-md mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' />7 {t('Trial_days')} </h1>
                            
                            <h1 className='text-4xl mt-10 py-5 flex'>₨ 15,000.00 <span className='text-xl mt-3 text-gray-500'>/ 1 {t('months')}</span></h1>
                            
                        </div>
                        <div className='w-full h-[100px] bg-gray-400 flex flex-col items-center justify-center'>
                                <button className='w-[70%] bg-green-400 text-xl py-2 text-white'>{t('register_subscribe')}</button>
                                <h1 className='text-sm'>Diamond Package</h1>
                            </div>
                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default PekagesCard