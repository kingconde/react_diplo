import "./styles/style.scss";
import Menu from "./component/Menu";

function App() {
  return (
    <div>
      <header>
        <h1>Gloflox</h1>
      </header>
      <hr></hr>
      <Menu />
      <footer className="s-center">
            <p>Derechos reservados &copy; 2021</p>
        </footer>
    </div>
  );
}

export default App;
