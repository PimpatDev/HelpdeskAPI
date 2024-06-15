-- Here is the file to create simple mysql database and sample data

-- Create the database
CREATE DATABASE it_helpdesk;

-- Use the database
USE it_helpdesk;

-- Create Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'technician', 'user') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Ticket_Status table
CREATE TABLE Ticket_Status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL
);

-- Create Priorities table
CREATE TABLE Priorities (
    priority_id INT AUTO_INCREMENT PRIMARY KEY,
    priority_name VARCHAR(50) NOT NULL
);

-- Create Tickets table
CREATE TABLE Tickets (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    user_id INT,
    status_id INT,
    priority_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (status_id) REFERENCES Ticket_Status(status_id),
    FOREIGN KEY (priority_id) REFERENCES Priorities(priority_id)
);


-- Insert sample data into Users
INSERT INTO Users (username, password, email, full_name, role) VALUES
('john_doe', 'password123', 'john.doe@example.com', 'John Doe', 'user'),
('jane_smith', 'password456', 'jane.smith@example.com', 'Jane Smith', 'technician'),
('admin_user', 'password789', 'admin@example.com', 'Admin User', 'admin');

-- Insert sample data into Ticket_Status
INSERT INTO Ticket_Status (status_name) VALUES
('Open'),
('In Progress'),
('Resolved'),
('Closed');

-- Insert sample data into Priorities
INSERT INTO Priorities (priority_name) VALUES
('Low'),
('Medium'),
('High'),
('Critical');

-- Insert sample data into Tickets
INSERT INTO Tickets (title, description, user_id, status_id, priority_id) VALUES
('Cannot connect to Wi-Fi', 'I am unable to connect to the office Wi-Fi network since this morning.', 1, 1, 3),
('Software installation request', 'Need to install Adobe Photoshop on my workstation.', 2, 1, 2),
('System crash issue', 'My computer crashed unexpectedly and I lost all my work.', 1, 2, 4);
