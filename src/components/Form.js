import React, { Component } from 'react';
import { countries } from '../countries';
import PropTypes from 'prop-types';

class Form extends Component {

    state = {
        country: 'ar',
        category: 'business'
    }

    changeCountry = e => {
        this.setState({
            country: e.target.value
        }, () => {
            this.props.getNews(this.state.country, this.state.category);
        });
    }

    changeCategory = e => {
        this.setState({
            category: e.target.value
        }, () => {
            this.props.getNews(this.state.country, this.state.category);
        });
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m12">
                    <form>
                        <h2>Encuentra las Noticias del Mundo</h2>
                        <div className="input-field col s6 m6">
                            <select onChange={this.changeCountry}>
                                {countries.map(element => (
                                    <option key={element.code} value={element.code}>{element.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-field col s6 m6">
                            <select onChange={this.changeCategory}>
                                <option value="business">Negocio</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="general">General</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

Form.propTypes = {
    getNews: PropTypes.func.isRequired
}

export default Form;