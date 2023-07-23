import { Component, useContext } from 'react'
import ProfileView from './ProfileView'
import { ApiControlContext } from '../api/apiContext'

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <ProfileView />
  }
}

export default function ProfileProvider(props) {
  const { handlePomodoroArchived } = useContext(ApiControlContext)

  return <Profile handlePomodoroArchived={handlePomodoroArchived}>{props.children}</Profile>
}
