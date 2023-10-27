import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsCalculatorFill, BsFillCalendarFill, BsInfoLg } from 'react-icons/bs'
const BussinessSetting = ({formData,setFormData,bs_status}) => {
    const months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"]
    const {t} = useTranslation()
  return (
    <div className='flex flex-col'>
        <div className=' flex flex-col'>
            <h1 className='flex justify-start text-white text-lg'> {t('bzns_setting')}</h1>
            
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 1 {t('nm')}:</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.tax_1_name} onChange={ (e)=>setFormData({...formData,  tax_1_name: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`GST/ VAT/ ${t('othr')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 1 {t('nmr')}:</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.tax_1_number} onChange={ (e)=>setFormData({...formData,  tax_1_number: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'   />
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 2 {t('nm')}:</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.tax_2_name} onChange={ (e)=>setFormData({...formData,  tax_2_name: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`GST/ VAT/ ${t('othr')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 2 {t('nmr')}:</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.tax_2_number} onChange={ (e)=>setFormData({...formData,  tax_2_number: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'   />
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1 '> {t('fnncial_yr_strt_mnt')}:* {bs_status===false && formData.financial_ysm.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BsFillCalendarFill size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select value={formData.financial_ysm} onChange={ (e)=>setFormData({...formData,  financial_ysm: e.target.value})} className='w-full'>
                            {months.map((val,index)=>{
                               return <option key={val} value={t(`${val}`)}>{val}</option>
                             
                            })}
                        </select>
                        </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1 '> {t('stk_acntng_mtd')}:* {bs_status===false && formData.stck_ac_mthd.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BsCalculatorFill size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select value={formData.stck_ac_mthd} onChange={ (e)=>setFormData({...formData,  stck_ac_mthd: e.target.value})} className='w-full'>
                            <option value={""}>Select Method</option>
                            
                            <option value={t('fifo')}>{t('fifo')}</option>
                            <option value={t('lifo')}>{t('lifo')}</option>
                        </select>
                    </div>
                </div>
            </div>
           
            
        </div>
    </div>
  )
}
export default BussinessSetting