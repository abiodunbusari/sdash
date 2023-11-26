import React from "react";

import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();

    return (
        <section className=" bg-gray-300 dark:bg-[rgb(40,37,65)] cursor-pointer px-2 py-2 rounded-lg flex gap-2 items-center "
            onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}>
            {theme === 'dark' ?
                <Sun1
                    size="24"
                    color="white"
                    variant="Bold"
                /> :
                <Moon
                    size="22"
                    color="#2d6ded"
                    variant="Outline"
                />

            }
        </section>
    );
};