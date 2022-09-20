import Products from "./components/Products/Products";
import Header from "./components/Layouts/Header";
import Subheader from "./components/Layouts/Subheader";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      <Products/>
    </div>
  );
}

export default App;
