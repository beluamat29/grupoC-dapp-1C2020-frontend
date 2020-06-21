import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
    render() {
        return(
            <div className="stores-header-information-panel">
                <div className="stores-header-information">
                    <div className="stores-header-title">
                        {this.props.headerTitleText}
                    </div>
                    <div className="search-bar">
                        <input type="text" onChange={(event) => this.props.updateSearch(event.target.value)}/>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;