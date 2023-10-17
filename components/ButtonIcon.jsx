import { FacebookFilled } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

/**
 * Button with an icon and text.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.text=""] - The text to display in the button.
 * @param {JSX.Element} props.icon - The icon element to display in the button.
 * @param {Function} props.onClick - The function to execute when the button is clicked.
 * @param {string} [props.href="#"] - The URL to link to when the button is clicked.
 * @returns {JSX.Element} JSX element representing the icon button.
 */

export const ButtonIcon = ({ text="", icon, onClick, href = "#" }) => {
    return (
        <Link
            href={href}
            onClick={() => onClick()}>
            <div className='flex items-center bg-[#7899e0] p-2 border rounded-lg'>
                {
                    icon
                }
                <p className='text-white'>{text}</p>
            </div>
        </Link>
    )
}
