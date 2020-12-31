import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {BooksContext, SearchContext} from './Context/BooksProvider';

const BookListEditor = () => {
    const [books, setBooks] = useContext(BooksContext);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [review, setReview] = useState("");
    const [year, setYear] = useState(2020);
    const [page, setPage] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [bookId, setBookId] = useState("");
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useContext(SearchContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        let input = {
            title: title,
            description: desc,
            review: review,
            release_year: year,
            totalPage: page,
            price: price,
            image_url: image
        };
        
        axios.post(`http://backendexample.sanbercloud.com/api/books`, input)
            .then((res) => {
                setBooks([...books, input]);
                setTitle("");
                setDesc("");
                setReview("");
                setYear(2020);
                setPage(0);
                setPrice(0);
                setImage("");
            })
    }

    const handleDelete = (event) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/books/${event.target.value}`)
            .then((res) => {
                let book = books.find((item) => item.id === event.target.value);
                let array = [...books];
                array.splice(books.indexOf(book), 1);
                setBooks([...array]);
            })
        
    }

    const handleEdit = (event) => {
        event.preventDefault();
        let edit = {
            id: bookId,
            title: title,
            description: desc,
            review: review,
            release_year: year,
            totalPage: page,
            price: price,
            image_url: image
        };
        axios.put(`http://backendexample.sanbercloud.com/api/books/${bookId}`, edit)
            .then((res) => {
                let book = books.find((item) => item.id === bookId);
                let array = [...books];
                array.splice(books.indexOf(book), 1, edit);
                setBooks([...array]);
                setTitle("");
                setDesc("");
                setReview("");
                setYear(2020);
                setPage(0);
                setPrice(0);
                setImage("");
            })
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (search.length === 0) {
            setSearchList([...books]);
        } else {
            let filtered = books.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase());
            });
            
            setSearchList(filtered);
        }
    }

    return (
        <div className="booklisteditor">
            <div className="book-table">
                <form className="search" onSubmit={handleSearch}>
                    <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
                    <input type="submit" value="search" className="button"/>
                </form>
                <h1>Daftar Buku</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Review</th>
                            <th>Release Year</th>
                            <th>Total Page</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchList.map((item, index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td>{typeof item.description == "string" ? item.description.substring(0,30) : item.description} ...</td>
                                <td>{item.review}</td>
                                <td>{item.release_year}</td>
                                <td>{item.totalPage}</td>
                                <td>Rp.{item.price},-</td>
                                <td>
                                    <button className="button button-edit" 
                                    onClick={() => {
                                        setBookId(item.id);
                                        setTitle(item.title);
                                        setDesc(item.description);
                                        setReview(item.review);
                                        setYear(item.release_year);
                                        setPage(item.totalPage);
                                        setPrice(item.price);
                                        setImage(item.image_url);
                                    }}>edit</button>
                                    <button className="button button-delete" value={item.id} onClick={handleDelete}>delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="book-editor">
                <h1>Books Form</h1>
                <form onSubmit={bookId !== "" ? handleEdit : handleSubmit}>
                    <label for="title"><b>Label:</b></label>
                    <div className="area"></div>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /><br/>

                    <label for="desc"><b>Description:</b></label>
                    <div className="area"></div>
                    <textarea rows="3" cols="50"  value={desc} onChange={(e)=>setDesc(e.target.value)}/><br />

                    <label for="review"><b>Review:</b></label>
                    <div className="area"></div>
                    <textarea rows="2" cols="50"  value={review} onChange={(e)=>setReview(e.target.value)}/><br />

                    <label for="year"><b>Release Year:</b></label>
                    <div className="area"></div>
                    <input type="number" min="1980"  value={year} onChange={(e)=>setYear(e.target.value)}/><br />

                    <label for="page"><b>Total Page:</b></label>
                    <div className="area"></div>
                    <input type="number"  value={page} onChange={(e)=>setPage(e.target.value)}/><br />

                    <label for="price"><b>Price:</b></label>
                    <div className="area"></div>
                    <input type="number"  value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>

                    <label for="image"><b>Image Url:</b></label>
                    <div className="area"></div>
                    <textarea rows="2" cols="50"  value={image} onChange={(e)=>setImage(e.target.value)}/><br/>

                    <input type="submit" value="Submit"  className="button form-submit" />
                </form>
            </div>
        </div>
    )
}

export default BookListEditor;