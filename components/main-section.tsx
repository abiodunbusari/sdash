import TransactionDetails from './transaction-details'
import QuickTransfer from './quick-transfer'
import { ActivityChart, AreaBarChart, CardsNews, DataTable } from '.'

const MainSection = () => {
    return (
        <section className="flex-1 flex bg-[rgb(246,246,246)] dark:bg-[#353549] overflow-auto no-scrollbar">
            <div className='flex-1 flex flex-col  px-8 gap-8 py-[38px] '>
                <div className='grid grid-cols-[1fr_40%] gap-9 max-[1450px]:grid-cols-[1fr_30%] max-[1300px]:grid-cols-1 '>
                    <div className='flex flex-col gap-[38px]'>
                        <CardsNews />
                        <AreaBarChart />
                    </div>
                    <div className='flex flex-col flex-1 gap-6'>
                        <TransactionDetails />
                        <QuickTransfer />
                    </div>

                </div>
                <div className='flex-1 grid grid-cols-[30%_1fr] max-[900px]:grid-cols-1 gap-6 '>
                    <ActivityChart />
                    <DataTable />
                </div>
            </div>
        </section>
    )
}

export default MainSection
