import { InternationalizationSwitch } from '.'
import { ThemeSwitch } from '@/styles/switcher'

import { HambergerMenu, Message, Notification, SearchNormal } from 'iconsax-react'
import { RiSettingsLine } from 'react-icons/ri'
import { Avatar, TextInput, rem } from '@mantine/core'
import { useIntl } from 'react-intl'

const Header = () => {
    const intl = useIntl();
    const placeHolder = intl.messages["page.home.sidebar.title"] as unknown as Record<string, string>
    return (
        <header>
            <nav className="bg-[#F7F7FF] dark:bg-[#191929] py-[15px] px-[32px] flex justify-between items-center">
                <TextInput
                    miw="28%"
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
                <section className='gap-[clamp(20px,2vw,32px)] items-center flex '>
                    <ul className='gap-[clamp(16px,1vw,24px)] items-center flex '>
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
                        <Avatar size={34} radius='100%' src='/user.svg' role='representation' />
                        <p className='text-dark-grey dark:text-white tracking-[-0.32px] max-[780px]:hidden'>Alex Smith</p>
                    </div>
                    <>
                        <ThemeSwitch />
                        <HambergerMenu size="32" color="currentColor" className='hidden max-[920px]:flex cursor-pointer' />
                    </>
                </section>
            </nav>
        </header>
    )
}

export default Header
