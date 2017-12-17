import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'
import includes from 'lodash/includes'

import { redirectLoggedIn } from '../../shared/util/on_enter'

const CREDENTIALS = {
  username: 'Username',
  password: 'Password'
}

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    window.includes = includes
    this.setState = this.setState.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  componentWillMount() {
    redirectLoggedIn(this.props.session, this.props.history)
  }

  update(field) {
    return e => {
      this.setState({ [field.toLowerCase()]:e.target.value })
    }
  }

  createInput(field, type) {
    return (
      <div>
      <label>{ field }</label>
      <input
        className='form-input'
        type={ type }
        onChange={ this.update(field) }
        placeholder={ field } />
      </div>
    )
  }

  processForm() {
    const { history, linkToLobby } = this.props
    this.props.processForm(this.state).then(response => {
      if(!includes(response.type, 'ERROR')) linkToLobby(history)}
    )
  }

  getAuthForm() {
    const username = CREDENTIALS.username
    const password = CREDENTIALS.password
    return(
      <form className='auth-form'>
        <h1>{ this.props.formType }</h1>
        { this.createInput(username, 'text')}
        { this.createInput(password, 'password')}
        <input
          className='form-submit'
          type='submit'
          value={ this.props.formType }
          onClick={ this.processForm } />
      </form>
    )
  }

  render() {
    const auth_form = this.getAuthForm()
    return(
      <div className='auth-container'>
        { auth_form }
        <h2><Link to={ this.props.redirectPath } > { `${this.props.redirect} instead` }</Link></h2>
      </div>
    )
  }
}

SessionForm.propTypes = {
  formType: PropTypes.string,
  processForm: PropTypes.func,
  redirect: PropTypes.string,
  redirectPath: PropTypes.string,
  session: PropTypes.object,
  history: PropTypes.object,
  linkToLobby: PropTypes.func
}

export default SessionForm
