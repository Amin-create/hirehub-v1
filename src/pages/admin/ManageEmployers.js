import React, { useState } from 'react';
import { Breadcrumb, StatsGroup } from '../../components/core';
import { Table } from '../../components';

const columns = ["name", "plans", "payment", "nextPayment", "account", "action"];
const employees = [
    {
        id: "1",
        name: "Handmade Pouch",
        plans: "Silver Plan",
        payment: "Paid",
        nextPayment: "10/19/25 5:45am",
        account: false,
    },
    {
        id: "2",
        name: "Handmade Pouch",
        plans: "Browns Plan",
        payment: "Paid",
        nextPayment: "10/19/25 5:45am",
        account: false,
    },
    {
        id: "3",
        name: "Handmade Pouch",
        plans: "Platinum Plan",
        payment: "Unpaid",
        nextPayment: "10/19/25 5:45am",
        account: true,
    },
    {
        id: "4",
        name: "Handmade Pouch",
        plans: "Silver Plan",
        payment: "Paid",
        nextPayment: "10/19/25 5:45am",
        account: true,
    },
    {
        id: "5",
        name: "Handmade Pouch",
        plans: "Elite Professional Plan",
        payment: "Paid",
        nextPayment: "10/19/25 5:45am",
        account: true,
    },
];
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

    const onViewClick = (id) => {
        console.log("onViewClick")
        // push(
        //   {
        //     pathname: "/departments/view",
        //     // query: { type: "view", id },
        //     query: { id },
        //   },
        //   undefined,
        //   {
        //     shallow: true,
        //   }
        // );
    };
    const onEditClick = (id) => {
        console.log("onEditClick")
        // push(
        //   {
        //     pathname: "/departments/edit",
        //     // query: { type: "edit", id },
        //     query: { id },
        //   },
        //   undefined,
        //   {
        //     shallow: true,
        //   }
        // );
    };
    const onDeleteClick = (id) => {
        console.log("onDeleteClick")
    };

    return (
        <>
            <Breadcrumb
                heading="Manage Employers"
                breadcrumb={breadcrumb}
            />
            <StatsGroup data={statsData} />


            <Table
                // actionButton={{
                //     name: "Add Department",
                //     link: "/departments/add",
                // }}
                // id="employees-listing"
                data={employees}
                columns={columns}
                filterBy={["SearchByName", "SearchByTitle"]}
                actions={actions}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}

            // shadow
            // title="Manage Roles"
            // setTableFilters={setTableFilters}
            // dropdwonOptions={dropdwonOptions}
            // manageRoles
            // isLoading={isLoading}
            />
        </>
    );
}

export default ManageEmployers;
