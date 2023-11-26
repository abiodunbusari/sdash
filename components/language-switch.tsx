
import { Button, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown2 } from "iconsax-react";

const data = [
    { id: 1, language: "English" },
    { id: 2, language: "Spanish" },
    { id: 3, language: "Francais" },
];

export const InternationalizationSwitch = () => {
    const [opened, { close, toggle }] = useDisclosure(false);

    return (
        <Popover
            opened={opened}
            onChange={close}
            width="target"
            position="bottom"
            withArrow={false}
        >
            <Popover.Target>
                <Button component='button' className="text-sm flex  text-[#121212] items-center gap-2 cursor-pointer max-[835px]:hidden" variant="ghost" onClick={toggle}>
                    Select Language
                    <ArrowDown2 size={18} className="cursor-pointer" />
                </Button>
            </Popover.Target>
            <Popover.Dropdown
                sx={{
                    borderRadius: 8,
                }}
            >
                <ul className=" flex flex-col gap-1">
                    {data.map(({ id, language }) => (
                        <li
                            className="flex cursor-pointer items-center gap-2 p-2 rounded-lg hover:bg-[#2F70F2]"
                            key={id}
                        >
                            {language}
                        </li>
                    ))}
                </ul>
            </Popover.Dropdown>
        </Popover>
    );
};