import Button from "./components/button/Button";

function App() {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>

      <section className="controls">
        <>
          <p className="info">0 gentlemen pointing at you</p>
          {Button}
        </>
      </section>
    </>
  );
}

export default App;
