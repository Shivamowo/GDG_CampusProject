const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'users.json');

// Helper to read users from file
function readUsers() {
  if (!fs.existsSync(filePath)) return {};
  const data = fs.readFileSync(filePath, 'utf-8');
  return data ? JSON.parse(data) : {};
}

// Helper to write users to file
function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

function createOrUpdate(user) {
  const users = readUsers();
  users[user.id] = user;
  writeUsers(users);
  return user;
}

module.exports = { createOrUpdate, readUsers };