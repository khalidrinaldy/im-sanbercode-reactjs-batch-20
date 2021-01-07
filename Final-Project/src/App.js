import './App.css';
import MainLayout from './components/MainLayout';
import {MovieProvider}  from './components/Context/MovieProvider';
import {GameProvider}  from './components/Context/GameProvider';
import {UserProvider}  from './components/Context/UserProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MovieProvider>
          <GameProvider>
            <MainLayout />
          </GameProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
