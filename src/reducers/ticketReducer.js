export default function ticketReducer(state, action) {
    switch (action.type) { 
        case 'ADD_TICKET':
            return { ...state, tickets: [...state.tickets, action.payload] };
        case 'UPDATE_TICKET':
            return { ...state, tickets: state.tickets.map(ticket => ticket.id === action.payload.id ? action.payload : ticket) };
        case 'DELETE_TICKET':
            return { ...state, tickets: state.tickets.filter(ticket => ticket.id !== action.payload) };
        case 'SET_EDITING_TICKET':
            return {...state, editingTicket: action.payload };
        case 'CLEAR_EDITING_TICKET':
            return {...state, editingTicket: null };
        default:
            return state;
    }
 }