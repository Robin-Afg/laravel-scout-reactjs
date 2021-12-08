import React from 'react'
import algoliasearch from 'algoliasearch'
import {InstantSearch} from 'react-instantsearch-dom'
import Header from './Header'
import Content from './Content'
import './styles.css'

const Search = () => {
    
    const searchClient = algoliasearch("KPOB5HKJB9","39f7717525d512ab76e7e66327979528");

    return (
        <InstantSearch searchClient={searchClient} indexName="posts">
            <Header />
            <Content />   
        </InstantSearch>
    );
}

export default Search
