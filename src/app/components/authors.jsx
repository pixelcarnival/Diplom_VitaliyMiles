import React, { useState } from 'react'
import api from '../api/fake.api'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import AuthorsTable from './authorsTable'

const Authors = () => {
    const [users] = useState(api.users.fetchAll())
    const [sort, setSort] = useState({ iter: 'name', order: -1 })
    // console.log(sort)
    const count = users.length

    const pageSize = 10
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        console.log('r', item)

        setSort({ iter: item, order: -1 })
    }
    const sortedAuthors = users.sort((a, b) => {
        // if (b.format.name < a.format.name) {
        //     return -1
        // }
        // if (b.format.name > a.format.name) {
        //     return 1
        // }
        // return 0
        if (typeof a[sort.iter] && typeof b[sort.iter] === typeof Object) {
            return ''
        }

        return a[sort.iter] > b[sort.iter] ? sort.order : ''
    })

    const userCrop = paginate(sortedAuthors, currentPage, pageSize)

    return (
        <div>
            <AuthorsTable users={userCrop} onSort={handleSort} />
            <Pagination
                itemCounts={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default Authors
