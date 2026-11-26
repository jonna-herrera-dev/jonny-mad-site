/**
 * Enlaces oficiales de streaming por lanzamiento.
 * `app`: URI / esquema para intentar abrir la app en móvil (ver PlatformLinks script).
 */

export type PlatformLink = {
	web: string;
	app: string | null;
};

export type StreamingLinksMap = {
	spotify: PlatformLink;
	apple: PlatformLink;
	tidal: PlatformLink;
	youtube: PlatformLink;
	amazon: PlatformLink;
};

/** MAD SESSION #1 — A Ritmo Cha Cun Cha */
export const streamingLinksChaCunCha: StreamingLinksMap = {
	spotify: {
		web: "https://open.spotify.com/intl-es/track/7dBoBXoQbSdYQDdTk7T7UH?si=fc36a10aa1b0435a",
		app: "spotify:track:7dBoBXoQbSdYQDdTk7T7UH",
	},
	apple: {
		web: "https://music.apple.com/us/album/a-ritmo-cha-cun-cha-feat-subcantante-single/1886347025",
		app: "https://music.apple.com/us/album/a-ritmo-cha-cun-cha-feat-subcantante-single/1886347025",
	},
	tidal: {
		web: "https://tidal.com/album/508002731/track/508002732",
		app: "tidal://track/508002732",
	},
	youtube: {
		web: "https://music.youtube.com/watch?v=sqDrXEYiFkA&si=OifZJ27TzknUv59A",
		app: "https://music.youtube.com/watch?v=sqDrXEYiFkA&si=OifZJ27TzknUv59A",
	},
	amazon: {
		web: "https://music.amazon.es/tracks/B0GSYF3ZH8?marketplaceId=A1RKKUPIHCS9HS&musicTerritory=ES&ref=dm_sh_UyRy2A4N15UYjA6a4zsSaqZAZ",
		app: null,
	},
};

/** MAD SESSION #2 — Gangsters Modernos */
export const streamingLinksGangsters: StreamingLinksMap = {
	spotify: {
		web: "https://open.spotify.com/intl-es/track/0MgGVWhjiyeBsJ0yqag5Zi?si=0cce9e26b11c4113",
		app: "spotify:track:0MgGVWhjiyeBsJ0yqag5Zi",
	},
	apple: {
		web: "https://music.apple.com/es/song/gangsters-modernos-feat-santi-luna/6839632506",
		app: "https://music.apple.com/es/song/gangsters-modernos-feat-santi-luna/6839632506",
	},
	tidal: {
		web: "https://tidal.com/artist/76120821/u",
		app: null,
	},
	youtube: {
		web: "https://music.youtube.com/watch?v=B1muIMhjrlA&si=fYV__5Z-UVWnHBvX&drli=1",
		app: "https://music.youtube.com/watch?v=B1muIMhjrlA&si=fYV__5Z-UVWnHBvX&drli=1",
	},
	amazon: {
		web: "https://music.amazon.es/tracks/B0HSYSRW8S/?ref=dm_sh_sDuah4jq6KxnER6hmq0dCbSMb",
		app: null,
	},
};

/** Alias histórico — Cha Cun Cha */
export const streamingLinks = streamingLinksChaCunCha;
