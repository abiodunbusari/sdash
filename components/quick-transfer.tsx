import { Avatar } from '@mantine/core'
import React from 'react'

const data = [
    {
        id: 1,
        card: '',
        text: '3419 Debit',
        p: 'Card'
    },
    {
        id: 2,
        card: '',
        text: '3419 Debit',
        p: 'Card'
    },
    {
        id: 3,
        card: '',
        text: '3419 Debit',
        p: 'Card'
    },
]

const QuickTransfer = () => {
    return (
        <section className='p-5 rounded-xl bg-white flex flex-col gap-[18px]'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <Avatar src={'/wallet.svg'} size={20} />
                    <h3 className='text-dark-grey text-base font-medium leading-6 tracking-[-0.48px]'>Quick Transfer</h3>
                </div>
                <div className='w-full bg-platinum h-[1px]' />
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-[14px] '>
                {
                    data.map(({ p, text, card, id }) => (
                        <div key={id} className='flex border border-[#DFDFDF] rounded-[6px] p-3 gap-3 items-center '>
                            <Avatar size={20} />
                            <div className='flex flex-col'>
                                <p className='text-dark-grey text-xs leading-[14px] tracking-[-0.36px] whitespace-nowrap'>{text}</p>
                                <p className='text-dark-grey text-xs leading-[14px] tracking-[-0.36px]'>{p}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default QuickTransfer
