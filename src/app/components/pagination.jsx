import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ itemCounts, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemCounts / pageSize)
    if (pageCount === 1) return null

    const pages = Array.from({ length: pageCount }, (_, i) => ++i)

    return (
        <div className="">
            <nav>
                <ul className="pagination justify-content-center">
                    {pages.map((page) => (
                        <li
                            className={
                                'page-item' +
                                (page === currentPage ? ' text-success' : '')
                            }
                            key={'page_' + page}
                        >
                            <button
                                className={
                                    'btn m-1 colorText border-0' +
                                    (page === currentPage
                                        ? ' link-success'
                                        : '')
                                }
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
Pagination.propTypes = {
    itemCounts: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}
export default Pagination
// {
//     /* <button
//                                 className="btn page-link m-1"
//                                 onClick={() => onPageChange(page)}
//                             >
//                                 {page}
//                             </button> */
// }
// btn m-1
