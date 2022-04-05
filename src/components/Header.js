import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;

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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
