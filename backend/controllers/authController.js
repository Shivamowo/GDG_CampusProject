const { OAuth2Client } = require('google-auth-library');
const { createOrUpdate } = require('../models/User');
const CLIENT_ID = '729602150517-5i7sn1j895l8nni51l9ao8bdmrj0i7gp.apps.googleusercontent.com'; // Replace with your actual client ID

const client = new OAuth2Client(CLIENT_ID);

exports.googleAuth = async (req, res) => {
  const { credential } = req.body;
  if (!credential) return res.status(400).json({ error: 'Missing credential' });

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    // Create or update user profile in file
    const user = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    };
    createOrUpdate(user);

    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: 'Invalid Google token' });
  }
};