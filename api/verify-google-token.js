// Verifies Google ID token by calling Google's tokeninfo endpoint.
// For production, prefer verifying locally with google-auth-library to avoid extra network hop.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { credential } = req.body || {};
    if (!credential || typeof credential !== 'string') {
      res.status(400).json({ error: 'Missing credential' });
      return;
    }

    // Validate with Google tokeninfo
    const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`;
    const resp = await fetch(url, { method: 'GET' });
    if (!resp.ok) {
      const text = await resp.text();
      res.status(401).json({ error: 'Invalid token', detail: text });
      return;
    }
    const data = await resp.json();

    // Minimal checks: audience, expiry
    const aud = process.env.GOOGLE_CLIENT_ID || '';
    
    // 如果配置了 Client ID，则验证 audience
    if (aud && data.aud && data.aud !== aud) {
      console.error('Audience mismatch:', { expected: aud, received: data.aud });
      res.status(401).json({ error: 'audience mismatch', detail: 'Invalid client ID' });
      return;
    }
    
    // 如果没有配置 Client ID，记录警告但允许通过（仅用于开发环境）
    if (!aud) {
      console.warn('GOOGLE_CLIENT_ID not configured, skipping audience validation');
    }
    const now = Math.floor(Date.now() / 1000);
    if (data.exp && Number(data.exp) < now) {
      res.status(401).json({ error: 'token expired' });
      return;
    }

    res.status(200).json({
      email: data.email,
      email_verified: data.email_verified,
      name: data.name || data.given_name || data.family_name || '',
      picture: data.picture || '',
      sub: data.sub,
      hd: data.hd || null,
      iss: data.iss,
      aud: data.aud,
      iat: data.iat,
      exp: data.exp
    });
  } catch (err) {
    res.status(500).json({ error: 'server_error', detail: String(err && err.message ? err.message : err) });
  }
};


