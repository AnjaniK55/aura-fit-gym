const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DATA_DIR = path.join(__dirname, '../data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const GUEST_PASS_FILE = path.join(DATA_DIR, 'guest_passes.json');

// Ensure data folder and mock JSON files exist
const initMockDB = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
  }
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([]));
  }
  if (!fs.existsSync(GUEST_PASS_FILE)) {
    fs.writeFileSync(GUEST_PASS_FILE, JSON.stringify([]));
  }
};

const readJSON = (filePath) => {
  initMockDB();
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    return [];
  }
};

const writeJSON = (filePath, data) => {
  initMockDB();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

exports.findUserByEmail = async (email) => {
  const users = readJSON(USERS_FILE);
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
};

exports.findUserById = async (id) => {
  const users = readJSON(USERS_FILE);
  return users.find(u => u._id === id) || null;
};

exports.createUser = async ({ username, email, password }) => {
  const users = readJSON(USERS_FILE);
  
  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    _id: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    username,
    email: email.toLowerCase(),
    password: hashedPassword,
    role: 'member',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  writeJSON(USERS_FILE, users);

  // Return a copy without password
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

exports.createInquiry = async ({ name, email, phone, tier, message }) => {
  const inquiries = readJSON(INQUIRIES_FILE);

  const newInquiry = {
    _id: `inquiry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    email: email.toLowerCase(),
    phone: phone || '',
    tier: tier || 'Elite Access',
    message,
    createdAt: new Date().toISOString()
  };

  inquiries.push(newInquiry);
  writeJSON(INQUIRIES_FILE, inquiries);
  return newInquiry;
};

exports.createGuestPass = async ({ name, email, phone, age, fitnessGoal, visitDate, passId }) => {
  const passes = readJSON(GUEST_PASS_FILE);

  const newPass = {
    _id: `pass_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    email: email.toLowerCase(),
    phone,
    age: parseInt(age, 10),
    fitnessGoal,
    visitDate,
    passId,
    createdAt: new Date().toISOString()
  };

  passes.push(newPass);
  writeJSON(GUEST_PASS_FILE, passes);
  return newPass;
};

exports.matchPassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};
