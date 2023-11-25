import { ArrowUp2, Profile2User } from "iconsax-react";
import React from "react";
// import { IssuedCard, TransactionIcon } from "./icons";
import { RiArrowUpSFill } from "react-icons/ri";
import { CardTransfer } from "./icons";
import CardIssue from "./icons/card-issue";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { color } from "chart.js/helpers";
import clsx from "clsx";
import header from "./header";

const cardList = [
    {
        id: 1,
        icon: <Profile2User color="#2F70F2" size={20} />,
        header: "Active Users",
        price: "14,7 M",
        dropIcon: <RiArrowUpSFill color="#4EEA7A" size="24" />,
        percentage: "32%",
        color: "#2F70F2",
        dropcolor: "#4EEA7A",
    },
    {
        id: 2,
        icon: <CardTransfer />,
        header: "Transactions Users",
        price: "$ 1.234.10",
        dropIcon: (
            <RiArrowUpSFill color="#D62C2C" size="24" className=" rotate-180" />
        ),
        percentage: "32%",
        color: "#876AFE",
        dropcolor: "#D62C2C",
    },
    {
        id: 3,
        icon: <CardIssue />,
        header: "Cards Issued ",
        price: "3.442 ",
        dropIcon: <RiArrowUpSFill color="#4EEA7A" size="24" />,
        percentage: "32%",
        color: "#FFBC02",
        dropcolor: "#4EEA7A",
    },
];
export const CardsNews = () => {
    const { data: transactionOverview } = useQuery({
        queryFn: () => builder.use().transactions.overview.fetch(),
        queryKey: builder.transactions.overview.fetch.get(),
        select: (data) => data?.data?.data
    })

    console.log(transactionOverview)

    return (
        <main className="overflow-auto no-scrollbar ">
            <article className="grid grid-cols-[repeat(3,1fr)] gap-[clamp(10px,1.7vw,24px)]  ">
                {transactionOverview?.map(
                    (item, idx) => (
                        <section
                            key={idx}
                            className="p-[clamp(16px,1.3vw,20px)] flex flex-col gap-[clamp(10px,0.9vw,14px)] bg-white dark:bg-[#191929] rounded-lg  "
                        >
                            <article className=" flex gap-2 items-center">
                                {idx === 0 ? <Profile2User color="#2F70F2" size={20} /> : idx === 1 ? <CardTransfer /> : <CardIssue />}
                                <h4
                                    className={clsx('text-[clamp(10px,1vw,16px)] font-medium', idx === 0 ? '#2F70F2' : idx === 1 ? '#876AFE' : '#FFBC02')}
                                >
                                    {(item?.name.charAt(0).toUpperCase() + item?.name.slice(1)).split('_').join(' ')}
                                </h4>
                            </article>
                            <div className=" flex gap-[6px] items-center">
                                <h3 className="text-[#121212] dark:text-white font-semibold text-[clamp(12px,1.9vw,28px)] whitespace-nowrap">
                                    {item?.current - item?.last_month}
                                </h3>
                                <div
                                    className="flex gap-[2px] items-center"
                                >
                                    {idx === 0 || idx === 2 ?
                                        <RiArrowUpSFill color="#D62C2C" size="24" className=" rotate-180" /> : <RiArrowUpSFill color="#4EEA7A" size="24" />}
                                    <p className=" text-[clamp(13px,1vw,16px)]  font-normal">
                                        {(item?.current / (item?.current - item?.last_month) * 100).toFixed()}%
                                    </p>
                                </div>
                            </div>
                        </section>
                    )
                )}
            </article>
        </main>
    );
};