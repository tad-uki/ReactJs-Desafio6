//@ts-check
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {

  function onAdd(){
    alert(`Se añadieron los items a tu Carrito!`)
  }

  const array = [
    {id: 1, title: "Remera 1", description: "Remera deportiva", price: 1100, imageUrl: ""},
    {id: 2, title: "Remera 2", description: "Remera estilizada", price: 1300, imageUrl: ""},
    {id: 3, title: "Remera 3", description: "Remera de fútbol", price: 1500, imageUrl: ""}
]

  return (
    <main> 

      <NavBar/>
      
      {/*<ItemListContainer/>

      <ItemCount stock={5} initial={1} onAdd={onAdd}/>*/}

      <ItemDetailContainer/>

    </main>
  );
}

export default App;
