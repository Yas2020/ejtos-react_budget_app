import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>
        {/* <span>Budget: ${budget}</span> */}
        Budget: $
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        {/* <button style={{margin: '1px 20px'}}> Set </button> */}
        </div>
    );
};

export default Budget;      