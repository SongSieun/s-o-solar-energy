import { NextRequest, NextResponse } from "next/server";

/**
 * Contact Form API Endpoint
 *
 * TODO: Implement actual email sending or database storage
 *
 * Options to consider:
 * 1. Email Services: SendGrid, Resend, AWS SES, Nodemailer
 * 2. Database: Store in PostgreSQL, MongoDB, or Supabase
 * 3. Notification: Slack webhook, Discord webhook, Telegram bot
 * 4. CRM Integration: HubSpot, Salesforce, Pipedrive
 *
 * Example with Resend:
 * ```
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * await resend.emails.send({
 *   from: 'website@so-solar.co.kr',
 *   to: 'contact@so-solar.co.kr',
 *   subject: `[문의] ${data.name} - ${data.type}`,
 *   html: `<p>Name: ${data.name}</p>...`
 * });
 * ```
 */

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  type?: string;
  message: string;
}

// Rate limiting store (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 5; // requests
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now - record.timestamp > RATE_WINDOW) {
    requestCounts.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[<>]/g, "") // Remove angle brackets
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
        { status: 429 }
      );
    }

    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식을 입력해주세요." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: body.phone ? sanitizeInput(body.phone) : undefined,
      type: body.type ? sanitizeInput(body.type) : undefined,
      message: sanitizeInput(body.message),
      submittedAt: new Date().toISOString(),
      ip,
    };

    // Log the submission (for development/debugging)
    console.log("=== Contact Form Submission ===");
    console.log(JSON.stringify(sanitizedData, null, 2));
    console.log("================================");

    // TODO: Implement your preferred delivery method here
    // Examples:
    //
    // 1. Send email via Resend
    // await resend.emails.send({ ... });
    //
    // 2. Store in database
    // await db.contacts.create({ data: sanitizedData });
    //
    // 3. Send Slack notification
    // await fetch(process.env.SLACK_WEBHOOK_URL, {
    //   method: 'POST',
    //   body: JSON.stringify({ text: `New contact: ${sanitizedData.name}` })
    // });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "문의가 정상적으로 접수되었습니다.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
