import { gitHubUser } from "@/lib/constants/gitHub";
import { getGitHubActivity } from "@/services/getGitHubActivity";
import type { APIContext } from "astro";

export async function GET(_context: APIContext) {
  try {
    const variables = {
      userName: gitHubUser,
      from: "2025-01-01T00:00:00Z",
      to: "2025-12-31T23:59:59Z",
    };

    const calendar = await getGitHubActivity({ variables })

    return new Response(JSON.stringify(calendar), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (e) {
    console.error(e)
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}