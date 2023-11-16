import React, { useState } from 'react';
import { Breadcrumb, StatsGroup } from '../../components/core';
import { Table } from '../../components';

const columns = ["department", "createdOn", "status", "action"];
const employees = ["department", "createdOn", "status", "action"];
const actions = {
    edit: true,
    delete: true,
    view: true,
  };

function ManageEmployers() {
  const breadcrumb = [
        { label: "Dashboard", link: "/dashboard" },
        { label: "Manage Employers" },
    ];
    const statsData = [
        {
            title: "Approved Employers",
            count: "20",
            iconName: "People",
        },
        {
            title: "Employer’s Request",
            count: "50",
            iconName: "Users",
        },
        {
            title: "Rejected Employers",
            count: "10",
            iconName: "ProfileDelete",
        },
    ];

    // const onViewClick = (id: any) => {
    //     push(
    //       {
    //         pathname: "/departments/view",
    //         // query: { type: "view", id },
    //         query: { id },
    //       },
    //       undefined,
    //       {
    //         shallow: true,
    //       }
    //     );
    //   };
    //   const onEditClick = (id: any) => {
    //     push(
    //       {
    //         pathname: "/departments/edit",
    //         // query: { type: "edit", id },
    //         query: { id },
    //       },
    //       undefined,
    //       {
    //         shallow: true,
    //       }
    //     );
    //   };
    //   const onDeleteClick = (id: any) => {
    //     setIdToDelete(id);
    //     onOpen();
    //   };

    return (
        <>
            <Breadcrumb
                heading="Manage Employers"
                breadcrumb={breadcrumb}
            />
            <StatsGroup data={statsData} />

            {/* <div class="bg-white shadow-md rounded-md p-4">
                        <div class="flex justify-between items-center flex-wrap gap-2 px-4 py-3">
                            <h5 class="font-semibold m-0">Filters</h5>
                            <div class="flex flex-wrap justify-between items-center gap-2">
                            <input type="text" class="px-2 py-1 border rounded focus:outline-none focus:border-blue-500" placeholder="Search by Name"/>
                            <input type="text" class="px-2 py-1 border rounded focus:outline-none focus:border-blue-500" placeholder="Search by Title"/>
                            <div class="relative">
                                <input class="px-2 py-1 border rounded focus:outline-none focus:border-blue-500" type="date" id="applied_date"/>
                                <div class="absolute top-0 right-0 px-2 py-1 cursor-pointer text-sm text-gray-500" id="applied_date_text_overlay">Applied Date</div>
                            </div>
                            <div class="relative">
                                <button type="button" id="job_status" class="flex justify-center items-center gap-2 bg-white border rounded px-2 py-1 focus:outline-none focus:border-blue-500">
                                Status
                                <i class="bi bi-chevron-down text-sm"></i>
                                </button>
                                <ul class="absolute right-0 mt-2 hidden bg-white border rounded-md shadow-md">
                                <li>
                                    <a class="block px-2 py-1" href="#">
                                    Active
                                    </a>
                                </li>
                                <li>
                                    <a class="block px-2 py-1" href="#">
                                    Deactive
                                    </a>
                                </li>
                                <li>
                                    <a class="block px-2 py-1" href="#">
                                    Hold
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div class="flex justify-between gap-2">
                                <button type="button" id="searchButton" class="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none">Search</button>
                                <button type="button" id="resetButton" class="flex items-center gap-1 px-2 py-1 border rounded focus:outline-none">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8747 9.99361C11.2001 10.319 11.2001 10.8467 10.8747 11.1721C10.5492 11.4975 10.0216 11.4975 9.69615 11.1721L5.7021 7.17812L1.70816 11.1721C1.38273 11.4976 0.855089 11.4976 0.529649 11.1721C0.204209 10.8467 0.204204 10.3191 0.529639 9.99362L4.52357 5.99962L0.52948 2.00559C0.20404 1.68015 0.204041 1.15252 0.529481 0.827084C0.85492 0.50165 1.38256 0.501649 1.708 0.827083L5.70208 4.8211L9.696 0.827098C10.0214 0.501658 10.5491 0.501655 10.8745 0.827089C11.2 1.15252 11.2 1.68016 10.8745 2.0056L6.8806 5.9996L10.8747 9.99361Z" fill="#858D9D" />
                                </svg>
                                Reset
                                </button>
                            </div>
                            </div>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full table-auto">
                        
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                <th class="py-2">
                                    <div class="flex justify-between items-center">
                                    Name<span class="sort-icons-span"><i class="bi bi-sort-up"></i><i class="bi bi-sort-up-alt hidden"></i></span>
                                    </div>
                                </th>
                                <th>
                                                <div class="d-flex justify-content-between align-items-center">
                                                Package<span class="sort-icons-span"><i class="bi bi-sort-up"></i><i
                                                    class="bi bi-sort-up-alt d-none"></i></span>
                                                </div>
                                            </th>
                                            <th>Payment</th>
                                            <th>Next Payment</th>
                                            <th>
                                                <div class="d-flex justify-content-between align-items-center">
                                                Acount<span class="sort-icons-span"><i class="bi bi-sort-up"></i><i
                                                    class="bi bi-sort-up-alt d-none"></i></span>
                                                </div>
                                            </th>
                                            <th class="text-center">Action</th>
                                </tr>
                            </thead>

                        
                            <tbody>
                            <tr>
                                            <td>
                                                <div class="d-flex justify-content-start align-items-center gap-1">
                                                <img src="../../assets/images/avatars/7.png" alt="Avatar" class="rounded-circle" />
                                                <strong class="text-nowrap">Angular Project</strong>
                                                </div>
                                            </td>
                                            <td>Software Engineer</td>
                                            <td>Paid</td>
                                            <td>10/19/25 5;45am</td>
                                            <td class="text-center">
                                                <span class="badge bg-label-success me-1">Active</span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center gap-2">
                                                <i class="bi bi-eye"></i>
                                                <i class="bi bi-pen"></i>
                                                <i class="bi bi-chat-text"></i>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <div class="d-flex justify-content-start align-items-center gap-1">
                                                <img src="../../assets/images/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                                <strong class="text-nowrap">Angular Project</strong>
                                                </div>
                                            </td>
                                            <td>Software Engineer</td>
                                            <td>Paid</td>
                                            <td>10/19/25 5;45am</td>
                                            <td class="text-center">
                                                <span class="badge bg-label-success me-1">Active</span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center gap-2">
                                                <i class="bi bi-eye"></i>
                                                <i class="bi bi-pen"></i>
                                                <i class="bi bi-chat-text"></i>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <div class="d-flex justify-content-start align-items-center gap-1">
                                                <img src="../../assets/images/avatars/5.png" alt="Avatar" class="rounded-circle" />
                                                <strong class="text-nowrap">Angular Project</strong>
                                                </div>
                                            </td>
                                            <td>Software Engineer</td>
                                            <td>Paid</td>
                                            <td>10/19/25 5;45am</td>
                                            <td class="text-center">
                                                <span class="badge bg-label-danger me-1">Deactive
                                                </span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center gap-2">
                                                <i class="bi bi-eye"></i>
                                                <i class="bi bi-pen"></i>
                                                <i class="bi bi-chat-text"></i>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <div class="d-flex justify-content-start align-items-center gap-1">
                                                <img src="../../assets/images/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                                <strong class="text-nowrap">Angular Project</strong>
                                                </div>
                                            </td>
                                            <td>Software Engineer</td>
                                            <td>Unpaid</td>
                                            <td>10/19/25 5;45am</td>
                                            <td class="text-center">
                                                <span class="badge bg-label-warning me-1">Hold </span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center gap-2">
                                                <i class="bi bi-eye"></i>
                                                <i class="bi bi-pen"></i>
                                                <i class="bi bi-chat-text"></i>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <div class="d-flex justify-content-start align-items-center gap-1">
                                                <img src="../../assets/images/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                                <strong class="text-nowrap">Angular Project</strong>
                                                </div>
                                            </td>
                                            <td>Software Engineer</td>
                                            <td>Unpaid</td>
                                            <td>10/19/25 5;45am</td>
                                            <td class="text-center">
                                                <span class="badge bg-label-danger me-1">Deactive
                                                </span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center gap-2">
                                                <i class="bi bi-eye"></i>
                                                <i class="bi bi-pen"></i>
                                                <i class="bi bi-chat-text"></i>
                                                </div>
                                            </td>
                                            </tr>
                            </tbody>
                            </table>
                        </div>

                        <div class="flex flex-col md:flex-row-reverse justify-between items-center gap-2 mt-2">
                            <span class="w-full md:w-1/2">Showing 1-10 from 100</span>
                            <nav aria-label="Page navigation">
                            <ul class="flex items-center space-x-2 m-0">
                                <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class="bi bi-chevron-left"></i>
                                </a>
                                </li>
                                <li class="page-item">
                                <a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item">
                                <a class="page-link" href="#">2</a>
                                </li>
                                
                                <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div> */}


            <Table

                actionButton={{
                    name: "Add Department",
                    link: "/departments/add",
                }}
                // id="employees-listing"
                data={employees}
                columns={columns}
                // filterBy={["Name", "Dates"]}

                // shadow
                // title="Manage Roles"
                // setTableFilters={setTableFilters}
                // dropdwonOptions={dropdwonOptions}
                // manageRoles
                // isLoading={isLoading}
                // actions={actions}
                // onViewClick={onViewClick}
                // onEditClick={onEditClick}
                // onDeleteClick={onDeleteClick}

            />

        </>
    );
}

export default ManageEmployers;
