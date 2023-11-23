import React from "react";
import Logo from "./icons/logo";
import { FaRegUser } from "react-icons/fa";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { LuLayoutGrid } from "react-icons/lu";

const asideData = [
  {
    id: 1,
    name: "Dashboard",
    children: [
      {
        id:1,
        icon: <LuLayoutGrid />,
        name: "Home",
      },
      {id:2,
        icon: <FaRegUser />,
        name: "Files",
      },
      {
        id:3,
        icon: <PiBriefcaseLight />,
        name: "Decline Project",
      },
      {
        id:4,
        icon: <SlLock />,
        name: "Management",
      },
      {id:5, icon: <SlLock />, name: "Database" },
    ],
  },
  {
    id:2,
    name:'Customer Data',
    children:[
      {id:1, icon: <LuLayoutGrid />, text: "Team Award" },
  {
    id:2,
    icon: <FaRegUser />,
    name: "Invoice Data",
  },
  {
    id:3,
    icon: <PiBriefcaseLight />,
    text: "Settings",
  },
  { id:4, icon: <SlLock />, text: "Announcement" },
  {
    id:5,
    icon: <SlLock />,
    text: "Media Assets",
  },
  {
    id:6,
    icon: <SlLock />,
    text: "Client Feedback",
  }
    ]
  }
];

// const topData = [
//   {
//     icon: <LuLayoutGrid />,
//     name: "Home",
//   },
//   {
//     icon: <FaRegUser />,
//     name: "Files",
//   },
//   {
//     icon: <PiBriefcaseLight />,
//     name: "Decline Project",
//   },
//   {
//     icon: <SlLock />,
//     name: "Management",
//   },
//   { icon: <SlLock />, name: "Database" },
// ];

const bottomData = [
  { icon: <LuLayoutGrid />, text: "Team Award" },
  {
    icon: <FaRegUser />,
    name: "Invoice Data",
  },
  {
    icon: <PiBriefcaseLight />,
    text: "Settings",
  },
  { icon: <SlLock />, text: "Announcement" },
  {
    icon: <SlLock />,
    text: "Media Assets",
  },
  {
    icon: <SlLock />,
    text: "Client Feedback",
  },
];

const AsideBar = () => {
  return (
    <aside className="flex flex-col gap-[54.78px] px-8 border-r-[3px] border-r-[#E3E3E3] pt-[30.25px]">
      <section className="flex flex-col gap-[54.78px]">
        <Logo />

        <section className="flex flex-col gap-[72px] ">
          {
            asideData.map(({name, id, children})=>(
              <div className="gap-[18px] flex flex-col" key={id}>
              <p>{name}</p>
              <div className="w-full h-[1px] bg-platinum"></div>
              <ul className="flex flex-col gap-7">
                {
                  children.map(({name,icon,id})=>(
                    <li key={id} className="flex items-center gap-2">
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

        {/* <div className="flex flex-col gap-[18px]">
          <p className="text-eerie-black">Dashboard</p>
          <Divider className="bg-platinum w-full" />
          <div className="flex flex-col gap-7 justify-center">
            {topData.map((item, idx) => (
              <div className="flex items-center gap-2">
                <>{item.icon}</>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div> */}

      </section>
    </aside>
  );
};

export default AsideBar;
