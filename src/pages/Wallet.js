import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions/index';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { mySecondState: { currencies } } = this.props;
    console.log(currencies);
    return (
      <div>
        TrybeWallet
        <Header />
        <form>
          <label htmlFor="valor">
            <input
              data-testid="value-input"
              type="number"
              min={ 0 }
              onChange={ this.handleChange }
              name="Valor"
              required
            />
          </label>
          <select
            label="Moeda: "
            defaultOption="Selecione"
            data-testid="currency-input"
            onChange={ this.handleChange }
            name="Moeda"
            required
          >
            {/* {currencies.map(
              (el) => <option key={ el } value={ el }>{el }</option>,
            )} */}
          </select>
          <select
            data-testid="method-input"
            onChange={ this.handleChange }
            label="Método de pagamento : "
            type="text"
            name="Método"
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            onChange={ this.handleChange }
            label="Categoria: "
            type="text"
            name="Categoria"
            required
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <input
            label="Descrição: "
            data-testid="description-input"
            type="text"
            onChange={ this.handleChange }
            name="Descrição"
          />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  mySecondState: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mySecondState: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
