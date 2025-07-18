const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '729602150517-5i7sn1j895l8nni51l9ao8bdmrj0i7gp.apps.googleusercontent.com'; // Replace with your actual client ID

const client = new OAuth2Client(CLIENT_ID);

// In-memory user store (replace with DB for production)
const users = {};

exports.googleAuth = async (req, res) => {
  const { credential } = req.body;
  if (!credential) return res.status(400).json({ error: 'Missing credential' });

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    // Create or update user profile
    const userId = payload.sub;
    users[userId] = {
      id: userId,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    };

    res.json({ user: users[userId] });
  } catch (err) {
    res.status(401).json({ error: 'Invalid Google token' });
  }
};