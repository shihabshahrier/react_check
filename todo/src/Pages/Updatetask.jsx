import React from 'react'
import Form from '../components/form'
import { useParams } from 'react-router-dom'

export default function Updatetask() {
    const { id } = useParams();
    return (
        <div>
            <h1 className='Title-Text'>Update Task</h1>
            <p className='p-Text'>{id}</p>
            <Form type="Update" id={id} />
        </div>

    )
}
