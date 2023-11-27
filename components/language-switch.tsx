
import { Button, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

export const InternationalizationSwitch = () => {
    const [opened, { close }] = useDisclosure(false);
    const { locales } = useRouter()
    return (
        <Popover width="target" position="bottom" shadow="md" >
            <Popover.Target>
                <Button className="text-dark-grey hover:bg-ash-grey dark:hover:bg-none
                 dark:text-white text-base max-[760px]:hidden" variant="ghost" component="button">
                    Choose language
                </Button>
            </Popover.Target>
            <Popover.Dropdown className='dark:bg-midnight-blue'>
                <section className="flex flex-col gap-2 ">
                    {[...(locales as string[])].sort().map((locale) => (
                        <Link
                            key={locale}
                            href="/"
                            locale={locale}
                            className="block hover:bg-ash-grey dark:hover:bg-[#353549] rounded-md p-1  dark:text-white"
                            onClick={() => close()}>
                            {locale == 'ar' ? 'Arabic' : locale == 'en' ? 'English' : 'French'}
                        </Link>
                    ))}
                </section>
            </Popover.Dropdown>
        </Popover>
    );
};