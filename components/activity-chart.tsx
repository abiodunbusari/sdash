import React, { SetStateAction, useState } from 'react'
import { FaDatabase } from 'react-icons/fa'
import { WeeklyBarchart } from './bar-chart'
import { MonthlyBarchart } from './monthly-barchart'
import { Log } from './icons'
import { Accordion } from '@mantine/core'

export const ActivityChart = () => {
    const [expandedItem, setExpandedItem] = useState<string | null>('customization');

    const handleAccordionChange = (value: string) => {
        setExpandedItem(value === expandedItem ? null : value);
    };

    return (
        <main className='py-7 px-6 flex flex-col gap-4 bg-white dark:bg-[#191929] rounded-xl'>
            <span className='flex items-center gap-2 self-start'>
                <Log />
                <p className='text-dark-grey dark:text-white font-medium tracking-[-0.48px] leading-6 text-base'>Activity Charts</p>
            </span>
            <div className='bg-[#E3E3E3] dark:bg-white   h-[1px] w-full'></div>
            <article className='flex flex-col gap-4'>
                <section className='flex flex-col gap-[10px]'>
                    <p className='text-silver text-sm leading-[22px] font-medium tracking-[-0.42px]'>Per Week</p>
                    <WeeklyBarchart />
                </section>
                <section className='flex flex-col gap-[10px]'>
                    <p className='text-silver text-sm leading-[22px] font-medium tracking-[-0.42px]'>Per Month</p>
                    <MonthlyBarchart />
                </section>

                <Accordion defaultValue="customization" onChange={handleAccordionChange}
                    value={expandedItem} classNames={{ label: 'text-[#A8A8A8] dark:text-white', item: 'border-none', chevron: 'text-[#121212] w-6 h-6 font-bold' }}>
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <span aria-hidden="true" className="visually-hidden">
                                View Per Quarter
                            </span>
                        </Accordion.Control>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultValue="customization" onChange={handleAccordionChange}
                    value={expandedItem} classNames={{ label: 'text-[#A8A8A8] !dark:text-white', item: 'border-none', chevron: 'text-[#121212] w-6 h-6 font-bold' }}>
                    <Accordion.Item value="customization">
                        <Accordion.Control><span aria-hidden="true" className="visually-hidden">
                            View Per Year
                        </span></Accordion.Control>
                    </Accordion.Item>
                </Accordion>
            </article>
        </main>
    )
}

