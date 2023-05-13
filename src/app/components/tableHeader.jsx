import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            // console.log('sort.path-', sort.path)
            // console.log('item-', item)
            onSort({
                ...selectedSort,
                order: selectedSort.order === -1 ? 1 : -1
            })
        } else {
            onSort({ path: item, order: -1 })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].iter)
                                : undefined
                        }
                        {...{ role: columns[column].iter && 'button' }}
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}
                {/* <th onClick={() => handleSort('name')} scope="col">
                    Имя
                </th>
                <th scope="col">Жанр</th>
                <th onClick={() => handleSort('format.name')} scope="col">
                    Тип текстов
                </th>
                <th onClick={() => handleSort('rating')} scope="col">
                    Рейтинг
                </th> */}
            </tr>
        </thead>
    )
}
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
