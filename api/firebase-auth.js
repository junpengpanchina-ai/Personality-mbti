// Firebase Auth API endpoint for Google sign-in
// Requires Firebase Admin SDK configuration
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { idToken } = req.body || {};
    if (!idToken || typeof idToken !== 'string') {
      res.status(400).json({ error: 'Missing idToken' });
      return;
    }

    // For now, return a mock response since we need Firebase Admin SDK setup
    // In production, you would verify the token with Firebase Admin
    res.status(200).json({
      email: 'demo@example.com',
      email_verified: true,
      name: 'Demo User',
      picture: '',
      uid: 'demo_uid_123',
      provider: 'google.com'
    });
  } catch (err) {
    res.status(500).json({ error: 'server_error', detail: String(err && err.message ? err.message : err) });
  }
};
