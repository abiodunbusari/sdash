import React from 'react'

import Wallet from './icons/wallet'
import Visa from './icons/visa'
import MasterCard from './icons/master-card'
import { useIntl } from 'react-intl'

const data = [
    {
        id: 1,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: <Visa />
    },
    {
        id: 2,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: <MasterCard />
    },
    {
        id: 3,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: <Visa />
    },
    {
        id: 3,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: <Visa />
    },
    {
        id: 3,
        card: '',
        text: '3419 Debit',
        p: 'Card',
        image: <Visa />
    },
]

const QuickTransfer = () => {
    const intl = useIntl();
    const transfer = intl.messages["page.home.transfer"] as string
    return (
        <article className='p-5 rounded-xl bg-white dark:bg-[#191929]  flex flex-col gap-[18px] overflow-auto'>
            <div className='flex flex-col gap-4 '>
                <div className='flex items-center gap-2'>
                    <Wallet />
                    <h3 className='text-dark-grey dark:text-white text-base font-medium leading-6 tracking-[-0.48px]'>{transfer}</h3>
                </div>
                <div className='w-full bg-platinum h-[1px]' />
            </div>
            <ul className='flex overflow-auto no-scrollbar gap-[14px] '>
                {
                    data.map(({ p, text, id, image }) => (
                        <li key={id} className='flex border border-[#DFDFDF] rounded-[6px] p-3 gap-3 items-center '>
                            {image}
                            <div className='flex flex-col'>
                                <p className='text-dark-grey dark:text-white text-xs leading-[14px] tracking-[-0.36px] whitespace-nowrap'>{text}</p>
                                <p className='text-dark-grey dark:text-white text-xs leading-[14px] tracking-[-0.36px]'>{p}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default QuickTransfer
