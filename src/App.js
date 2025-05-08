import logo from './logo.svg';
import './App.css';
import './styles.css';
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import TicketList from './components/TicketList';

function App() {

  const initialState = { tickets: [] , editingTicket: null};
  
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1> Bug Ticket Master</h1>
        <TicketForm dispatch={ dispatch} editingTicket= {state.editingTicket} />

        {state.tickets.length > 0 && (
          <div className='results'>
            <h2> All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
            </div>
        )}

      </div>
    </div>
  );
}

export default App;
