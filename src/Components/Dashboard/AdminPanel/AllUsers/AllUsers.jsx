import React from 'react'
import Table from './Table'

export default function
    () {
    return (
        <div className="w-full">
            {/* <Helmet>
                <title>Single Design | All users</title>
            </Helmet> */}
            <h3 className="text-3xl font-semibold my-4">Total Users: </h3>
            <div className="overflow-x-auto">
                <Table />
            </div>
        </div>
    )
}
