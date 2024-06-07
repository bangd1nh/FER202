import { useState } from "react";

function SearchForm({ searchResult }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        const input = e.target.value
        setInput(input)
        searchResult(input);
    };
    return (
        <>
            <lable>
                Search
            </lable>
            <input type="text" value={input} onChange={handleChange}>
            </input>


        </>
    );
}

export default SearchForm;