import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

export interface iToggle {
    opened: boolean;
    close: () => void;
    open: () => void;
}

export const AsideDrawer = ({ opened, close, open }: iToggle) => {
    return (
        <Drawer opened={opened} onClose={close} title="Authentication">
            jjjj

            <p onClick={open}>jjjjjjjjk</p>
        </Drawer>
    )
}

