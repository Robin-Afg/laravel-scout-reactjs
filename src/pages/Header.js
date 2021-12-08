import React from 'react'
import { InstantSearch, SearchBox } from 'react-instantsearch-dom'
const Header = () => {
    return (
        <div className="container col-md-5">
            <div className="search-box-div">
                <SearchBox translations={{placeholder: 'search for a post ...'}} />
            </div>
            
        </div>
    )
}

export default Header
