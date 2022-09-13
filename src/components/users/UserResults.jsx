// 11. Remove useState
import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
// 12. Import GithubContext
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  // 13. Pull out the context we want from the GithubContext
  const { users, loading } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
