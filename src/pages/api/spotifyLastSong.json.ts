import type { APIContext } from "astro";

const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  console.log("Spotify env config", {
    hasClientId: !!clientId,
    hasClientSecret: !!clientSecret,
    hasRefreshToken: !!refreshToken,
  });

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Config de Spotify incompleta");
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`No se pudo obtener access_token de Spotify: ${errorText}`);
  }

  const data = await res.json();
  return data.access_token as string;
}

export async function GET(_context: APIContext) {
  try {
    const accessToken = await getAccessToken();

    const resp = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Error al llamar recently-played:", text);
      return new Response(
        JSON.stringify({ error: "spotify_error", detail: text }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const json = await resp.json();
    const item = json.items?.[0];

    if (!item) {
      return new Response(JSON.stringify(null), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const track = {
      title: item.track.name,
      artist: item.track.artists
        .map((a: { name: string }) => a.name)
        .join(", "),
      url: item.track.external_urls.spotify,
      cover: item.track.album.images?.[0]?.url ?? null,
      playedAt: item.played_at,
    };

    return new Response(JSON.stringify(track), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error en /api/spotify-last-song:", err);
    return new Response(JSON.stringify({ error: "internal_error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
