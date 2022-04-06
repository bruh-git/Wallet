import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  // componentDidMount() {
  //   const { fetchExpensesDispatch } = this.props;
  //   fetchExpensesDispatch();
  // }

  render() {
    // const { expenses } = props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>
            Editar/Excluir
            {/* <button
              type="submit"
              data-testid="edit-btn"
            >
              Editar
            </button>
            <button
              type="submit"
              data-testid="delete-btn"
            >
              Excluir
            </button> */}
          </th>
          {/* {expenses.map((expenses))} */}
        </tr>
      </table>
    );
  }
}
ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
  fetchExpensesDispatch: PropTypes.func,
}.isRequired;

// const mapStateToProps = (dispatch) => ({

// });
export default connect()(ExpensesTable);
