const express = require('express');
const router = express.Router();

const {
    getAllTickets,
    getTicketById,
    insertTickets,
    updateTicketStatusById,
    deleteTicketById,
    insertUsers, 
    getAllUsers, 
    getUserById, 
    deleteUserById, 
    getAllStatuses, 
    getAllPriorities
    } = require('../controllers/tickets');

 /**
 * @swagger
 * /tickets:
 *  get:
 *     summary: Get all tickets
 *     description: Get all tickets
 *     responses:
 *       200:
 *         description: An array of tickets objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/tickets'
 *       500:
 *         description: Some error happened
 */
router.get('/tickets', getAllTickets);

/**
 * @swagger
 * /tickets/{ticket_id}:
 *  get:
 *     summary: Get a ticket by id
 *     description: Get a ticket by id
 *     parameters:
 *       - in: path
 *         name: ticket_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the ticket to get
 *     responses:
 *       200:
 *         description: A ticket object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/repairs'
 *       404:
 *         description: The ticket was not found
 *       500:
 *         description: Some error happened
 */
router.get('/tickets/:ticket_id', getTicketById);

/**
 * @swagger
 * /tickets:
 *  post:
 *     summary: Insert a new ticket
 *     description: Insert a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tickets'
 *     responses:
 *       201:
 *         description: The ticket was created successfully
 *       400:
 *         description: The request was invalid
 *       500:
 *         description: Some error happened
 */
router.post('/tickets', insertTickets);

/**
 * @swagger
 * /tickets/{ticket_id}:
 *  put:
 *     summary: Update a ticket status by id
 *     description: Update a ticket status by id
 *     parameters:
 *       - in: path
 *         name: ticket_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the ticket status to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tickets'
 *     responses:
 *       200:
 *         description: The product was updated successfully
 *       400:
 *         description: The request was invalid
 *       404:
 *         description: The product was not found
 *       500:
 *         description: Some error happened
 */
router.put('/tickets/:ticket_id/', updateTicketStatusById);

/**
 * @swagger
 * /tickets/{ticket_id}:
 *  delete:
 *     summary: Delete a ticket by id
 *     description: Delete a ticket by id
 *     parameters:
 *       - in: path
 *         name: ticket_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the ticket to delete
 *     responses:
 *       200:
 *         description: The ticket was deleted successfully
 *       404:
 *         description: The ticket was not found
 *       500:
 *         description: Some error happened
 */
router.delete('/tickets/:ticket_id', deleteTicketById);

/**
 * @swagger
 * /users:
 *  post:
 *     summary: Insert a new user
 *     description: Insert a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/users'
 *     responses:
 *       201:
 *         description: The user was created successfully
 *       400:
 *         description: The request was invalid
 *       500:
 *         description: Some error happened
 */    
router.post('/users', insertUsers);

 /**
 * @swagger
 * /users:
 *  get:
 *     summary: Get all users
 *     description: Get all users
 *     responses:
 *       200:
 *         description: An array of users objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/users'
 *       500:
 *         description: Some error happened
 */
router.get('/users', getAllUsers);

/**
 * @swagger
 * /users/{user_id}:
 *  get:
 *     summary: Get a user by id
 *     description: Get a user by id
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to get
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: The ticket was not found
 *       500:
 *         description: Some error happened
 */
router.get('/users/:user_id', getUserById);

/**
 * @swagger
 * /users/{user_id}:
 *  delete:
 *     summary: Delete a user by id
 *     description: Delete a user by id
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to delete
 *     responses:
 *       200:
 *         description: The user was deleted successfully
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */
router.delete('/users/:user_id', deleteUserById);

 /**
 * @swagger
 * /statuses:
 *  get:
 *     summary: Get all statuses
 *     description: Get all statuses
 *     responses:
 *       200:
 *         description: An array of statuses objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/statuses'
 *       500:
 *         description: Some error happened
 */
router.get('/statuses', getAllStatuses);

 /**
 * @swagger
 * /priorities:
 *  get:
 *     summary: Get all priorities
 *     description: Get all priorities
 *     responses:
 *       200:
 *         description: An array of priorities objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/priorities'
 *       500:
 *         description: Some error happened
 */
router.get('/priorities', getAllPriorities);

module.exports = router;