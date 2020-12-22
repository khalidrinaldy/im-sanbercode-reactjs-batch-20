import React, { Component } from 'react';
import * as AiIcons from "react-icons/ai";

export default class Tugas12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            harga: "",
            berat: "",
            listBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500},
            ],
            editing: false,
            editIndex: "",
            editNama: "",
            editHarga: "",
            editBerat: ""
        }

        this.handleChangeNama = this.handleChangeNama.bind(this);
        this.handleChangeHarga = this.handleChangeHarga.bind(this);
        this.handleChangeBerat = this.handleChangeBerat.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.editing = this.editing.bind(this); 
    }

    handleChangeNama(event) {
        this.setState({nama: event.target.value});
    }

    handleChangeHarga(event) {
        this.setState({harga: event.target.value});
    }

    handleChangeBerat(event) {
        this.setState({berat: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            listBuah: [...this.state.listBuah, {
                nama: this.state.nama,
                harga: this.state.harga,
                berat: this.state.berat
            }],
            nama: "",
            harga: "",
            berat: ""
        });
    }

    handleRemove(event) {
        let array = this.state.listBuah;
        array.splice(event.target.value,1);
        this.setState({listBuah: array});
    }

    editing() {
        this.setState({editing: !this.state.editing});
    }

    handleEdit(event) {
        event.preventDefault();
        let array = this.state.listBuah;
        array.splice(this.state.editIndex, 1, {
            nama: this.state.editNama,
            harga: this.state.editHarga,
            berat: this.state.editBerat
        });
        this.setState({
            listBuah: array,
            editing: !this.state.editing
        });
    }

    render() {
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
                            {this.state.listBuah.map((item,index) => 
                                <tr className="table-row-child" key={index+1}>
                                    <td>{item.nama}</td>
                                    <td>{item.harga}</td>
                                    <td>{(item.berat)/1000} kg</td>
                                    <td>
                                        <button className="button" value={index} 
                                        onClick={() => {
                                            this.setState({
                                                editNama: item.nama,
                                                editHarga: item.harga,
                                                editBerat: item.berat,
                                                editIndex: index,
                                                editing: !this.state.editing
                                            })
                                        }}>edit</button>
                                        <button className="button" value={index} onClick={this.handleRemove}>delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="form-tambah">
                    <h1>Menambahkan Buah</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label for="namaBuah" className="label-tambah">Nama Buah</label><br />
                        <input type="text" name="namaBuah" className="input-tambah" value={this.state.nama} onChange={this.handleChangeNama}/><br />
                        <label for="hargaBuah" className="label-tambah">Harga Buah</label><br />
                        <input type="text" name="hargaBuah" className="input-tambah" value={this.state.harga} onChange={this.handleChangeHarga}/><br />
                        <label for="beratBuah" className="label-tambah">Berat Buah</label><br />
                        <input type="text" name="beratBuah" className="input-tambah" value={this.state.berat} onChange={this.handleChangeBerat}/><br />
                        <input type="submit" value="Tambahkan" className="submit-tambah"/>
                    </form>
                </div>
                {this.state.editing ? 
                    <div className="form-edit">
                        <button className="close-edit" onClick={() => this.setState({editing: !this.state.editing})}><AiIcons.AiFillCloseCircle /></button>
                        <h1>Mengubah Buah</h1>
                        <form onSubmit={this.handleEdit}>
                            <label for="namaBuah" className="label-tambah">Nama Buah</label><br />
                            <input type="text" name="namaBuah" className="input-tambah" value={this.state.editNama} 
                            onChange={(event) => {this.setState({editNama: event.target.value})}}/><br />

                            <label for="hargaBuah" className="label-tambah">Harga Buah</label><br />
                            <input type="text" name="hargaBuah" className="input-tambah" value={this.state.editHarga} 
                            onChange={(event) => {this.setState({editHarga: event.target.value})}}/><br />

                            <label for="beratBuah" className="label-tambah">Berat Buah</label><br />
                            <input type="text" name="beratBuah" className="input-tambah" value={this.state.editBerat} 
                            onChange={(event) => {this.setState({editBerat: event.target.value})}}/><br />

                            <input type="submit" value="Ubah" className="submit-tambah"/>
                        </form>
                    </div> : null
                }
            </div>
        )
    }
}
