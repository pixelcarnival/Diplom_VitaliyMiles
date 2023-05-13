import React from 'react'
// import api from '../api/fake.api'

const Main = () => {
    // const [users] = useState(api.users.fetchAll())

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="..."
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Название текста</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <p className="text-end">
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
// {
//     /* <h1>
//                     {users.map((user) => (
//                         <div className="col-md-4 mb-3" key={user._id}>
//                             <h1>
//                                 {user.texts.map((us) => (
//                                     <h3 key={us._id}>{us.title}</h3>
//                                 ))}
//                             </h1>
//                         </div>
//                     ))}
//                 </h1> */
// }
