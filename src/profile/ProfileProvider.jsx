import { Component, useContext } from 'react'
import { ApiControlContext } from '../api/apiContext'
import { ProfileControlContext } from './profileContext'

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.control = {
      showArchivedTodos: this.showArchivedTodos,
    }
  }

  showArchivedTodos = () => {}

  render() {
    return <ProfileControlContext.Provider value={this.control}>{this.props.children}</ProfileControlContext.Provider>
  }
}

export default function ProfileProvider(props) {
  const { handlePomodoroArchived } = useContext(ApiControlContext)

  return <Profile handlePomodoroArchived={handlePomodoroArchived}>{props.children}</Profile>
}
 