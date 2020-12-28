import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {FruitContext, NameFruit, PriceFruit, WeightFruit, IdFruit} from './FruitProvider';


const Form = () => {
    const [fruits, setFruits] = useContext(FruitContext);
    const [inputName, setInputName] = useContext(NameFruit);
    const [inputPrice, setInputPrice] = useContext(PriceFruit);
    const [inputWeight, setInputWeight] = useContext(WeightFruit);
    const [editId, setEditId] = useContext(IdFruit);

    const handleSubmit = (event) => {
        event.preventDefault();
        let input = {
            name: inputName,
            price: inputPrice,
            weight: inputWeight
        };
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
            .then((res) => {
                setFruits([...fruits, input]);
                setInputName("");
                setInputPrice("");
                setInputWeight("");
            })
    }

    const handleEdit = (event) => {
        event.preventDefault();
        let edit = {
            id: editId,
            name: inputName,
            price: inputPrice,
            weight: inputWeight
        };
        let array = fruits;
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${editId}`, edit)
            .then(res => {
                let buah = fruits.find((item) => item.id === editId);
                array.splice(fruits.indexOf(buah), 1, edit);
                setFruits([...array]);
                setInputName("");
                setInputPrice("");
                setInputWeight("");
            })
    }
    return (
        <div className="form-tambah">
            <h1>Menambahkan Buah</h1>
                <form onSubmit={editId !== "" ? handleEdit : handleSubmit}>
                    <label for="namaBuah" className="label-tambah">Nama Buah</label><br />
                    <input type="text" name="namaBuah" className="input-tambah" value={inputName} 
                    onChange={(event) => setInputName(event.target.value)}/><br />
                    <label for="hargaBuah" className="label-tambah">Harga Buah</label><br />
                    <input type="text" name="hargaBuah" className="input-tambah" value={inputPrice} 
                    onChange={(event) => setInputPrice(event.target.value)}/><br />
                    <label for="beratBuah" className="label-tambah">Berat Buah</label><br />
                    <input type="text" name="beratBuah" className="input-tambah" value={inputWeight} 
                    onChange={(event) => setInputWeight(event.target.value)}/><br />
                    <input type="submit" value="Tambahkan" className="submit-tambah"/>
                </form>
        </div>
    )
}

export default Form;