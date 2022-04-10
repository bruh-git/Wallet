import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  // {aqui tem que fazer um reducer,
  // transformar em numero e tofixed(2) valor inicial 0

  render() {
    const { email, expenses } = this.props;

    /* const getExpenses = expenses.map((el) => {
      const { currency } = el;
      const cotation = el.exchangeRates[currency].ask;
      const value = el.value * cotation;
      return value;
    }); */

    // const total = getExpenses.reduce((acc, cur) => acc + cur, 0);
    return (
      <div>
        <ul>
          <li data-testid="email-field">
            Email:
            {email}
          </li>
          <li data-testid="total-field">
            {expenses.reduce((acc, { exchangeRates, currency, value }) => acc + (
              parseFloat(exchangeRates[currency].ask) * Number(value)
            ),
            0).toFixed(2)}
          </li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
