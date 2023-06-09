import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, receiveAddExpenseSucess } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrenciesDispatch } = this.props;
    fetchCurrenciesDispatch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = async (e) => {
    e.preventDefault();
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await request.json();
    const { value, description, currency, method, tag } = this.state;
    const { AddExpense, expenses } = this.props;
    // const fetchExpenses = fetchExpenses;
    // Não pode chamar fetchExpenses() pois esse dispatch is not a function
    const obj = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: result,
    };
    AddExpense(obj);
    this.setState({
      value: '',
      description: '',
      currency,
      method,
      tag,
    });
  }

  render() {
    const { currencies, isFetching } = this.props;
    const { currency, description, method, tag, value } = this.state;
    return (
      <div>
        TrybeWallet
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            {' '}
          </label>
          <input
            data-testid="value-input"
            type="number"
            min={ 0 }
            onChange={ this.handleChange }
            name="value"
            value={ value }
            required
          />
          <label htmlFor="description">
            Descrição:
            {' '}
          </label>
          <input
            id="description"
            data-testid="description-input"
            type="text"
            onChange={ this.handleChange }
            name="description"
            value={ description }
          />
          <label htmlFor="currency">
            Moeda:
            {' '}
            {/* usado para dar espaço entre : e o input */}
          </label>
          <select
            id="currency"
            data-testid="currency-input"
            name="currency"
            type="number"
            value={ currency }
            onChange={ this.handleChange }
            required
          >
            { isFetching
              ? <option>Loading...</option>
              : currencies.map((el, index) => <option key={ index }>{el}</option>)}
          </select>
          <label htmlFor="method">
            Metódo de pagamento:
            {' '}
          </label>
          <select
            data-testid="method-input"
            id="method"
            onChange={ this.handleChange }
            name="method"
            value={ method }
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <label htmlFor="tag">
            Categoria:
            {' '}
          </label>
          <select
            id="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
            name="tag"
            value={ tag }
            required
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  fetchCurrenciesDispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesDispatch: () => dispatch(fetchCurrencies()),
  AddExpense: (expense) => dispatch(receiveAddExpenseSucess(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
