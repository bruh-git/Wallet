import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    // const { myFirstState: { email },
    //   mySecondState: { currencies } } = this.props;
    const { myFirstState: { email } } = this.props;

    return (
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
    );
  }
}

Header.propTypes = {
  myFirstState: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  myFirstState: state.user,
});

export default connect(mapStateToProps, null)(Header);
