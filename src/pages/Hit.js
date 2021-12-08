import React from 'react'
import {Highlight} from 'react-instantsearch-dom'
const Hit = ({hit}) => {
    return (
        <div className="card p-2 mb-4">
            <div className="card-header">
                {hit.title}

                {/* <Highlight className="highlight" attribute="title" hit={hit} /> */}
            </div>
            <div class="card-body">
                {hit.description} 
            </div>
        </div>
    )
}

export default Hit
