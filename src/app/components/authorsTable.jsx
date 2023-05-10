import React from 'react'
import PropTypes from 'prop-types'
import Author from './author'

const AuthorsTable = ({ users, onSort }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th onClick={() => onSort('name')} scope="col">
                        Имя
                    </th>
                    <th scope="col">Жанр</th>
                    <th onClick={() => onSort('format.name')} scope="col">
                        Тип текстов
                    </th>
                    <th onClick={() => onSort('rating')} scope="col">
                        Рейтинг
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <Author key={user._id} {...user} />
                ))}
            </tbody>
        </table>
    )
}
AuthorsTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default AuthorsTable
