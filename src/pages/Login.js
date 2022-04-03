import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ACTION_USER_LOGIN } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      password: '',
      email: '',
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validate);
  }

  validate = () => {
    const { password, email } = this.state;

    const emailRegex = /\S+@\S+\.\S+/;
    const emailValid = emailRegex.test(email);
    const senhalength = 6;
    const passwordValid = password.length >= senhalength;

    if (emailValid && passwordValid) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { disabled, email, password } = this.state;
    const { myFirstDispatch } = this.props;
    return (
      <form>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ this.handleInputChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.handleInputChange }
        />
        <Link to="/carteira">
          <button
            type="submit"
            id="btn-input"
            disabled={ disabled }
            onClick={ () => myFirstDispatch(this.state) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  myFirstDispatch: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (value) => dispatch(ACTION_USER_LOGIN(value)),
});

export default connect(null, mapDispatchToProps)(Login);
