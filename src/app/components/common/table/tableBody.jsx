import React from 'react'
import PropTypes from 'prop-types'

const TableBody = ({ data, columns }) => {
    const contentFormat = (item, column) => {
        if (column === 'format') {
            return item.format.name
        }

        return item[columns[column].path]
    }

    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === 'function') {
                return component(item)
            }
            return component
        }
        return contentFormat(item, column)
    }

    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}
export default TableBody
