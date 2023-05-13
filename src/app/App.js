import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/login'
import Main from './components/main'
import Blog from './components/blog'
import Authors from './components/authors'
import NotFound from './components/notFound'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route path="blog" element={<Blog />} />
                    <Route path="authors" element={<Authors />} />
                    <Route path="login" element={<Login />} />
                    <Route index element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
