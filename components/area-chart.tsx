import { Text } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
const areaChartData = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
];
export function AreaBarChart() {
    const { data: graphDetails } = useQuery({
        queryFn: () => builder.use().transactions.payout.fetch(),
        queryKey: builder.transactions.payout.fetch.get(),
        select: ({ data }) => data?.data
    })
    // const details = graphDetails?.map((detail) => {
    //     name: 'data',
    //         uv: detail?.
    // })
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
                        <Text className="text-[#121212] text-sm font-medium">20 June</Text>
                        <ArrowDown2 size={14} className="cursor-pointer" />
                    </span>
                    <Text className="text-[#A8A8A8] text-xs font-normal">To:</Text>
                    <span className="flex gap-2 items-center">
                        <Text className="text-[#121212] text-sm font-medium">20 July</Text>
                        <ArrowDown2 size={14} className="cursor-pointer" />
                    </span>
                </div>
            </section>
            <ResponsiveContainer width="100%" height={290}>
                <AreaChart
                    data={areaChartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#AF9CED" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#AF9CED" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" color="white" />
                    <YAxis />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#876AFE"
                        fillOpacity={1}
                        strikethroughThickness={20}
                        underlineThickness={40}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#FFBC02"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    )
}