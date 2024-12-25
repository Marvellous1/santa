import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { personId, bankDetails } = data;

    // In a real application, you would:
    // 1. Store the bank details in a database
    // 2. Send an email using a service like SendGrid or AWS SES
    // 3. Update the person's claimed status

    // For demo purposes, we'll just log the data
    console.log("Notification received:", {
      personId,
      bankDetails,
      recipientEmail: "aigbemarvellous01@gmail.com",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing notification:", error);
    return NextResponse.json(
      { error: "Failed to process notification" },
      { status: 500 }
    );
  }
}