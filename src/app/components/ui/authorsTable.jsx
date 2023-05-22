import React from 'react'
import PropTypes from 'prop-types'
import GenresList from './genre/genresList'
import Table from '../common/table'

const AuthorsTable = ({ users, onSort, selectedSort }) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        genres: {
            name: 'Жанр',
            component: (user) => <GenresList genres={user.genres} />
        },
        format: { path: 'format.name', name: 'Тип текста' },
        rating: { path: 'rating', name: 'Рейтинг' }
    }
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    )
}
AuthorsTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
}

export default AuthorsTable
