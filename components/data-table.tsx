import { Table } from '@mantine/core';
import { FaDatabase } from 'react-icons/fa';
const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
export function DataTable() {
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
        </tr>
    ));

    return (
        <div className='flex flex-col gap-7 bg-white rounded-xl px-12 py-7 overflow-auto'>
            <div className='flex gap-5 flex-col'>
                <div className=' flex justify-between items-center'>
                    <span className='flex items-center gap-2'>
                        <FaDatabase />
                        <p className='text-dark-grey font-medium tracking-[-0.48px] leading-6 text-base'>Total Points</p>
                    </span>
                    <p className='text-[#876AFE] text-xs font-medium leading-4 tracking-[0.24px] cursor-pointer'>
                        View All
                    </p>
                </div>
                <div className='w-full h-[1px] bg-[#E3E3E3]'></div>
            </div>
            <div className='overflow-auto'>
                <Table highlightOnHover>
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
                    <tbody>{rows}</tbody>
                </Table>

            </div>

        </div>
    );
}