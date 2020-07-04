import * as React from "react";
import {productCategories} from "../../../../constants/Constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {LanguageContext} from "../../../../constants/LanguageMaps";


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
                <input type="radio" value={entity.value} checked={this.props.product.category === entity.value}
                       onClick= {(event) => this.props.onUpdate('category', event.target.value)}/>
                <label className="checkbox">
                    {entity.label}
                </label>
            </div>
        )
    }

    render() {
        return (
            <div className="modal-card-body">
                <div className="seccion-de-campos">
                    <div className="campo-a-rellenar">
                        <label>
                            <span>{this.context.addProductNameField}</span>
                        </label>
                        <input type="text" value={this.props.product.name} id="name" name="name"
                               onChange={(event) => this.props.onUpdate('name', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            {this.context.addProductBrandField}
                        </label>
                        <input type="text" value={this.props.product.brand} id="brand" name="brand"
                               onChange={(event) => this.props.onUpdate('brand', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            {this.context.addProductPriceField}
                        </label>
                        <input type="text" value={this.props.product.price} id="price" name="price"
                               onChange={(event) => this.props.onUpdate('price', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            {this.context.addProductAvailableStockField}
                        </label>
                        <input type="number" value={this.props.product.stock} id="stock" name="stock"
                               onChange={(event) => this.updateAvailableStock(parseInt(event.target.value))}/>
                    </div>
                    {this.props.isEditingProduct &&
                    <div className="campo-a-rellenar">
                        <label className="checkbox">
                            {this.context.editProductDeleteProduct}
                        </label>
                        <div className="categories-grid">
                            <div className="rubro-checkbox">
                                <input type="checkbox" value={!this.props.product.isActiveMerchandise} checked={this.props.product.isActiveMerchandise}
                                       onClick= {(event) => this.props.onUpdate('isActiveMerchandise', event.target.value)}/>
                                <label className="checkbox">
                                    {this.context.isActiveProduct}
                                </label>
                            </div>
                        </div>
                    </div>
                    }

                    {!this.props.isValidProduct &&
                    <div className="user-error">
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        Hay campos sin completar.
                    </div>}

                </div>
                <div className="seccion-de-campos">
                    <div className="campo-a-rellenar">
                        <label>
                            {this.context.addProductCategoryField}
                        </label>
                        <div className="categories-grid">
                            {productCategories.map(category => this.generateEntityCheckbox(category))}
                        </div>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            <span>{this.context.addProductImageURLField}</span>
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
NewProductField.contextType = LanguageContext;
export default NewProductField;
