import React from 'react'
import CardNews from './card-news'
import TransactionDetails from './transaction-details'
import QuickTransfer from './quick-transfer'
import { AreaChart, DataTable } from '.'

const MainSection = () => {
    return (
        <section className="flex-1 flex bg-[#F6F6F6] overflow-auto">
            <div className='flex-1 flex flex-col  px-8 gap-8 pt-[38px]'>
                <div className='grid grid-cols-[1fr_clamp(220px,19vw,300px)] gap-9 '>
                    <div className='flex flex-col gap-[38px]'>
                        <CardNews />
                        {/* <AreaChart /> */}
                    </div>
                    <div className='flex flex-col flex-1 gap-6'>
                        <TransactionDetails />
                        <QuickTransfer />
                    </div>

                </div>
                <div className='flex-1 grid grid-cols-[30%_1fr]'>
                    <div className='white'>Activity Chart</div>
                    <DataTable />
                </div>
            </div>
        </section>
    )
}

export default MainSection
