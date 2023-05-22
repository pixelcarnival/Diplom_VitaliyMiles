import React from 'react'
import PropTypes from 'prop-types'
import Genre from './genre'

const GenresList = ({ genres }) => {
    return (
        <>
            {genres.map((genre) => (
                <Genre key={genre._id} {...genre} />
            ))}
        </>
    )
}
GenresList.propTypes = {
    genres: PropTypes.array
}
export default GenresList
