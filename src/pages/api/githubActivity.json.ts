import { gitHubUser } from "@/lib/constants/gitHub";
import { getGitHubActivity } from "@/services/getGitHubActivity";
import type { APIContext } from "astro";
import { getActualDate } from "@/lib/utils/date";

export async function GET(_context: APIContext) {
  try {
    const { day, month, year } = getActualDate();

    const monthPadStart = String(month + 1).padStart(2, "0");
    const dayPadStart = String(day).padStart(2, "0");

    const variables = {
      userName: gitHubUser,
      from: `${year - 1}-${monthPadStart}-${dayPadStart}T00:00:00Z`,
      to: `${year}-${monthPadStart}-${dayPadStart}T23:59:59Z`,
    };

    const calendar = await getGitHubActivity({ variables });

    return new Response(JSON.stringify(calendar), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
