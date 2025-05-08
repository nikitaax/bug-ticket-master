import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react';

export default function TicketForm({dispatch, editingTicket}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    useEffect(() => {
        if (editingTicket) {
            setTitle(editingTicket.title);
            setDescription(editingTicket.description);
            setPriority(editingTicket.priority);
        }
        else 
            clearForm();
    }, [editingTicket]);

    const priorityLabels = {
        1: 'Low',
        2: "Medium",
        3: 'High'
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {  
        e.preventDefault();   // Prevent the default form submission behavior

        const ticketData = {
            id: editingTicket? editingTicket.id : new Date().toISOString(), // Generate a unique ID based on the current timestamp
            title,
            description,
            priority
        }
        clearForm();

        dispatch({type: editingTicket? 'UPDATE_TICKET' : 'ADD_TICKET', payload: ticketData}); // Dispatch the action to add the ticket
    }

    const handleCancelEdit = () => {
        dispatch({ type: 'CLEAR_EDITING_TICKET' });
        clearForm();
    }


    return (
        <form className='ticket-form' onSubmit= {handleSubmit}>
            <div>
                <label> Title</label>
                <input type="text" value={title} className='form-input' onChange={(e) => setTitle(e.target.value)} />
            </div>    
            <div>
                <label> Description</label>
                <textarea type="text" value={description} className='form-input' onChange={(e) => setDescription(e.target.value)} > </textarea>
            </div>   
            <fieldset className='priority-fieldset'>
                <legend> Priority</legend>
                {
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input type="radio" value={value} checked={priority === value} className='priority-input' onChange={(e) => setPriority(e.target.value)} >
                                
                            </input>
                            {label} </label>
                    ))
                }
            </fieldset>
            <button type="submit" className='button'> Submit</button>
            {editingTicket && <button type="button" className='button' onClick={handleCancelEdit}> Cancel Edit</button>}
        </form>
    
    )
}