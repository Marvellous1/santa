export async function sendEmailNotification(personId: string, bankDetails: { accountNumber: string; bankName: string }) {
  try {
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personId,
        bankDetails,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send notification");
    }
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error;
  }
}