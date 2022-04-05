import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      currency: '',
      method: '',
      category: '',
      value: 0,
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, isFetching } = this.props;
    const { currency, description, method, category, value } = this.state;
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
          <label htmlFor="category">
            Categoria:
            {' '}
          </label>
          <select
            id="category"
            data-testid="tag-input"
            onChange={ this.handleChange }
            name="category"
            value={ category }
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
          // onClick={ this.onClick }
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
  fetch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
