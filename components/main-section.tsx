import React from 'react'
import CardNews from './card-news'

const MainSection = () => {
    return (
        <section className="flex-1 flex bg-[#F6F6F6]">
            <div className='flex-1 flex flex-col  px-8 gap-8 pt-[38px]'>
                <div className='flex gap-9'>
                    <div className='flex flex-col'>
                        <CardNews />
                        <p>ii</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>iii</p>
                        <p>iv</p>
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
