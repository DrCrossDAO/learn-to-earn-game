export default async function handler(req, res) {
  const { body } = req;

  // Check if the message body exists
  if (body.message) {
    const chatId = body.message.chat.id;
    const userMessage = body.message.text;

    // Handle received message (e.g., trigger the next question or validate answer)
    await sendMessage(chatId, `You sent: ${userMessage}`);

    // Implement your game logic here based on the user responses
    // You can access data from Telegram and process it accordingly
  }

  res.status(200).send("OK");
}

// Function to send a message back to the user via the Telegram Bot API
async function sendMessage(chatId, text) {
  const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  await fetch(TELEGRAM_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  });
}
