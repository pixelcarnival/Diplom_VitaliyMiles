import React, { useState } from 'react'
import api from '../api/fake.api'

const Main = () => {
    const [users] = useState(api.users.fetchAll())

    return (
        <div className="container">
            <div className="row gutters-sm">
                <h1>
                    {users.map((user) => (
                        <div className="col-md-4 mb-3" key={user._id}>
                            <h1>
                                {user.texts.map((us) => (
                                    <h3 key={us._id}>{us.title}</h3>
                                ))}
                            </h1>
                        </div>
                    ))}
                </h1>
            </div>
        </div>
    )
}

export default Main
