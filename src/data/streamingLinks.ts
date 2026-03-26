/**
 * Enlaces oficiales al single «A Ritmo Cha Cun Cha».
 * `app`: URI / esquema para intentar abrir la app en móvil (ver PlatformLinks script).
 */
export const streamingLinks = {
	spotify: {
		web: "https://open.spotify.com/intl-es/track/7dBoBXoQbSdYQDdTk7T7UH?si=fc36a10aa1b0435a",
		app: "spotify:track:7dBoBXoQbSdYQDdTk7T7UH",
	},
	apple: {
		web: "https://music.apple.com/us/album/a-ritmo-cha-cun-cha-feat-subcantante-single/1886347025",
		/** En iOS, music.apple.com suele abrir Apple Music; mismo URL en app. */
		app: "https://music.apple.com/us/album/a-ritmo-cha-cun-cha-feat-subcantante-single/1886347025",
	},
	tidal: {
		web: "https://tidal.com/album/508002731/track/508002732",
		app: "tidal://track/508002732",
	},
	youtube: {
		web: "https://music.youtube.com/watch?v=sqDrXEYiFkA&si=OifZJ27TzknUv59A",
		/** YouTube Music resuelve el enlace https en la app si está instalada. */
		app: "https://music.youtube.com/watch?v=sqDrXEYiFkA&si=OifZJ27TzknUv59A",
	},
	amazon: {
		web: "https://music.amazon.es/tracks/B0GSYF3ZH8?marketplaceId=A1RKKUPIHCS9HS&musicTerritory=ES&ref=dm_sh_UyRy2A4N15UYjA6a4zsSaqZAZ",
		app: null as string | null,
	},
} as const;
