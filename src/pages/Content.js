import React from 'react'
import Hit from './Hit';
import {Hits} from 'react-instantsearch-dom'
const Content = () => {
    return (
        <div className="col-md-4">
            <Hits hitComponent={Hit} />
        </div>
    )
}

export default Content
