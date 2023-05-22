import React, { useState } from 'react'
import api from '../api/fake.api'

const Main = () => {
    const [users] = useState(api.users.fetchAll())

    return (
        <div>
            {users.map((user) => (
                <div className="card mb-2" key={user._id}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img
                                src={`https://avatars.dicebear.com/api/adventurer-neutral/${(
                                    Math.random() + 1
                                )
                                    .toString(36)
                                    .substring(7)}.svg`}
                                className="shadow-1-strong me-3"
                                alt="avatar"
                                width="170"
                                height="170"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Текст</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="text-end">
                                    <small className="text-muted">
                                        {user.name}
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <img
                                src="..."
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main

/* <h1>
                    {users.map((user) => (
                        <div className="col-md-4 mb-3" key={user._id}>
                            <h1>
                                {user.texts.map((us) => (
                                    <h3 key={us._id}>{us.title}</h3>
                                ))}
                            </h1>
                        </div>
                    ))}
                </h1> */
// {/* <tbody>
//             {data.map((item) => (
//                 <tr key={item._id}>
//                    {Object.keys(columns).map((column) => (
//                         <td key={column}>{item[columns[column].path]}</td>
//                     ))}
//                 </tr>
//             ))}
//         </tbody> */}
