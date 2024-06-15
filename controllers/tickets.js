const db = require('../db');

exports.getAllTickets = async (req, res) => {
    const sql = 'SELECT * FROM tickets'
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving products.', error: err });
        }
        res.status(200).json(results);
    });
};

exports.insertTickets = async (req, res) => {
    const { title, description, user_id, status_id, priority_id } = req.body;
    const query = 'INSERT INTO tickets (title, description, user_id, status_id, priority_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [title, description, user_id, status_id, priority_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: results.insertId, ...req.body });
    });
};

exports.getTicketById = async (req, res) => {
    const { ticket_id } = req.params;
    const query = 'SELECT * FROM tickets WHERE ticket_id = ?';
    db.query(query, [ticket_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.json(results[0]);
    });
};

exports.updateTicketStatusById = async (req, res) => {
    const { ticket_id } = req.params; 
    const { status_id } = req.body; 
    const query = 'UPDATE tickets SET status_id = ? WHERE ticket_id = ?';
    db.query(query, [status_id, ticket_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.json({ message: `Ticket: ${ticket_id} has been change to status ${status_id} updated successfully` });
    });
};

exports.deleteTicketById = async (req, res) => {
    const { ticket_id } = req.params;
    const query = 'DELETE FROM tickets WHERE ticket_id = ?';
    db.query(query, [ticket_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.json({ message: 'Ticket deleted successfully' });
    });
};

exports.insertUsers = async (req, res) => {
    const { username, password} = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: results.insertId, ...req.body });
    });
};

exports.getAllUsers = async (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getUserById = async (req, res) => {
    const { user_id } = req.params;
    const query = 'SELECT * FROM users WHERE user_id = ?';
    db.query(query, [user_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(results[0]);
    });
};


exports.deleteUserById = async (req, res) => {
    const { user_id } = req.params;
    const query = 'DELETE FROM users WHERE user_id = ?';
    db.query(query, [user_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
            
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: `User id ${user_id} deleted successfully` });
    });
};

exports.getAllStatuses = async (req, res) => {
    db.query('SELECT * FROM ticket_status', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getAllPriorities = async (req, res) => {
    db.query('SELECT * FROM priorities', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};





