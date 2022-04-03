import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import { ACTION_WALLET } from '../actions';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currencies: 'BRL',
  //     expenses: 0,
  //   };
  // }

  render() {
    // const { myFirstState: { email },
    //   mySecondState: { currencies },
    //   mythirdState: { expenses } } = this.props;
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
  // mySecondState: PropTypes.arrayOf(PropTypes.string).isRequired,
  // mythirdState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  myFirstState: state.user,
  // mySecondState: state.user,
  // mythirdState: state.user,
});

// const mapDispatchToProps = (dispatch) => ({
//   myFirstDispatch: (value) => dispatch(ACTION_WALLET(value)),
// });

export default connect(mapStateToProps, null)(Header);
