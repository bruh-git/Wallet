import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            <th>Editar/Excluir</th>
          </tr>
        </table>
        {expenses.map((el) => (
          <tr key={ el.id }>
            <td>{ el.description }</td>
            <td>{ el.tag }</td>
            <td>{ el.method }</td>
            <td>{ Number(el.value).toFixed(2) }</td>
            <td>{ el.exchangeRates[el.currency].name }</td>
            <td>{ Number(el.exchangeRates[el.currency].ask).toFixed(2) }</td>
            <td>
              {
                (Number(el.value)
                  * Number(el.exchangeRates[el.currency].ask))
                  .toFixed(2)
              }
            </td>
            <td>
              <td>Real</td>
              <button type="submit">Editar</button>
              <button type="submit">Excluir</button>
            </td>
          </tr>
        ))}
      </div>
    );
  }
}
ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);
