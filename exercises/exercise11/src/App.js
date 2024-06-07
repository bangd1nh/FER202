// import Addtodo from "./Component/Addtodo";
// import ListItem from "./Component/ListItem";
import SearchForm from "./Component/Searchform";
import ResultList from "./Component/ResultList";
import { useState } from "react";
function App() {

  // bai 1
  // const [todos, setTodos] = useState([]);

  // const addTodo = (text) => {
  //   const newTodos = [...todos, text];
  //   setTodos(newTodos);
  // };

  // const deleteTodo = (todo) => {
  //   const newTodos = todos.filter(i=>(todo !== i))
  //   setTodos(newTodos)
  // }

  // return (
  //   <>
  //     <Addtodo addTodo={addTodo}></Addtodo>
  //     <ListItem todos={todos} deleteTodo={deleteTodo}></ListItem>
  //   </>
  // );

  // bai2
  const items = ['React','Nodejs','MongoDB','Express','Angular','VueJs']
  const [result,setResult] = useState(items)

  const searchResult = (input) =>{
    const resultItem = items.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    setResult(resultItem);
  }
  return(
    <>
    <SearchForm searchResult={searchResult}></SearchForm>
    <ResultList result={result}></ResultList>
    </>
    
  )
}

export default App;
