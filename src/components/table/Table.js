import React, { useState } from 'react';
import Icon from '../icon';
import { Button, InputWithLabel } from '../core';

function Table({
    columns,
    data,
    filterBy,
    actions,
    onViewClick,
    onEditClick,
    onDeleteClick,
}) {
    const tableHeading = (col) => {
        switch (col) {
            case "createdOn":
                return "Created On";
            case "nextPayment":
                return "Next Payment";

            default:
                return col;
        }
    };
    const renderTableCell = (td, col) => {
        if (typeof td === "string") td = td.toLowerCase();
        if (
            td === "completed" ||
            td === "pending" ||
            td === "inprocess" ||
            td === "active"
        )
            return
        <>
            {/* <Core.Badge status={td} /> */}
            <span>....{td}</span>
        </>
            ;
        if (col.toLowerCase() === "active") return

        <>
            {/*   <Core.Badge status={"active"} /> */}
            <span>....{td}</span>
        </>
            ;
        if (col.toLowerCase() === "inactive")
            return

        <>
            {/*  <Core.Badge status={"inactive"} /> */}
            <span>....{td}</span>
        </>
            ;

        switch (col) {
            case "payment":
                if (td === true) {
                    return (
                        <>
                            {/* <Flex color="green.400" alignItems={"center"} columnGap={"3px"}>
                            <Icons.BsCheck2 />
                            <Text color="black">Paid</Text>
                        </Flex> */}
                            ...Paid
                        </>
                    );
                }
                return (
                    <>
                        {/* <Flex color="red.500" alignItems={"center"} columnGap={"3px"}>
                        <Icons.IoMdClose />
                        <Text color="black">Unpaid</Text>
                    </Flex> */}
                        ...Unpaid
                    </>
                );
            // case "status":
            //     if (td === true) return <ActivityStatus>Active</ActivityStatus>;
            //     return <ActivityStatus>Inactive</ActivityStatus>;
            case "account":
                if (td === true) {
                    return <>  {/* <ActivityStatus>Active</ActivityStatus> */}   ..Active  </>;
                }
                return <>  {/* <ActivityStatus>Inactive</ActivityStatus> */}     .. Inactive   </>;
            // case "duration":
            //     return `${convertDaysToYearsAndMonths(td)}`;
            // case "cost":
            //     return `$${td}`;
            // case "date":
            //     return `${formatDateAndTime(td)}`;
            // case "createdOn":
            //     return `${formatDateAndTime(td)}`;

            case "state":
                return td?.toUpperCase();

            default:
                return td;
        }
    };
    return (
        <div class="flex flex-col bg-white rounded-[8px] overflow-hidden shadow-md">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden ">
                        <div class="bg-white flex justify-between items-center py-3 px-5 ">
                            <span className='text-black-2 text-[18px] leading-[28px] font-medium'>Filters</span>
                            <div className='flex justify-end items-center gap-1'>
                                {filterBy?.map(value => {
                                    return (
                                        <InputWithLabel name={value} />
                                    )
                                })}
                                <div className='flex justify-end items-center gap-1'>
                                    <Button type="narrow">Search</Button>
                                    <Button type="narrow" color="white" icon="Cross">Reset</Button>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y">
                                <thead class="bg-gray-9 dark:bg-gray-700 text-left border-t">
                                    <tr>
                                        {columns?.map(value => {
                                            return (
                                                <>
                                                    {/* <th scope="col" class="py-3 px-4 pe-0">
                                                    <div class="flex items-center h-5">
                                                        <input id=" hs-table-pagination-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                        <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                                                    </div>
                                                </th> */}
                                                    <th scope="col" class="text-black-2 text-[13px] leading-[19px] font-semibold px-5 py-3">
                                                        <div className='flex justify-between'>
                                                            <span className='capitalize'>{tableHeading(value)}</span>
                                                            {/* <span className='text-gray-8'>
                                                                <Icon name="Sort1" />
                                                            </span> */}
                                                        </div>
                                                    </th>
                                                </>
                                            )
                                        })}
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    {/* <td class="py-3 ps-4">
                                            <div class="flex items-center h-5">
                                                <input id="hs-table-pagination-checkbox-1" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                <label for="hs-table-pagination-checkbox-1" class="sr-only">Checkbox</label>
                                            </div>
                                        </td> */}
                                    {data.map(row => (
                                        <tr key={row * 5}>
                                            {columns.map(column => {
                                                if (column === "action" && actions) {
                                                    return (
                                                        <td
                                                            key={column}
                                                            className="flex justify-center items-center gap-x-2 whitespace-nowrap text-gray-6 dark:text-gray-200 text-[13px] leading-[19px] font-medium px-5 py-4"
                                                        // maxW="500px"
                                                        // overflow={"auto"}
                                                        // isNumeric
                                                        // borderColor={"gray.200"}
                                                        >
                                                            {actions?.view && (
                                                                <span className='cursor-pointer'
                                                                    onClick={() => onViewClick(row._id)
                                                                    }>
                                                                    <Icon name="View" />
                                                                </span>
                                                            )}
                                                            {actions?.edit && (
                                                                <span className='cursor-pointer'
                                                                    onClick={() => onEditClick(row._id)
                                                                    }>
                                                                    <Icon name="Edit" />
                                                                </span>
                                                            )}
                                                            {actions?.delete && (
                                                                <span className='cursor-pointer'
                                                                    onClick={() => onDeleteClick(row._id)
                                                                    }>
                                                                    <Icon name="Delete" />
                                                                </span>
                                                            )}
                                                        </td>
                                                    );
                                                }

                                                return (
                                                    <td key={column * 5} class="px-5 py-4 text-gray-6 dark:text-gray-200 text-[13px] leading-[19px] font-medium whitespace-nowrap">
                                                        {/* {row[column]} */}
                                                        {renderTableCell(row[column], column)}
                                                    </td>
                                                )

                                                {/* <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">Badge</span> */ }

                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="flex justify-between items-center border-t py-3 px-4">
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                Showing 1-10 from 100
                            </span>
                            <nav class="flex items-center space-x-1">
                                <button type="button" class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <span aria-hidden="true">«</span>
                                    <span class="sr-only">Previous</span>
                                </button>
                                <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10" aria-current="page">1</button>
                                <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">2</button>
                                <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">3</button>
                                <button type="button" class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <span class="sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Table