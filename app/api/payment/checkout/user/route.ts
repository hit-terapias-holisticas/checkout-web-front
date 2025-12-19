import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { createUserRequestSchema } from "@/app/domain/createAccount/schema";

function getApiUrl(): string {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    throw new Error("API_URL environment variable is not configured");
  }
  return apiUrl;
}

export async function POST(request: NextRequest) {
  try {
    const apiUrl = getApiUrl();
    const rawBody = await request.json();

    const parseResult = createUserRequestSchema.safeParse(rawBody);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: parseResult.error.flatten() },
        { status: 400 }
      );
    }

    const body = parseResult.data;

    const response = await axios.post(`${apiUrl}/payment/checkout/user`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(error.response.data, {
        status: error.response.status,
      });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
