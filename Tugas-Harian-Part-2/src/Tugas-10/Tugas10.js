import React, { Component } from 'react'

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
                    {this.props.dataHargaBuah.map((item) => 
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
