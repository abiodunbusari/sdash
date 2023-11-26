import { Text } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

export function AreaBarChart() {

    const { data: graphDetails } = useQuery({
        queryFn: () => builder.use().transactions.payout.fetch(),
        queryKey: builder.transactions.payout.fetch.get(),
        select: ({ data }) => data?.data
    })
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };


    const details = graphDetails?.map((detail) => ({

        name: new Date(detail?.date).toLocaleDateString("en-US", options),
        uv: detail?.salary_paid,
        pv: detail?.cash_bond_bought,
    }))
    return (
        <section className="flex flex-col gap-5">
            <section className="flex justify-between">
                <div className="flex gap-4">
                    <span className="flex items-center gap-3">
                        <Text className="text-[#121212] dark:text-white">Salary</Text>
                        <RiCheckboxBlankFill size={18} color="#876AFE" />
                    </span>
                    <span className="flex gap-3 items-center">
                        <Text className="text-[#121212] dark:text-white">Cash bond</Text>
                        <RiCheckboxBlankFill size={18} color="#FFBC02" />
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    <Text className="text-[#A8A8A8] text-xs font-normal">From:</Text>
                    <span className="flex gap-2 items-center">
                        <Text className="text-[#121212] dark:text-white text-sm font-medium">20 June</Text>
                        <ArrowDown2 size={14} className="cursor-pointer" />
                    </span>
                    <Text className="text-[#A8A8A8] text-xs font-normal">To:</Text>
                    <span className="flex gap-2 items-center">
                        <Text className="text-[#121212]  dark:text-white  text-sm font-medium">20 July</Text>
                        <ArrowDown2 size={14} className="cursor-pointer" />
                    </span>
                </div>
            </section>
            <ResponsiveContainer width="100%" height={290}>
                <AreaChart
                    data={details}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#AF9CED" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#AF9CED" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" color="white" label={{ fill: 'pink' }} />
                    <YAxis dataKey='uv' />
                    <CartesianGrid horizontal={true} vertical={false} />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#876AFE"
                        fillOpacity={1}
                        strikethroughThickness={20}
                        underlineThickness={40}
                        fill="url(#colorUv)"
                        strokeWidth={4}
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#FFBC02"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        strokeWidth={4}

                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    )
}