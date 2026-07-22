import { generateAIContent } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { business, platform, tone } = await req.json();

    const prompt = `
Create a viral social media post.

Business: ${business}

Platform: ${platform}

Tone: ${tone}

Return in this format:

Caption:

Hashtags:

Call To Action:
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