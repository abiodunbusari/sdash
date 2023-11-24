import React from 'react'
import CardNews from './card-news'
import TransactionDetails from './transaction-details'
import QuickTransfer from './quick-transfer'
import { ActivityChart, AreaChart, DataTable } from '.'

const MainSection = () => {
    return (
        <section className="flex-1 flex bg-[#F6F6F6] dark:bg-[#353549] overflow-auto no-scrollbar">
            <div className='flex-1 flex flex-col  px-8 gap-8 py-[38px]'>
                <div className='grid grid-cols-[1fr_40%] gap-9 '>
                    <div className='flex flex-col gap-[38px]'>
                        <CardNews />
                        {/* <AreaChart /> */}
                    </div>
                    <div className='flex flex-col flex-1 gap-6'>
                        <TransactionDetails />
                        <QuickTransfer />
                    </div>

                </div>
                <div className='flex-1 grid grid-cols-[30%_1fr] gap-6 '>
                    <ActivityChart />
                    <DataTable />
                </div>
            </div>
        </section>
    )
}

export default MainSection
