import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email, and message are required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY

    if (!apiKey) {
      console.error("BREVO_API_KEY not configured")
      return NextResponse.json(
        { error: "email service not configured" },
        { status: 500 }
      )
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "exha studio website",
          email: "noreply@exhastudio.com",
        },
        to: [
          {
            email: "hello@exhastudio.com",
            name: "Valentina Motta",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `new message from ${name}`,
        htmlContent: `
          <html>
            <body style="font-family: system-ui, sans-serif; color: #1a1a1a; padding: 20px;">
              <h2 style="font-weight: 300; margin-bottom: 20px;">new contact form submission</h2>
              <p><strong>name:</strong> ${name}</p>
              <p><strong>email:</strong> ${email}</p>
              <p style="margin-top: 20px;"><strong>message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("Brevo API error:", error)
      return NextResponse.json(
        { error: "failed to send message" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "an unexpected error occurred" },
      { status: 500 }
    )
  }
}
