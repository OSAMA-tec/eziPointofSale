import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiSolidBusiness, BiSolidTime } from "react-icons/bi"
import {AiFillCalendar, AiTwotoneFolderOpen, AiTwotonePhone} from "react-icons/ai"
import {GrCurrency} from "react-icons/gr"
import {BsGlobe} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import timeZone from '../timezones'
import currencyData from '../currency'
const BussinessForm = ({formData,setFormData,frmstatus}) => {
    const { t } = useTranslation()
    return (
        <div className=' flex flex-col'>
            <h1 className='flex justify-start text-white text-lg'> {t('bzns_dtls')}</h1>
            <div className=' grid grid-cols-1 flex-col mt-2'>
                <h2 className='text-white text-start flex mb-1'> {t('bzns_nm')}:*  {frmstatus===false && formData.business_name.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                <div className='flex'>
                    <BiSolidBusiness size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                    <input  value={formData.business_name} onChange={ (e)=>setFormData({...formData,  business_name: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('bzns_nm')}`} />
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('strt_dt')}:</h2>
                    <div className='flex'>
                        <AiFillCalendar size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input  value={formData.start_date} onChange={ (e)=>setFormData({...formData,  start_date: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='date'  placeholder={`${t('strt_dt')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('Currency')}:*  {frmstatus===false && formData.currency.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <GrCurrency size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select  className='w-full' value={formData.currency} onChange={ (e)=>setFormData({...formData,  currency: e.target.value})}>
                            <option value={""}>{t('slct_crncy')}</option>
                            {currencyData.map((val,index)=>{
                                  return  <option key={index} value={val}>{val}</option>
                              
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('upld_lgo')}:</h2>
                    <div className='flex'>
                    {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
                        <input  className='px-3 py-1 focus:outline-none w-[60%]' type='file' accept='image/*'  />
                        <div className='flex bg-blue-600 text-white w-[40%] items-center justify-center'> 
                        <AiTwotoneFolderOpen size={32}   />
                        {t('brzr')}
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('Website')}:</h2>
                    <div className='flex'>
                        <BsGlobe size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.website} onChange={ (e)=>setFormData({...formData,  website: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('Website')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('bzns_cntct_nmbr')}:</h2>
                    <div className='flex'>
                        <AiTwotonePhone size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.contact_number} onChange={ (e)=>setFormData({...formData,  contact_number: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('bzns_cntct_nmbr')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('altrnt_cntct_nmbr')}:</h2>
                    <div className='flex'>
                        <AiTwotonePhone size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.altr_contact_number} onChange={ (e)=>setFormData({...formData,  altr_contact_number: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('altrnt_cntct_nmbr')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('cntry')}:*  {frmstatus===false && formData.country.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BsGlobe size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input  value={formData.country} onChange={ (e)=>setFormData({...formData,  country: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('cntry')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('state')}:*  {frmstatus===false && formData.state.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <MdLocationOn size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input  value={formData.state} onChange={ (e)=>setFormData({...formData,  state: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('state')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('cty')}:*  {frmstatus===false && formData.city.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <MdLocationOn size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input  value={formData.city} onChange={ (e)=>setFormData({...formData,  city: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('cty')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('zp_cd')}:*  {frmstatus===false && formData.zip_code.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <MdLocationOn size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input  value={formData.zip_code} onChange={ (e)=>setFormData({...formData,  zip_code: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('zp_cd')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('lndmrk')}:*  {frmstatus===false && formData.landmark.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <MdLocationOn size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input  value={formData.landmark} onChange={ (e)=>setFormData({...formData,  landmark: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('lndmrk')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start flex mb-1'> {t('tm_zn')}:*  {frmstatus===false && formData.time_zone.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BiSolidTime size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select  className='w-full' value={formData.time_zone} onChange={ (e)=>setFormData({...formData,  time_zone: e.target.value})}>
                            <option value={""}>Select Time Zone</option>
                            {timeZone.map((val,index)=>{
                                return  <option key={index} value={val}>{val}</option>
                            })}
                            
                            
                        </select>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default BussinessForm