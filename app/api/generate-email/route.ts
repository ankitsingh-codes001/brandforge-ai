import { generateAIContent } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { recipient, subject, purpose, tone } = await req.json();

    const prompt = `
Write a professional email.

Recipient: ${recipient}

Subject: ${subject}

Purpose: ${purpose}

Tone: ${tone}

Write a complete email.

Include:
- Subject
- Greeting
- Professional Body
- Call to Action (if suitable)
- Closing

Return only the email.
`;

    const result = await generateAIContent(prompt);

    return Response.json({
      result,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}