import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Destructure user object from fetch request to only grab login and avatar_url
function UserItem({ user: { login, avatar_url } }) {
  return (
    // Styling UserItem card with shadow and location at base
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          {/* // Styling for user images */}
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          {/* // User login with link to profile */}
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
