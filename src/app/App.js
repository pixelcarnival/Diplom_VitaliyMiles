import { Route, Routes } from 'react-router-dom'
import NavBar from '../app/components/ui/NavBar'
import Login from '../app/layouts/login'
import Main from '../app/layouts/main'
import Blog from '../app/layouts/blog'
import Authors from '../app/layouts/authors'
import NotFound from '../app/components/ui/notFound'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route path="blog" element={<Blog />} />
                    <Route path="authors" element={<Authors />} />
                    <Route path="login/:type?" element={<Login />} />
                    <Route index element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
