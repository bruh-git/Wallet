import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   nome: '',
    //   email: '',
    //   cpf: '',
    //   endereco: '',
    //   cidade: '',
    //   estado: '',
    // };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { nome, email, cpf, endereco, cidade, estado } = this.state;

    return (
      <form>
        <input
          label="Valor: "
          data-testid="value-input"
          type="number"
          onChange={ this.handleChange }
          name="Valor"
          required
        />
        <select
          label="Moeda: "
          defaultOption="Selecione"
          data-testid="currency-input"
          type="text"
          onChange={ this.handleChange }
          name="Moeda"
          required
        >
          <option value="BRL">BRL</option>
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
    );
  }
}

export default Form;
