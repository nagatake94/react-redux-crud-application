
function App() {
  return (
    <div>
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() => {console.log("Clicked")}}/>
    </div>
  );
}

export default App;
