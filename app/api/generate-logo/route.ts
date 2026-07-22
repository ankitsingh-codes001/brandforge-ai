export async function POST(req: Request) {
  try {
    const { business, style, color } = await req.json();

    const prompt = encodeURIComponent(
      `Minimal professional logo for ${business},
      ${style} style,
      ${color} color palette,
      vector logo,
      clean background,
      flat design,
      premium branding,
      high quality`
    );

    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}`;

    return Response.json({
      result: imageUrl,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate logo" },
      { status: 500 }
    );
  }
}