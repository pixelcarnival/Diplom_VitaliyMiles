import React from 'react'
import PropTypes from 'prop-types'
import Genre from './genre'

const Author = ({ name, genres, format, rating }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {genres.map((genre) => (
                    <Genre key={genre._id} {...genre} />
                ))}
            </td>
            <td>{format.name}</td>
            <td>{rating}</td>
        </tr>
    )
}
Author.propTypes = {
    name: PropTypes.string,
    genres: PropTypes.array,
    format: PropTypes.object,
    rating: PropTypes.number
}
export default Author
