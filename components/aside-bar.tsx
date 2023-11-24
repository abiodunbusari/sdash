import React from "react";
import Logo from "./icons/logo";
import { FaRegUser } from "react-icons/fa";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { LuLayoutGrid } from "react-icons/lu";
import { Switch, useMantineTheme } from "@mantine/core";
import { Moon, Sun1 } from "iconsax-react";

const asideData = [
  {
    id: 1,
    name: "Dashboard",
    children: [
      {
        id: 1,
        icon: <LuLayoutGrid size={22} />,
        name: "Home",
      },
      {
        id: 2,
        icon: <FaRegUser size={22} />,
        name: "Files",
      },
      {
        id: 3,
        icon: <PiBriefcaseLight size={22} />,
        name: "Decline Project",
      },
      {
        id: 4,
        icon: <SlLock size={22} />,
        name: "Management",
      },
      { id: 5, icon: <SlLock size={22} />, name: "Database" },
    ],
  },
  {
    id: 2,
    name: 'Customer Data',
    children: [
      { id: 1, icon: <LuLayoutGrid size={22} />, name: "Team Award" },
      {
        id: 2,
        icon: <FaRegUser size={22} />,
        name: "Invoice Data",
      },
      {
        id: 3,
        icon: <PiBriefcaseLight size={22} />,
        name: "Settings",
      },
      { id: 4, icon: <SlLock size={22} />, name: "Announcement" },
      {
        id: 5,
        icon: <SlLock size={22} />,
        name: "Media Assets",
      },
      {
        id: 6,
        icon: <SlLock size={22} />,
        name: "Client Feedback",
      }
    ]
  }
];

const AsideBar = () => {
  const theme = useMantineTheme();
  return (
    <aside className="flex flex-col gap-[54.78px] px-8 border-r-[3px] border-r-[#E3E3E3] pt-[30.25px]">
      <section className="flex flex-col gap-[54.78px]">
        <div className="flex items-center gap-3 ">
          <Logo />
          <Switch
            classNames={{ track: 'cursor-pointer' }}
            py={4}
            color={theme.colorScheme === 'dark' ? '#2F70F2' : '#2F70F2'}
            onLabel={<Sun1
              size="16"
              color="white"
            />}
            offLabel={<Moon
              size="16"
              color="white"
            />}
          />
        </div>

        <section className="flex flex-col gap-[clamp(33px,5vw,72px)] ">
          {
            asideData.map(({ name, id, children }) => (
              <div className="gap-[18px] flex flex-col" key={id}>
                <p className=" text-eerie-black text-base font-medium tracking-[-0.32px]">{name}</p>
                <div className="w-full h-[1px] bg-platinum"></div>
                <ul className="flex flex-col gap-7">
                  {
                    children.map(({ name, icon, id }) => (
                      <li key={id} className="flex items-center gap-2 cursor-pointer hover:text-[#2F70F2] whitespace-nowrap text-sm text-dark-grey">
                        {icon}
                        {name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </section>
      </section>
    </aside>
  );
};

export default AsideBar;
