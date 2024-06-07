import {
    Form,
    Button,
    FormGroup
} from 'react-bootstrap'
import React, { useState } from 'react';

function Searchform({addTodo}) {

    const [item, setItem] = useState()

    const addItem = (e) => {
        e.preventDefault()
        addTodo(item)
        setItem('')
        console.log(item);
    }
    return (
        <Form onSubmit={addItem}>
            <FormGroup>
                <Form.Label>
                    Todo work
                </Form.Label>
                <Form.Control type="text" placeholder="Work" value={item} onChange={(e)=>setItem(e.target.value)}>

                </Form.Control>
                <Button type='submit'>Add todo List</Button>
            </FormGroup>
        </Form>
    );
}

export default Searchform;