import React from 'react'

import { HambergerMenu, Message, Notification, SearchNormal } from 'iconsax-react'
import { RiSettingsLine } from 'react-icons/ri'
import { Avatar, TextInput, rem } from '@mantine/core'
import { InternationalizationSwitch } from '.'
import { useDisclosure } from '@mantine/hooks'

const Header = () => {
    // const [opened, { open, close }] = useDisclosure(false);

    return (
        <header className="bg-[#F7F7FF] py-[15px] px-[32px] flex justify-between items-center">
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
                        paddingBlock: rem(15),
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
            />
            <div className='gap-8 items-center flex '>
                <InternationalizationSwitch />
                <div className='gap-6 items-center flex '>
                    <Message size={24} color='#121212' />
                    <RiSettingsLine size={24} color='#121212' />
                    <Notification size={24} color='#121212' />
                </div>
                <div className='flex items-center gap-[14px]'>
                    <Avatar size={34} radius='100%' src='/user.svg' />
                    <p className='text-dark-grey tracking-[-0.32px]'>Alex Smith</p>
                </div>
                {/* <HambergerMenu className='cursor-pointer' opened={opened} close={close} onClick={open} /> */}
            </div>
        </header>

    )
}

export default Header
