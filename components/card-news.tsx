import React from 'react'

import { Profile2User } from 'iconsax-react'
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri"

const news = [
    {
        id: 1,
        icon: <Profile2User size={20} />,
        text: 'Active Users',
        count: '14,7 M',
        percentage: '32%',
        trend: <RiArrowUpSFill color='#4EEA7A' size={24} />,
        textcolor: 'text-[#2F70F2]',

    },
    {
        id: 2,
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3333 9.16668C18.325 6.57168 18.2433 5.19584 17.3567 4.31001C16.3808 3.33334 14.8092 3.33334 11.6667 3.33334H8.33334C5.19084 3.33334 3.61917 3.33334 2.64334 4.31001C1.66667 5.28584 1.66667 6.85751 1.66667 10C1.66667 13.1425 1.66667 14.7142 2.64334 15.69C3.61917 16.6667 5.19084 16.6667 8.33334 16.6667H9.58334" stroke="#876AFE" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12.9167 11.6667V16.6667M12.9167 16.6667L14.5833 15M12.9167 16.6667L11.25 15M16.6667 16.6667V11.6667M16.6667 11.6667L18.3333 13.3334M16.6667 11.6667L15 13.3334" stroke="#876AFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.33334 13.3333H5M1.66667 8.33334H18.3333" stroke="#876AFE" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        ,
        text: 'Transactions',
        count: '$ 1.234.10',
        percentage: '32%',
        trend: <RiArrowDownSFill />,
        textcolor: 'text-[#876AFE]',

    },
    {
        id: 3,
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66667 10C1.66667 6.85751 1.66667 5.28584 2.64333 4.31001C3.61917 3.33334 5.19083 3.33334 8.33333 3.33334H11.6667C14.8092 3.33334 16.3808 3.33334 17.3567 4.31001C18.3333 5.28584 18.3333 6.85751 18.3333 10C18.3333 13.1425 18.3333 14.7142 17.3567 15.69C16.3808 16.6667 14.8092 16.6667 11.6667 16.6667H8.33333C5.19083 16.6667 3.61917 16.6667 2.64333 15.69C1.66667 14.7142 1.66667 13.1425 1.66667 10Z" stroke="#FFBC02" stroke-width="1.5" />
            <path d="M8.33333 13.75H5M6.66667 11.25H5M1.66667 8.33334H18.3333" stroke="#FFBC02" stroke-width="1.5" stroke-linecap="round" />
            <path d="M11.6667 12.5C11.6667 11.7142 11.6667 11.3217 11.9108 11.0775C12.155 10.8333 12.5475 10.8333 13.3333 10.8333C14.1192 10.8333 14.5117 10.8333 14.7558 11.0775C15 11.3217 15 11.7142 15 12.5C15 13.2858 15 13.6783 14.7558 13.9225C14.5117 14.1667 14.1192 14.1667 13.3333 14.1667C12.5475 14.1667 12.155 14.1667 11.9108 13.9225C11.6667 13.6783 11.6667 13.2858 11.6667 12.5Z" stroke="#FFBC02" stroke-width="1.5" />
        </svg>
        ,
        text: 'Cards Issued',
        count: '3.442',
        percentage: '32%',
        trend: <RiArrowUpSFill color='#4EEA7A' size={24} />,
        textcolor: 'text-[#FFBC02]',

    },
]
const CardNews = () => {
    return (
        <section className='flex items-center gap-6'>
            {
                news.map(({ id, icon, text, trend, textcolor, count, percentage }) => (
                    <div className='bg-white rounded-xl py-5 px-5 flex flex-col gap-[14px]'>
                        <div className={`gap-2 flex items-center ${textcolor}`}>
                            {icon}
                            <p className={`${textcolor}`}>{text}</p>
                        </div>
                        <div className='flex gap-[6px] items-center'>
                            <h3 className='text-dark-grey text-[28px] font-semibold leading-9 tracking-[-1.12px]'>{count}</h3>
                            <div className='flex gap-[2px] items-center'>
                                {trend}
                                <p>{percentage}</p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}

export default CardNews
