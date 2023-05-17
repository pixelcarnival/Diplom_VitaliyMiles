import React, { useState } from 'react'
import api from '../api/fake.api'
import Pagination from '../components/common/pagination'
import { paginate } from '../utils/paginate'
import AuthorsTable from '../components/ui/authorsTable'

const Authors = () => {
    const [users] = useState(api.users.fetchAll())
    const [sort, setSort] = useState({ path: 'name', order: 'asc' })
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSort(item)
    }

    if (users) {
        const count = users.length
        const sortedAuthors = users.sort((a, b) => {
            // console.log('sort.path-', sort.path)
            if (sort.path === 'format.name') {
                if (sort.order === 'asc') {
                    return b.format.name > a.format.name ? 'asc' : 'desc'
                } else if (sort.order === 1) {
                    return b.format.name < a.format.name ? 'desc' : 'asc'
                }
            }
            if (sort.order === 'asc') {
                return a[sort.path] > b[sort.path] ? 'asc' : 'desc'
            } else if (sort.order === 1) {
                return a[sort.path] < b[sort.path] ? 'desc' : 'asc'
            }
            return ''
        })

        const userCrop = paginate(sortedAuthors, currentPage, pageSize)

        return (
            <div>
                <AuthorsTable
                    users={userCrop}
                    onSort={handleSort}
                    selectedSort={sort}
                />
                <Pagination
                    itemCounts={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        )
    }
    return 'Loading...'
}

export default Authors

// const sortedAuthors = users.sort((a, b) => {
//     // console.log('sort.path-', sort.path)
//     if (sort.path === 'format.name') {
//         return b.format.name < a.format.name ? -1 : 1
//     }

//     return a[sort.path] < b[sort.path] ? sort.order : ''
// })
