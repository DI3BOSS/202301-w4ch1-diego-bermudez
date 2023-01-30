import Button from "./components/button/Button";
import Info from "./components/info/Info";

function App() {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>

      <section className="controls">
        <Info />
        <Button />
      </section>
    </>
  );
}

export default App;
