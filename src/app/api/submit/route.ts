import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Send to Google Apps Script web app
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL environment variable not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const payload = JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Google Apps Script web apps redirect after processing POST requests.
    // Using redirect: "manual" prevents fetch from converting POST to GET
    // on the redirect. A 302 response means the script executed successfully.
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      redirect: "manual",
    });

    // 302 redirect = Apps Script processed successfully and is redirecting
    // to the response URL. 200 = direct success response.
    if (response.status === 302 || response.status === 301 || response.status === 307) {
      const redirectUrl = response.headers.get("location");
      if (redirectUrl) {
        try {
          const resultResponse = await fetch(redirectUrl);
          const resultText = await resultResponse.text();
          const result = JSON.parse(resultText);
          if (result.result === "error") {
            console.error("Google Script error:", result.message);
            return NextResponse.json(
              { error: "Failed to submit" },
              { status: 500 }
            );
          }
        } catch {
          // Could not parse redirect response, but the script still ran
        }
      }
      return NextResponse.json({ success: true });
    }

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error("Google Script error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
