import React from 'react'
import PropTypes from 'prop-types'

const Genre = ({ name }) => {
    return <span className="badge m-1 text-bg-light">{name}</span>
}
Genre.propTypes = { name: PropTypes.string }
export default Genre
