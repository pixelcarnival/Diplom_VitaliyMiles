import React, { useState } from 'react'
import api from '../api'

const Authors = () => {
    // const users = api.users.fetchAll()
    const [users] = useState(api.users.fetchAll())

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Жанр</th>
                    <th scope="col">Тип текстов</th>
                    <th scope="col">Рейтинг</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                            {user.genres.map((item) => (
                                <span
                                    className="badge m-1 text-bg-light"
                                    key={item._id}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </td>
                        <td>{user.format.name}</td>
                        <td>{user.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Authors
