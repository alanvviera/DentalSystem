import { FacebookFilled } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

export const ButtonIcon = ({ text, icon, onClick, href }) => {
    return (
        <Link 
        href={href}
        className='flex items-center bg-[#7899e0] p-2 border rounded-lg' onClick={()=>onClick()}>
            {
                icon
            }
            <p className='text-white'>{text}</p>
            
        </Link>
    )
}
