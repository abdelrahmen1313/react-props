import MyNavbar from './components/Navbar.jsx';
import PlayersList from './components/PlayersList.jsx';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <section>
        <h4 className='section-title'>NBA PLAYERS OF THE WEEK</h4>
        <hr/>
      <PlayersList />
      </section>
    </div>
  );
}

export default App;