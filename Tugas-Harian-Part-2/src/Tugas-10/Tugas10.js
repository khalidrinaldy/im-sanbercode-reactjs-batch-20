import React, { Component } from 'react'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
];

export default class Tugas10 extends Component {
    render() {
        return (
            <div className="daftar-buah">
                <h1>Tabel Harga Buah</h1>
                <table>
                    <tr className="table-row-header">
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    {dataHargaBuah.map((item) => 
                        <tr className="table-row-child">
                            <td>{item.nama}</td>
                            <td>{item.harga}</td>
                            <td>{(item.berat)/1000} kg</td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
