import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CREDENTIALS = {
  email: 'E-mail',
  password: 'Password'
}

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.setState = this.setState.bind(this)
  }

  updateField(){

  }

  getAuthForm() {
    const email = CREDENTIALS.email
    const password = CREDENTIALS.password
    return(
      <form className='auth-form'>
        <h1>{ this.props.formType }</h1>
        <label>{ email }</label>
        <input
          className='form-input'
          id='email'
          type='text'
          onChange={ this.updateField(email) }
          placeholder={ email } />
      </form>
    )
  }

  render() {
    const auth_form = this.getAuthForm()
    return(
      <div className='auth container'>
        { auth_form }
      </div>
    )
  }
}

SessionForm.propTypes = {
  formType: PropTypes.string,
  processForm: PropTypes.func
}

export default SessionForm
