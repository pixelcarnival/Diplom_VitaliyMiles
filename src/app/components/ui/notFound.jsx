import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>
        Такой страницы не существует. Вертитесь на <Link to="/">главную</Link>{' '}
        страницу{' '}
      </p>
    </div>
  )
}

export default NotFound
