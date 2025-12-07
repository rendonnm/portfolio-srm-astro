import type { BestResponse, Data } from "@/lib/types/monkeyType";
import { MONKEY_TYPE_URL } from "@/lib/constants/monkeyType";

export async function getMonkeyTypeBest(): Promise<Data> {
  const token = import.meta.env.MONKEY_TYPE_TOKEN;

  if (!token) {
    throw new Error("MONKEY_TYPE_TOKEN is not configured");
  }

  const res = await fetch(
    `${MONKEY_TYPE_URL}/users/personalBests?mode=time&mode2=15`,
    {
      headers: {
        Authorization: `ApeKey ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(`MonkeyType API error: ${JSON.stringify(error)}`);
  }

  const data: BestResponse = await res.json();

  const stats = data.data[0];

  return stats;
}
