import { useQuery } from '@tanstack/react-query';
import { Table } from '@mantine/core';

import { builder } from '@/api/builder';
import { Log } from './icons';

export function DataTable() {

    const { data: forecast } = useQuery({
        queryFn: () => builder.use().supplies.forecast.fetch(),
        queryKey: builder.supplies.forecast.fetch.get(),
        select: (data) => data?.data?.data
    })

    return (
        <div className='flex flex-col gap-7 bg-white dark:bg-[#191929] rounded-xl px-12 py-7 overflow-auto no-scrollbar'>
            <div className='flex gap-5 flex-col'>
                <div className=' flex justify-between items-center'>
                    <span className='flex items-center gap-2'>
                        <Log />
                        <p className='text-dark-grey dark:text-white font-medium tracking-[-0.48px] leading-6 text-base'>Total Points</p>
                    </span>
                    <p className='text-[#876AFE] text-xs font-medium leading-4 tracking-[0.24px] cursor-pointer'>
                        View All
                    </p>
                </div>
                <div className='w-full h-[1px] bg-[#E3E3E3]'></div>
            </div>
            <div className='overflow-auto no-scrollbar flex flex-1'>
                <Table highlightOnHover className='flex-1'>
                    <thead>
                        <tr>
                            <th>Actual</th>
                            <th>Actual</th>
                            <th>Forecast</th>
                            <th>Variance</th>
                            <th>Variance</th>
                            <th>Variance</th>
                            <th>Variance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecast?.map((supply, idx) => (
                            <tr key={idx}>
                                <td className='whitespace-nowrap'>{supply?.name}</td>
                                <td>{supply?.actual_value}</td>
                                <td>{supply?.forecasted_value}</td>
                                <td>{supply?.q1_variance}</td>
                                <td>{supply?.q2_variance}</td>
                                <td>{supply?.q3_variance}</td>
                                <td>{supply?.q4_variance}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}