import { useNavigate } from 'react-router-dom'
import { paths } from '../routes/paths'
import { Button } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { isSignedIn } from 'utils/tokenRepository'

export const AuthButton = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(paths.login)
  }

  return isSignedIn() ? (
    <Button variant="subtle" onClick={handleLogout}>
      로그아웃
    </Button>
  ) : (
    <Button variant="subtle">login</Button>
  )
}
