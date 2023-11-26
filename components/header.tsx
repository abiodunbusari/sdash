import { InternationalizationSwitch } from '.'

import { HambergerMenu, Message, Notification, SearchNormal } from 'iconsax-react'
import { RiSettingsLine } from 'react-icons/ri'
import { Avatar, TextInput, rem } from '@mantine/core'

const Header = () => {

    return (
        <header>
            <nav className="bg-[#F7F7FF] dark:bg-[#191929] py-[15px] px-[32px] flex justify-between items-center">
                <TextInput
                    w="25%"
                    styles={{
                        label: {
                            color: "#121212",
                            fontWeight: 500,
                            fontSize: 14,
                            lineHeight: "22.4px",
                        },
                        input: {
                            paddingLeft: rem(14),
                            height: "fit-content",
                            lineHeight: "normal",
                            border: `none`,
                            background: "white",
                            borderRadius: rem(8),
                            "&::placeholder": {
                                color: "#ccc",
                                fontWeight: 400,
                                fontSize: rem(14),
                                lineHeight: "22.4px",
                            },
                        },
                    }}
                    icon={<SearchNormal size={22} />}
                    placeholder="Search Property..."
                    classNames={{ input: 'py-[11px]' }}
                />
                <section className='gap-8 items-center flex '>
                    <ul className='gap-6 items-center flex '>
                        <li>
                            <InternationalizationSwitch />
                        </li>
                        <li>
                            <Message size={24} color='currentColor' className='max-[920px]:hidden' />
                        </li>
                        <li>
                            <RiSettingsLine size={24} color='currentColor' className='max-[920px]:hidden' />
                        </li>
                        <li>
                            <Notification size={24} color='currentColor' className='max-[920px]:hidden' />
                        </li>
                    </ul>
                    <div className='flex items-center gap-[14px]'>
                        <Avatar size={34} radius='100%' src='/user.svg' component='image' />
                        <p className='text-dark-grey dark:text-white tracking-[-0.32px]'>Alex Smith</p>
                    </div>
                    <HambergerMenu size="32" color="currentColor" className='hidden max-[920px]:flex cursor-pointer' />
                </section>
            </nav>
        </header>
    )
}

export default Header
