// api/fetchImage.js
import fetch from 'node-fetch';

export default async (req, res) => {
  const { url } = req.query;

  try {
    const response = await fetch(url);
    const buffer = await response.buffer();
    const base64 = buffer.toString('base64');
    res.status(200).json({ base64 });
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
};