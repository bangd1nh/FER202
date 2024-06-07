function ListItem({todos,deleteTodo}) {
    return (
        <ul>
            {todos.map((i,index) => (
                <>
                <li key={index}>{i}</li>
                <button onClick={()=>deleteTodo(i)}>delete</button>
                </>
                
            ))}
        </ul>
    );
}

export default ListItem;