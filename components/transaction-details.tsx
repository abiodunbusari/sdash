import React from 'react'

import { Avatar } from '@mantine/core'

const data = [
    {
        id: 1,
        icon: '',
        text: 'Spotify App',
        p: 'June 19 2023 at 16.42',
        price: '-$12.7'
    },
    {
        id: 2,
        icon: '',
        text: 'Spotify App',
        p: 'June 19 2023 at 16.42',
        price: '-$12.7'
    },
    {
        id: 3,
        icon: '',
        text: 'Spotify App',
        p: 'June 19 2023 at 16.42',
        price: '-$12.7'
    },
]
const TransactionDetails = () => {
    return (
        <section className='p-5 rounded-xl bg-white flex flex-col gap-[18px]'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <Avatar src={'/transfer.svg'} size={20} />
                    <h3 className='text-dark-grey text-base font-medium leading-6 tracking-[-0.48px]'>Transaction Details</h3>
                </div>
                <div className='w-full bg-platinum h-[1px]' />

            </div>
            <div className='flex flex-col gap-5'>
                {data.map(({ id, icon, p, text, price }) => (
                    <div key={id} className='justify-between item-center flex'>
                        <div className='flex gap-3 items-center'>
                            <Avatar src={icon} />
                            <div className='flex flex-col'>
                                <h6 className='text-dark-grey text-xs font-medium leading-[20px] tracking-[-0.36px]'>{text}</h6>
                                <p className='text-silver text-[9px] leading-4'>{p}</p>
                            </div>
                        </div>
                        <p className='text-[#D62C2C] text-[10px] font-medium leading-4 tracking-[0.2px]'>{price}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TransactionDetails
