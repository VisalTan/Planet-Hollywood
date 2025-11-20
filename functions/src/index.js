const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.api = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const body = req.body;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'checkin', 'checkout'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      res.status(400).json({
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
      return;
    }

    // Validate dates
    const checkinDate = new Date(body.checkin);
    const checkoutDate = new Date(body.checkout);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkinDate < today) {
      res.status(400).json({
        error: 'Check-in date cannot be in the past'
      });
      return;
    }

    if (checkoutDate <= checkinDate) {
      res.status(400).json({
        error: 'Check-out date must be after check-in date'
      });
      return;
    }

    // Calculate number of nights
    const nights = Math.ceil((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24));

    // Get Telegram credentials from Firebase config
    const config = functions.config();
    const TELEGRAM_BOT_TOKEN = config.telegram?.bot_token;
    const TELEGRAM_GROUP_ID = config.telegram?.group_id;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_GROUP_ID) {
      console.error('❌ Telegram credentials missing');
      res.status(500).json({
        error: 'Telegram credentials not configured'
      });
      return;
    }

    // Format dates for display
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    // Format the message using HTML
    const message = `
🎯 <b>New Booking Request</b>

👤 <b>Name:</b> ${body.name}
📧 <b>Email:</b> ${body.email}
📱 <b>Phone:</b> ${body.phone}

📅 <b>Check-in:</b> ${formatDate(body.checkin)}
📅 <b>Check-out:</b> ${formatDate(body.checkout)}
🌙 <b>Nights:</b> ${nights}

${body.message ? `💬 <b>Message:</b>\n${body.message}\n` : ''}
<i>Received at: ${new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Phnom_Penh',
      dateStyle: 'full',
      timeStyle: 'short'
    })}</i>
    `.trim();

    // Send to Telegram GROUP
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_GROUP_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Message sent to Telegram group:', result);

    res.status(200).json({
      success: true,
      message: 'Booking sent successfully to group'
    });
  } catch (error) {
    console.error('❌ Telegram error:', error);
    res.status(500).json({
      error: error.message || 'Failed to send booking'
    });
  }
});