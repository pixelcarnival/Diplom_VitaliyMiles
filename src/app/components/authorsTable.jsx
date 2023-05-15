import React from 'react'
import PropTypes from 'prop-types'
// import Author from './author'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const AuthorsTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        genres: { name: 'Жанр' },
        format: { path: 'format.name', name: 'Тип текста' },
        rating: { path: 'rating', name: 'Рейтинг' }
    }
    return (
        <table className="table table-striped">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
            {/* <tbody>
                {users.map((user) => (
                    <Author {...rest} key={user._id} {...user} />
                ))}
            </tbody> */}
        </table>
    )
}
AuthorsTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
}

export default AuthorsTable
