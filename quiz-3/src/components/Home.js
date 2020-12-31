import React, {useState, useEffect, useContext} from 'react';
import {BooksContext} from './Context/BooksProvider';

const Home = () => {
    const [books, setBooks] = useContext(BooksContext);

    return (
        <div className="home">
            <h1>Daftar Buku-buku Pilihan</h1>
            <div className="books-list">
                {books.map((item) => 
                    <div className="book">
                        <h3>{item.title}</h3>
                        <div className="book-design">
                            <img src={item.image_url} />
                            <div className="book-sale">
                                <h4>Tahun Terbit : {item.release_year}</h4>
                                <h4>Harga : Rp.{item.price},-</h4>
                                <h4>Jumlah Halaman : {item.totalPage}</h4>
                            </div>
                        </div>
                        <p><b>Deskripsi : </b>{item.description}</p>
                        <p><b>Ulasan    : </b>{item.review}</p>
                        <hr />
                    </div>
                )}
            </div>
            <footer>
                <h5>copyright &copy; 2020 by Sanbercode</h5>
            </footer>
        </div>
    )
}

export default Home;