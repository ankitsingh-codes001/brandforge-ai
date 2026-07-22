import { generateAIContent } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { business } = await req.json();

    const prompt = `
Suggest 10 professional domain names for this business:

Business: ${business}

Rules:

- Include .com
- Include .in
- Include .ai
- Include creative alternatives
- Return ONLY a clean list.

Example:

coffeehub.com
coffeehub.in
coffeehub.ai
getcoffeehub.com
mycoffeehub.ai
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