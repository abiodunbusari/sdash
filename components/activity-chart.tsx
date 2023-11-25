import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { WeeklyBarchart } from './bar-chart'
import { MonthlyBarchart } from './monthly-barchart'
import { Log } from './icons'

export const ActivityChart = () => {
    return (
        <section className='py-7 px-6 flex flex-col gap-4 bg-white dark:bg-[#191929] rounded-xl'>
            <span className='flex items-center gap-2 self-start'>
                <Log />
                <p className='text-dark-grey dark:text-white font-medium tracking-[-0.48px] leading-6 text-base'>Activity Charts</p>
            </span>
            <div className='bg-[#E3E3E3] dark:bg-white   h-[1px] w-full'></div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-silver text-sm leading-[22px] font-medium tracking-[-0.42px]'>Per Week</p>
                    <WeeklyBarchart />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-silver text-sm leading-[22px] font-medium tracking-[-0.42px]'>Per Month</p>
                    <MonthlyBarchart />
                </div>
            </div>
        </section>
    )
}

