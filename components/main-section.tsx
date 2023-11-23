import React from 'react'
import CardNews from './card-news'
import TransactionDetails from './transaction-details'
import QuickTransfer from './quick-transfer'
import { AreaChart } from '.'

const MainSection = () => {
    return (
        <section className="flex-1 flex bg-[#F6F6F6]">
            <div className='flex-1 flex flex-col  px-8 gap-8 pt-[38px]'>
                <div className='flex gap-9'>
                    <div className='flex flex-col gap-[38px]'>
                        <CardNews />
                        <AreaChart />
                    </div>
                    <div className='flex flex-col flex-1 gap-6'>
                        <TransactionDetails />
                        <QuickTransfer />
                    </div>

                </div>
                <div>
                    <p>v</p>
                    <p>vis</p>
                </div>
            </div>
        </section>
    )
}

export default MainSection
