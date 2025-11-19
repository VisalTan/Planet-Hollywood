// server/api/booking.post.ts
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'checkin', 'checkout']
    const missingFields = requiredFields.filter(field => !body[field])

    if (missingFields.length > 0) {
      throw createError({
        statusCode: 400,
        message: `Missing required fields: ${missingFields.join(', ')}`
      })
    }

    // Validate dates
    const checkinDate = new Date(body.checkin)
    const checkoutDate = new Date(body.checkout)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (checkinDate < today) {
      throw createError({
        statusCode: 400,
        message: 'Check-in date cannot be in the past'
      })
    }

    if (checkoutDate <= checkinDate) {
      throw createError({
        statusCode: 400,
        message: 'Check-out date must be after check-in date'
      })
    }

    // Calculate number of nights
    const nights = Math.ceil((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24))

    // Get Telegram credentials from runtime config
    const config = useRuntimeConfig()
    const TELEGRAM_BOT_TOKEN = config.telegramBotToken
    const TELEGRAM_GROUP_ID = config.telegramGroupId

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_GROUP_ID) {
      console.error('❌ Telegram credentials missing')
      throw createError({
        statusCode: 500,
        message: 'Telegram credentials not configured'
      })
    }

    // Format dates for display
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }

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
    `.trim()

    // Send to Telegram GROUP
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const response = await $fetch(telegramUrl, {
      method: 'POST',
      body: {
        chat_id: TELEGRAM_GROUP_ID,
        text: message,
        parse_mode: 'HTML'
      }
    })

    console.log('✅ Message sent to Telegram group:', response)

    return {
      success: true,
      message: 'Booking sent successfully to group'
    }
  } catch (error: any) {
    console.error('❌ Telegram error:', error)

    if (error.data) {
      console.error('Error details:', error.data)
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.description || error.message || 'Failed to send booking'
    })
  }
})