"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
function getUsers(req, res) {
    // Simulate fetching users from a database
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    // Send the users as a JSON response
    res.json(users);
}
