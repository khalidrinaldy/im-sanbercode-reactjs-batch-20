import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {FruitContext, NameFruit, PriceFruit, WeightFruit, IdFruit} from './FruitProvider';


const Table = () => {
    const [fruits, setFruits] = useContext(FruitContext);
    const [inputName, setInputName] = useContext(NameFruit);
    const [inputPrice, setInputPrice] = useContext(PriceFruit);
    const [inputWeight, setInputWeight] = useContext(WeightFruit);
    const [editId, setEditId] = useContext(IdFruit);

    const handleDelete = (event) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${event.target.value}`)
            .then(res => {
            let fruit = fruits.find((item) => item.id === event.target.value);
            let array = [...fruits];
            array.splice(fruits.indexOf(fruit), 1);
            setFruits([...array]);
            })
    }

    return (
        <div className="daftar-buah">
            <h1>Tabel Harga Buah</h1>
                <table>
                    <thead>
                        <tr className="table-row-header">
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fruits.map((item, index) => 
                            <tr className="table-row-child" key={index+1}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{(item.weight/1000)} kg</td>
                                <td>
                                    <button className="button" value={index} 
                                    onClick={() => {
                                        setEditId(item.id);
                                        setInputName(item.name);
                                        setInputPrice(item.price);
                                        setInputWeight(item.weight);
                                    }}>Edit</button>
                                    <button className="button" value={item.id} onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
        </div>
    )
}

export default Table;