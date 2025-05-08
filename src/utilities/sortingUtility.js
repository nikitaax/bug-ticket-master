export const sortTickets = (tickets, preference) => { 
    switch (preference) {
        case "High to Low":
            return [...tickets].sort((a, b) => b.priority - a.priority);
        case "Low to High": 
            return [...tickets].sort((a, b) => a.priority - b.priority);
        default:
            return tickets;
    }
}