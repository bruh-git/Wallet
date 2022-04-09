import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  // {aqui tem que fazer um reducer,
  // transformar em numero e tofixed(2) valor inicial 0

  render() {
    const { email } = this.props;
    // const { total } = this.valueTotal();
    return (
      <div>
        <ul>
          <li data-testid="email-field">
            Email:
            {email}
          </li>
          <li data-testid="total-field">
            Despesa total:
            0
          </li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
