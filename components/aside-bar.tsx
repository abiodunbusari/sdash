import Logo from "./icons/logo";
import { ThemeSwitch } from "@/styles/switcher";

import { FaRegUser } from "react-icons/fa";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { LuLayoutGrid } from "react-icons/lu";
import { useMantineTheme } from "@mantine/core";
import { useIntl } from "react-intl";


const AsideBar = () => {

  const theme = useMantineTheme();
  const intl = useIntl();
  const sidebarTitle = intl.messages["page.home.sidebar.title"];
  const sidebarData = intl.messages["page.home.sidebar.data"];
  const sidebarLowerData = intl.messages["page.home.sidebar.lowerpartdata"];
  const sideMenuTitles = intl.messages['page.home.sidebar.data'] as unknown as Record<string, string>

  const asideData = [
    {
      id: 1,
      name: "Dashboard",
      children: [
        {
          id: 1,
          icon: <LuLayoutGrid size={22} role='representation' />,
          name: sideMenuTitles.home,
        },
        {
          id: 2,
          icon: <FaRegUser size={22} role='representation' />,
          name: sideMenuTitles.files,
        },
        {
          id: 3,
          icon: <PiBriefcaseLight size={22} role='representation' />,
          name: sideMenuTitles.deadline_project,
        },
        {
          id: 4,
          icon: <SlLock size={22} />,
          name: sideMenuTitles.management,
        },
        { id: 5, icon: <SlLock size={22} role='representation' />, name: sideMenuTitles.database },
      ],
    },
    {
      id: 2,
      name: 'Customer Data',
      children: [
        { id: 1, icon: <LuLayoutGrid size={22} role='representation' />, name: "Team Award" },
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

  return (
    <aside className="flex flex-col dark:bg-[#191929] gap-[54.78px] px-8 border-r-[3px] border-r-[#E3E3E3] dark:border-r-[#9595b7] pt-[30.25px]">
      <section className="flex flex-col gap-[54.78px]">
        <div className="flex items-center gap-3 ">
          <Logo />
          <ThemeSwitch />
        </div>
        <section className="flex flex-col gap-[76px] ">
          {
            asideData.map(({ name, id, children }) => (
              <div className="gap-[18px] flex flex-col" key={id}>
                <h2 className=" text-eerie-black dark:text-white  text-base font-medium tracking-[-0.32px] whitespace-nowrap">{name}</h2>
                <div className="w-full h-[1px] bg-platinum"></div>
                <ul className="flex flex-col gap-7 justify-center items-start">
                  {
                    children.map(({ name, icon, id }) => (
                      <li key={id} className="flex items-center gap-2 cursor-pointer dark:text-white hover:text-[#2F70F2] whitespace-nowrap text-sm text-dark-grey">
                        <>
                          {icon}
                        </>
                        <>
                          {name}
                        </>
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
