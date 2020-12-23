import * as AiIcons from "react-icons/ai";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Tugas13 = () => {
    const [inputNama, setInputNama] = useState();
    const [inputHarga, setInputHarga] = useState();
    const [inputBerat, setInputBerat] = useState();
    const [listBuah, setListBuah] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editNama, setEditNama] = useState();
    const [editHarga, setEditHarga] = useState();
    const [editBerat, setEditBerat] = useState();
    const [editID, setEditID] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let input = {
            name: inputNama,
            price: inputHarga,
            weight: inputBerat
        };
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
            .then((res) => {
                setListBuah([...listBuah, input]);
            })
        
    }

    const handleEdit = (event) => {
        event.preventDefault();
        setEditing(false);
        let edit = {
            id: editID,
            name: editNama,
            price: editHarga,
            weight: editBerat
        };
        let array = listBuah;
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${editID}`, edit)
            .then(res => {
                let buah = listBuah.find((item) => item.id === editID);
                array.splice(listBuah.indexOf(buah), 1, edit);
                setListBuah([...array]);
            })
    }

    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then((res) => setListBuah(res.data))
    }, []);

    return (
        <div className="div-tugas12">
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
                        {listBuah.map((item,index) => 
                            <tr className="table-row-child" key={index+1}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{(item.weight/1000)} kg</td>
                                <td>
                                    <button className="button" value={index} 
                                    onClick={(event) => {
                                        setEditNama(item.name);
                                        setEditHarga(item.price);
                                        setEditBerat(item.weight);
                                        setEditing(true);
                                        setEditID(item.id);
                                    }}>edit</button>
                                    <button className="button" value={item.id} 
                                    onClick={(event) => {
                                        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${event.target.value}`)
                                            .then(res => {
                                                let buah = listBuah.find((item) => item.id === event.target.value);
                                                let array = [...listBuah];
                                                array.splice(listBuah.indexOf(buah), 1);
                                                setListBuah([...array]);
                                            })
                                    }}>delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="form-tambah">
                <h1>Menambahkan Buah</h1>
                <form onSubmit={handleSubmit}>
                    <label for="namaBuah" className="label-tambah">Nama Buah</label><br />
                    <input type="text" name="namaBuah" className="input-tambah" value={inputNama} 
                    onChange={(event) => setInputNama(event.target.value)}/><br />
                    <label for="hargaBuah" className="label-tambah">Harga Buah</label><br />
                    <input type="text" name="hargaBuah" className="input-tambah" value={inputHarga} 
                    onChange={(event) => setInputHarga(event.target.value)}/><br />
                    <label for="beratBuah" className="label-tambah">Berat Buah</label><br />
                    <input type="text" name="beratBuah" className="input-tambah" value={inputBerat} 
                    onChange={(event) => setInputBerat(event.target.value)}/><br />
                    <input type="submit" value="Tambahkan" className="submit-tambah"/>
                </form>
            </div>
            {editing ? 
                <div className="form-edit">
                    <button className="close-edit" onClick={() => setEditing(false)}><AiIcons.AiFillCloseCircle /></button>
                    <h1>Mengubah Buah</h1>
                    <form onSubmit={handleEdit}>
                        <label for="namaBuah" className="label-tambah">Nama Buah</label><br />
                        <input type="text" name="namaBuah" className="input-tambah" value={editNama} 
                        onChange={(event) => setEditNama(event.target.value)}/><br />

                        <label for="hargaBuah" className="label-tambah">Harga Buah</label><br />
                        <input type="text" name="hargaBuah" className="input-tambah" value={editHarga} 
                        onChange={(event) => setEditHarga(event.target.value)}/><br />

                        <label for="beratBuah" className="label-tambah">Berat Buah</label><br />
                        <input type="text" name="beratBuah" className="input-tambah" value={editBerat} 
                        onChange={(event) => setEditBerat(event.target.value)}/><br />

                        <input type="submit" value="Ubah" className="submit-tambah"/>
                    </form>
                </div> : null
            }
        </div>
    )
}

export default Tugas13;