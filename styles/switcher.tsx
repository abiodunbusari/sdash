import React from "react";

import { clsx } from "@mantine/core";
import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        <main className=" bg-gray-300 dark:bg-[#282541] px-2 py-2 rounded-lg flex gap-2 items-center ">
            <section
                onClick={() => setTheme("light")}
                className={clsx(
                    resolvedTheme === "light" ? "py-1 px-2 rounded-md bg-white" : null,
                    "flex gap-1 items-center cursor-pointer"
                )}
            >
                <Sun1
                    // className={resolvedTheme === "light" ? "#A3AED0" : "#ffff"}
                    size="24"
                    color={resolvedTheme === "light" ? "#2d6ded" : "white"}
                    variant="Bold"

                />

            </section>

            <section
                onClick={() => setTheme("dark")}
                className={clsx(
                    resolvedTheme === "dark"
                        ? "p-1 rounded-md bg-[#353255] px-2 flex"
                        : null,
                    "flex gap-1 items-center cursor-pointer"
                )}
            >
                <Moon
                    size="22"
                    color={resolvedTheme === "light" ? "#2d6ded" : "#fff"}
                    variant="Outline"
                />

            </section>
        </main>
    );
};