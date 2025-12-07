import { getMonkeyTypeBest } from "@/services/getMonkeyTypeBest";
import type { APIContext } from "astro";

export async function GET(_context: APIContext) {
  try {
    const best = await getMonkeyTypeBest();

    return new Response(JSON.stringify(best), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
