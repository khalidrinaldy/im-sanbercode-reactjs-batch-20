import React, { Component } from 'react';

export default class Tugas9 extends Component {
    render() {
        return (
            <div className="form-beli-buah">
                <h1>Form Pembelian Buah</h1>
                <form>
                <label for="nama-pelanggan"><b>Nama Pelanggan</b></label>
                <input type="text" name="nama-pelanggan" id="nama-pelanggan"/><br /><br /><br />
        
                <label for="list-buah"><b>Daftar Buah</b></label>
                <input type="checkbox" id="buah1" name="buah1" value="semangka" className="input checkbox"/>
                <label for="buah1" className="buah">Semangka</label><br />
                <input type="checkbox" id="buah2" name="buah2" value="jeruk" className="input checkbox"/>
                <label for="buah2" className="buah">Jeruk</label><br />
                <input type="checkbox" id="buah3" name="buah3" value="nanas" className="input checkbox"/>
                <label for="buah3" className="buah">Nanas</label><br />
                <input type="checkbox" id="buah4" name="buah4" value="salak" className="input checkbox"/>
                <label for="buah4" className="buah">Salak</label><br />
                <input type="checkbox" id="buah5" name="buah5" value="anggur" className="input checkbox"/>
                <label for="buah5" className="buah">Anggur</label><br />
        
                <input type="submit" value="Kirim" className="submit"/>
                </form>
            </div>
        )
    }
}
