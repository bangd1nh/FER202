function resultList({result}) {
    return (  
        <ul>
            {result.map((r,index)=>(<li key={index}>{r}</li>))}
        </ul>
    );
}

export default resultList;