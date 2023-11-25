import React from 'react'

import { Avatar } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { builder } from '@/api/builder'
import { Transanction } from './icons'
import clsx from 'clsx'

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

    const { data: transactionDetails } = useQuery({
        queryFn: () => builder.use().transactions.latest.fetch(),
        queryKey: builder.transactions.latest.fetch.get(),
        select: (data) => data?.data?.data
    })

    function formatTimestamp(timestamp: string | number | Date) {
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' }; const date = new Date(timestamp);
        return date.toLocaleString('en-US', options);
    }

    return (
        <section className='p-5 rounded-xl bg-white dark:bg-[#191929] flex flex-col gap-[18px]'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <Transanction />
                    <h3 className='text-dark-grey dark:text-white text-base font-medium leading-6 tracking-[-0.48px]'>Transaction Details</h3>
                </div>
                <div className='w-full bg-platinum h-[1px]' />

            </div>
            <div className='flex flex-col gap-5'>
                {transactionDetails?.map((item, idx) => (
                    <div key={idx} className='justify-between items-center flex'>
                        <div className='flex gap-3 items-center'>
                            <Avatar src={`${item?.charged_by?.logo}`} />
                            <div className='flex flex-col'>
                                <h6 className='text-dark-grey dark:text-white text-xs font-medium leading-[20px] tracking-[-0.36px]'>{item?.charged_by?.company}</h6>
                                <p className='text-silver text-[9px] leading-4'>{formatTimestamp(item?.created_at)}</p>
                            </div>
                        </div>
                        <p className={clsx('text-[10px] font-medium leading-4 tracking-[0.2px]', item?.charge?.type === 'credit' ? 'text-[#4EEA7A]' : 'text-[#D62C2C] ')}>{
                            item?.charge?.type === 'credit' ? '+' : '-'}
                            {item?.charge?.amount}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TransactionDetails
