import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiSolidUser } from 'react-icons/bi'
import { BsFillLockFill, BsInfoLg } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
const OwnerForm = ({formData, setFormData, psstatus}) => {
    const {t} = useTranslation()
  return (
        <div className=' flex flex-col'>
            <h1 className='flex justify-start text-white text-lg'> {t('Owner')} {t('infro')}:</h1>
            
            <div className='grid gap-10 grid-cols-1 md:grid-cols-3 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('Prefix')}:</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.prefix} onChange={ (e)=>setFormData({...formData,  prefix: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={t('Prefix')} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-sm text-start mb-1 flex'> {t('fst_nm')}:* {psstatus===false && formData.first_name.length === 0 ?  <h1 className="text-red-500 text-sm">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.first_name} onChange={ (e)=>setFormData({...formData,  first_name: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={t('fst_nm')} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('lst_nm')}:</h2>
                    <div className='flex'>
                        <BsInfoLg size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.last_name} onChange={ (e)=>setFormData({...formData,  last_name: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={t('lst_nm')} />
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1 flex'> {t('Username')}:* {psstatus===false && formData.username.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.username} onChange={ (e)=>setFormData({...formData,  username: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={t('Username')} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('eml')}:</h2>
                    <div className='flex'>
                        <MdEmail size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.email} onChange={ (e)=>setFormData({...formData,  email: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='email'   placeholder={t('eml')}/>
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1 flex'> {t('Password')}:* {psstatus===false && formData.password.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BsFillLockFill size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.password} onChange={ (e)=>setFormData({...formData,  password: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={t('Password')} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1 flex'> {t('confrm_pswrd')}:* {psstatus===false && formData.c_password.length === 0 ?  <h1 className="text-red-500">Required Field </h1> : ""}</h2>
                    <div className='flex'>
                        <BsFillLockFill size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input value={formData.c_password} onChange={ (e)=>setFormData({...formData,  c_password: e.target.value})} className='px-3 py-1 focus:outline-none w-full' type='text'   placeholder={t('confrm_pswrd')}/>
                        
                    </div>
                </div>   
            </div>
            
           
            
        </div>
    
    
  )
}
export default OwnerForm