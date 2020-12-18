import './App.css';
import Tugas9 from './Tugas-9/Tugas9';
import Tugas10 from './Tugas-10/Tugas10';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500},
];


function App() {
  return (
    <div className="App">
      <Tugas10 dataHargaBuah={dataHargaBuah}/>
      <Tugas9 />
    </div>
  );
}

export default App;
