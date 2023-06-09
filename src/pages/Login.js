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

  handleInputChange = ({ target }) => { // componente controlado
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
      this.setState({ disabled: false }); // habilita o botao em caso de ser vdd
    } else {
      this.setState({ disabled: true }); // botao continua desabilitado se falso
    }
  }

  render() {
    const { disabled, email, password } = this.state;
    const { userDispatch } = this.props;
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
            onClick={ () => userDispatch(this.state) } // dispara a props action
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  userDispatch: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (email) => dispatch(ACTION_USER_LOGIN(email)),
});

export default connect(null, mapDispatchToProps)(Login);
