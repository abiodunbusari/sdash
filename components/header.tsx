import { HambergerMenu, Message, Notification, SearchNormal } from 'iconsax-react'
import { RiSettingsLine } from 'react-icons/ri'
import { Avatar, Burger, Drawer, TextInput, rem } from '@mantine/core'
import { useIntl } from 'react-intl'

import { InternationalizationSwitch } from '.'
import { ThemeSwitch } from '@/styles/switcher'
import { useDisclosure } from '@mantine/hooks'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import AsideBar from './aside-bar'

const Header = () => {
    const intl = useIntl();
    const user = intl.messages["page.home.header.user"] as string
    const [___, { toggle }] = useDisclosure();
    const { theme } = useTheme();
    const [opened, { open: OpenDrawer, close: closeDrawer }] =
        useDisclosure(false);
    return (
        <header>
            <nav className="bg-[#F7F7FF] dark:bg-[#191929] py-[15px] px-[32px] flex justify-between items-center no-scrollbar">
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
                    placeholder='Select properly...'
                    classNames={{ input: 'py-[11px]' }}
                />
                <section className='gap-[clamp(20px,2vw,32px)] items-center flex '>
                    <InternationalizationSwitch />
                    <ul className='gap-[clamp(16px,1vw,24px)] items-center flex cursor-pointer '>
                        <li>
                            <Message size={24} color='currentColor' className='max-[980px]:hidden' />
                        </li>
                        <li>
                            <RiSettingsLine size={24} color='currentColor' className='max-[980px]:hidden' />
                        </li>
                        <li>
                            <Notification size={24} color='currentColor' className='max-[980px]:hidden' />
                        </li>
                    </ul>
                    <div className='flex items-center gap-[14px]'>
                        <Avatar size={34} radius='100%' src='/user.svg' role='representation' />
                        <p className='text-dark-grey dark:text-white tracking-[-0.32px] max-[780px]:hidden'>{user}</p>
                    </div>
                    <>
                        <ThemeSwitch />
                        <Burger
                            opened={opened}
                            onClick={() => {
                                toggle();
                                OpenDrawer();
                            }}
                            aria-label="Toggle navigation"
                            className="min-[760px]:hidden block relative z-[999] text-dark-gray dark:text-white"
                            transitionDuration={500}
                            color={
                                theme === "light"
                                    ? "#1F1F1F"
                                    : theme === "dark"
                                        ? "white"
                                        : "#1F1F1F"
                            }
                            aria-haspopup="true"
                        />
                    </>
                </section>
                <Drawer
                    opened={opened}
                    onClose={closeDrawer}
                    size={220}
                    withCloseButton={false}
                    classNames={{ body: "p-0", content: 'no-scrollbar' }}
                    transitionProps={{ duration: 600 }}>
                    <AsideBar withLogo={false} close={closeDrawer} />
                </Drawer>
            </nav>
        </header>
    )
}

export default Header
