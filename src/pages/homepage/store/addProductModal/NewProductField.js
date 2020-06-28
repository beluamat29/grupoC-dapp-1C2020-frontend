import * as React from "react";
import {productCategories} from "../../../../constants/Constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";


class NewProductField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    updateAvailableStock = (number) => {
        this.props.onUpdate('stock', Math.max(1, number));
    }

    generateEntityCheckbox = (entity) => {
        return (
            <div className="rubro-checkbox">
                <input type="radio" value={entity.value} checked={this.state.selectedOption === entity.value}
                       onClick={this.handleOptionChange}/>
                <label className="checkbox">
                    {entity.label}
                </label>
            </div>
        )
    }

    handleOptionChange = (changeEvent) => {
        this.setState({selectedOption: changeEvent.target.value})
        this.props.onUpdate('category', changeEvent.target.value)
    }

    render() {
        return (
            <div className="modal-card-body">
                <div className="seccion-de-campos">
                    <div className="campo-a-rellenar">
                        <label>
                            Nombre
                        </label>
                        <input type="text" value={this.props.product.name} id="name" name="name"
                               onChange={(event) => this.props.onUpdate('name', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Marca
                        </label>
                        <input type="text" value={this.props.product.brand} id="brand" name="brand"
                               onChange={(event) => this.props.onUpdate('brand', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Precio
                        </label>
                        <input type="text" value={this.props.product.price} id="price" name="price"
                               onChange={(event) => this.props.onUpdate('price', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Stock disponible
                        </label>
                        <input type="number" value={this.props.product.stock} id="stock" name="stock"
                               onChange={(event) => this.updateAvailableStock(parseInt(event.target.value))}/>
                    </div>

                    {!this.props.isValidProduct &&
                    <div className="user-error">
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        Hay campos sin completar.
                    </div>}

                </div>
                <div className="seccion-de-campos">
                    <div className="campo-a-rellenar">
                        <label>
                            Categoría
                        </label>
                        <div className="categories-grid">
                            {productCategories.map(category => this.generateEntityCheckbox(category))}
                        </div>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            <span>URL de la imagen del producto</span>
                        </label>
                        <input type="text" value={this.props.product.productImageURL} id="productImageURL"
                               name="productImageURL"
                               onChange={(event) => this.props.onUpdate('productImageURL', event.target.value)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProductField;
