const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "HelpDeskAPI API",
      version: "1.0.0",
      description: "Sample API Documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {

        tickets: {
          type: "object",
          required: [
            "title",
            "description",
            "user_id",
            "status_id",
            "priority_id"
          ],
          properties: {
            title: { type: "string", description: "The subject of tickets" },
            description: { type: "string", description: "The detail of tickets" },
            user_id: { type: "integer", description: "The user id" },
            status_id: {type: "integer", description: "The status of a ticket" },
            priority_id: {type: "integer", description: "The priority of a ticket"}
          },
        },
        users: {
          type: "object",
          required: [
              "user_id",
              "username",
              "password",
          ],
          properties: {
            user_id: { type: "integer", description: "The id of a user" },
            username: { type: "string", description: "The username of a user" },
            password: { type: "string", description: "The password of a user" }
          },
        },
      },
    },
  },
  apis: ["./routes/tickets.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };
