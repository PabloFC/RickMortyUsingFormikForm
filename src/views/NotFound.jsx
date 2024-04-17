import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>OPSSSS! Page not found</h2>
        <Link to="/">Vuelve a la pagina principal</Link>
    </div>
  )
}

export default NotFound
