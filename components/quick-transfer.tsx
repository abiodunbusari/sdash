import { Avatar } from '@mantine/core'
import React from 'react'
import Wallet from './icons/wallet'

const data = [
    {
        id: 1,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: '/visa.svg'
    },
    {
        id: 2,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: '/mastercard.svg'
    },
    {
        id: 3,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: '/visa.svg'
    },
]

const QuickTransfer = () => {
    return (
        <section className='p-5 rounded-xl bg-white dark:bg-[#191929]  flex flex-col gap-[18px]'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <Wallet />
                    <h3 className='text-dark-grey dark:text-white text-base font-medium leading-6 tracking-[-0.48px]'>Quick Transfer</h3>
                </div>
                <div className='w-full bg-platinum h-[1px]' />
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-[14px] '>
                {
                    data.map(({ p, text, card, id, image }) => (
                        <div key={id} className='flex border border-[#DFDFDF] rounded-[6px] p-3 gap-3 items-center '>
                            <div>
                                <Avatar size='100%' src={`${image}`} />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-dark-grey dark:text-white text-xs leading-[14px] tracking-[-0.36px] whitespace-nowrap'>{text}</p>
                                <p className='text-dark-grey dark:text-white text-xs leading-[14px] tracking-[-0.36px]'>{p}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default QuickTransfer
