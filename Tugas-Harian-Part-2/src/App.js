import './App.css';
//import Tugas9 from './Tugas-9/Tugas9';
//import Tugas10 from './Tugas-10/Tugas10';
//import Tugas11 from './Tugas-11/Tugas11';
//import Tugas12 from './Tugas-12/Tugas12';
//import Tugas13 from './Tugas-13/Tugas13';
//import Main from './Tugas-14/Main';
import Tugas15 from './Tugas-15/Tugas15';
import ThemeProvider, {ThemeContext} from './Tugas-15/ThemeContext';

/*let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500},
];*/


function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        <Tugas15 />
      </ThemeProvider>
      {/*<Main />
      <Tugas13 />
      <Tugas12 />
      <Tugas11 />
      <Tugas10 dataHargaBuah={dataHargaBuah}/>
      <Tugas9 />{*/}
    </div>
  );
}

export default App;
