import {withRouter} from "react-router-dom";
import * as React from "react";
import "./homepage.scss"
import StoreService from "../../servicios/StoreService";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import Store from "./store/Store";
import {LanguageContext} from "../../constants/LanguageMaps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStoreSlash, faSearch} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/search-bar/SearchBar";

class Stores extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stores: [],
            filteredStores: [],
            loadingEntitiesState: false,
            entityRenderFunction: this.renderStore,
            showingShoppingCart: false,
            dataToShow: true,
            productsInCart: [],
            storeCategory: this.props.location.search
        }
    }

    componentDidMount() {
        const params = new URLSearchParams(this.state.storeCategory);
        const category = params.get('category');
        this.setState({ loadingEntitiesState: true, category: category });
        this.showStores(category);
    }

    renderStore = (store) => <Store store={store}/>

    showStores = (category) =>{
        StoreService().getAllStores(category)
            .then(result => {
                if(result.data.length === 0){
                    this.setState({filteredStores: result.data, stores: result.data, loadingEntitiesState: false, showingShoppingCart: false, dataToShow: false})
                }else {
                    this.setState({
                        filteredStores: result.data,
                        stores: result.data,
                        loadingEntitiesState: false,
                        showingShoppingCart: false,
                        dataToShow: true
                    })
                }
            })
            .catch(error => {
                alert("Uy, no pudimos cargar los comercios")
            });
    }

    parseCategory = () => (this.context.storeCategories[this.state.category]).toLocaleLowerCase();
    getStoresTitleText = () => !!this.state.category ? 'Estos son los comercios de la categoria ' + this.parseCategory(this.state.category) : 'Estos son nuestros comercios'

    updateEntitiesSearch = (filterText) => {
        let filteredStoresWithText = this.state.stores.filter(store => store.storeName.includes(filterText))
        this.setState({filteredStores: filteredStoresWithText})
    }

    render() {
        return(
            <div className="homepage">
                <div className="entities-panel">
                    {this.state.dataToShow && <SearchBar headerTitleText={this.getStoresTitleText()} updateSearch={this.updateEntitiesSearch}/>}
                    {this.state.loadingEntitiesState && <LoadingSpinner isLoading={this.state.loadingEntitiesState}/>}
                    {!this.state.loadingEntitiesState && !this.state.showingShoppingCart && this.state.dataToShow &&
                        <div className="entities">
                            {this.state.filteredStores.map(store => this.renderStore(store))}
                        </div>
                    }
                    {!this.state.dataToShow && !this.state.loadingEntitiesState &&
                    <div className="no-products">
                        <FontAwesomeIcon icon={faStoreSlash}/>
                        <span>{this.context.noStores}</span>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
Stores.contextType = LanguageContext;

export default withRouter(Stores);