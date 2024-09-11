import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const kindeAuth = url.pathname.split("/").pop();

  // Handle the 'setup' route explicitly
  if (kindeAuth === 'setup') {
    console.log("Received request to '/api/auth/setup'");
    return NextResponse.json({ error: 'Invalid route: setup is not handled' }, { status: 404 });
  }

  // Handle other valid dynamic routes
  try {
    // Call handleAuth function directly, which should return the proper response
    const result = await handleAuth({
      request: req, // Pass the NextRequest object as part of the options
      endpoint: kindeAuth // Dynamic route part
    });

    // Return the result as the response
    return new NextResponse(JSON.stringify(result));
  } catch (error) {
    console.error("Error in /api/auth/[kindeAuth] route:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
