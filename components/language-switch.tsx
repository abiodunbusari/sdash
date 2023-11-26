
import { Button, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

export const InternationalizationSwitch = () => {
    const [opened, { close }] = useDisclosure(false);
    const { locales } = useRouter()
    return (
        <Popover width="target" position="bottom" withArrow shadow="md">
            <Popover.Target>
                <Button className="text-dark-gray dark:text-white text-base max-[980px]:hidden" variant="transparent" component="button">
                    Choose language
                </Button>
            </Popover.Target>
            <Popover.Dropdown>
                {[...(locales as string[])].sort().map((locale) => (
                    <Link
                        key={locale}
                        href="/"
                        locale={locale}
                        className="block"
                        onClick={() => close()}>
                        {locale}
                    </Link>
                ))}
            </Popover.Dropdown>
        </Popover>
    );
};