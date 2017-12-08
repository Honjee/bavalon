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

  update(field){
    return e => {
      this.setState({ [field]:e.target.value })
    }
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
          onChange={ this.update(email) }
          placeholder={ email } />
        <label>{ password }</label>
        <input
          className='form-input'
          id='password'
          type='password'
          onChange={ this.update(email) }
          placeholder={ password } />
        <input
          className='form-submit'
          type='submit'
          value={ this.props.formType } />
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
