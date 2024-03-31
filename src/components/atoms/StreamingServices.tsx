import appleMusicIcon from "/src/assets/appleMusic.png?url"
import instagramIcon from "/src/assets/instagram.png?url";
import spotifyIcon from "/src/assets/spotify.png?url";
import tikTokIcon from "/src/assets/tik-tok.png/?url";
const spotifyLink =
    "https://open.spotify.com/artist/6ogY992zLpP452vapcjiIH?si=eh-GFe7NQlC5v45CtjN_Jw";
const tikTokLink = "https://www.tiktok.com/@dylancolemusic3";
const instagramLink = "https://www.instagram.com/dylancolemusic_atl/";
const appleMusicLink =
    "https://music.apple.com/us/artist/dylan-cole/1717095245";

export const streamingServices = {
    spotify:
    {
        link: spotifyLink,
        icon: spotifyIcon,
        altText: "The Spotify icon."
    },
    tikTok:
    {
        link: tikTokLink,
        icon: tikTokIcon,
        altText: "The Tik-Tok icon."
    },
    appleMusic:
    {
        link: appleMusicLink,
        icon: appleMusicIcon,
        altText: "The Apple Music icon."
    },
    instagram:
    {
        link: instagramLink,
        icon: instagramIcon,
        altText: "The Instagram icon."
    }
}