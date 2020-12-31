import axios from 'axios';
import React, {useState, useEffect, createContext} from 'react';

export const BooksContext = createContext();
export const SearchContext = createContext();

const BooksProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [searchList, setSearchList] = useState([])
    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/books`)
            .then((response) => {
                setBooks(response.data);
                setSearchList(response.data);
            })
    }, []);
    return (
        <BooksContext.Provider value={[books, setBooks]}>
            <SearchContext.Provider value={[searchList, setSearchList]}>
                {props.children}
            </SearchContext.Provider>
        </BooksContext.Provider>
    )
}

export default BooksProvider;