import * as React from "react";
import {productCategories} from "../../../../constants/Constants";


class NewProductField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            availableStock: 1
        }
    }

    updateAvailableStock = (number) => {
        this.setState({availableStock: Math.max(1, number)});
        this.props.onUpdate('stock', Math.max(1, number));
    }

    generateEntityCheckbox = (entity, onSelectEntity) => {
        return (
            //TODO: VER QUE SOLO SE PUEDA SELECCIONAR UNA CATEGORIA
            <div className="rubro-checkbox">
                <input type="checkbox" value={entity.value} onClick={(event) => onSelectEntity(event.target.value)}/>
                <label className="checkbox">
                    {entity.label}
                </label>
            </div>
        )
    }

    render() {
        return(
            <div className="modal-card-body">
                <div className="seccion-de-campos">
                    <div className="campo-a-rellenar">
                        <label>
                            Nombre
                        </label>
                        <input type="text" id="productName" name="productName"
                               onChange={(event) => this.props.onUpdate('productName', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Marca
                        </label>
                        <input type="text" id="productBrand" name="productBrand"
                               onChange={(event) => this.props.onUpdate('productBrand', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Precio
                        </label>
                        <input type="text" id="productPrice" name="productPrice"
                               onChange={(event) => this.props.onUpdate('productPrice', event.target.value)}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Stock disponible
                        </label>
                        <input type="number" value={this.state.availableStock} id="stock" name="stock"
                               onChange={(event) => this.updateAvailableStock(parseInt(event.target.value))}/>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            Categoría
                        </label>
                        <div className="categories-grid">
                            {productCategories.map(category => this.generateEntityCheckbox(category, this.props.onAddingCategory))}
                        </div>
                    </div>
                    <div className="campo-a-rellenar">
                        <label>
                            <span>URL de la imagen del producto</span>
                        </label>
                        <input type="text" value={this.state.productImageURL} id="productImageURL" name="productImageURL"
                               onChange={(event) => this.props.onUpdate('productImageURL', event.target.value)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProductField;
