import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

const CREDENTIALS = {
  username: 'Username',
  password: 'Password'
}

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.setState = this.setState.bind(this)
    this.processForm = this.processForm.bind(this)
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
    this.props.processForm(this.state)
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
        <h2><Link to={ this.props.redirectPath } > { this.props.redirect }</Link></h2>
      </div>
    )
  }
}

SessionForm.propTypes = {
  formType: PropTypes.string,
  processForm: PropTypes.func,
  redirect: PropTypes.string,
  redirectPath: PropTypes.string
}

export default SessionForm
