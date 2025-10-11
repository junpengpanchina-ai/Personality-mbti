import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 设置正确的 Content-Type 和缓存头
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // 返回 ads.txt 内容
    const adsContent = 'google.com, pub-4198974976257818, DIRECT, f08c47fec0942fa0';
    
    res.status(200).send(adsContent);
  } catch (error) {
    console.error('Error serving ads.txt:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
