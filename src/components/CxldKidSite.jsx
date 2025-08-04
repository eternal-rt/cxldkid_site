import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FaSpotify, FaYoutube, FaTiktok, FaInstagram, FaDiscord } from "react-icons/fa";
import MusicPlayer from "./BottomMusicPlayer";

const tracks = [
  {
    id: "song1",
    title: "GO",
    artist: "CxldKid",
    cover: "music/cover1.jpg",
    info: "Released: 2023\nGenre: Hip-Hop / R&B\nDuration: 3:45",
    color: "#8c451f",
  },
  {
    id: "song2",
    title: "I don't miss you",
    artist: "CxldKid",
    cover: "/music/cover2.jpg",
    info: "Released: 2022\nGenre: R&B\nDuration: 4:12",
    color: "#6b4a3e",
  },
  {
    id: "song3",
    title: "If you want it - Pt. 2",
    artist: "CxldKid",
    cover: "/music/cover3.jpg",
    info: "Released: 2024\nGenre: Hip-Hop\nDuration: 3:30",
    color: "#4a3a2a",
  },
  {
    id: "song4",
    title: "REMINDS ME OF YOU",
    artist: "CxldKid",
    cover: "/music/cover4.jpg",
    info: "Released: 2023\nGenre: R&B\nDuration: 3:55",
    color: "#3f2e1f",
  },
  {
    id: "song5",
    title: "BLACKED OUT",
    artist: "CxldKid",
    cover: "music/cover5.jpg",
    info: "Released: 2021\nGenre: Electronic\nDuration: 4:01",
    color: "#222222",
  },
  {
    id: "song6",
    title: "FIXATED",
    artist: "CxldKid",
    cover: "/music/cover6.jpg",
    info: "Released: 2022\nGenre: Hip-Hop\nDuration: 3:20",
    color: "#573c28",
  },
  {
    id: "song7",
    title: "In L.A",
    artist: "CxldKid, KURSED!",
    cover: "/music/cover7.jpg",
    info: "Released: 2024\nGenre: Rap\nDuration: 3:50",
    color: "#5e3e26",
  },
];

export default function CxldKidSite() {
  const [currentTrackId, setCurrentTrackId] = useState("song1");
  const [flippedTrackId, setFlippedTrackId] = useState(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && flippedTrackId) {
        setFlippedTrackId(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [flippedTrackId]);

  const overlayRef = useRef(null);
  function onOverlayClick(e) {
    if (e.target === overlayRef.current) {
      setFlippedTrackId(null);
    }
  }

  const selectedTrack = tracks.find((t) => t.id === flippedTrackId);

  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.25)",
          zIndex: -20,
        }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: -10,
        }}
      />

      <div className="min-h-screen p-6 pb-32 font-sans relative z-10 text-white">
        <header className="text-center py-8">
          <h1 className="text-7xl font-extrabold mb-4 select-none tracking-wide flex justify-center space-x-1">
            {"CxldKid".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-wave"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 tracking-wide">
            CxldKid Music Official Site
          </p>
        </header>

        <div className="flex justify-center flex-wrap gap-8 mb-10 text-white text-4xl">
          {[
            {
              href: "https://open.spotify.com/artist/4Bj4Ow9RQJ9bhxE53ZFnQ4?si=uWPaCE8gQiybcIy8QPXaHw",
              icon: <FaSpotify />,
              label: "Spotify",
            },
            { href: "https://www.youtube.com/@CxldKid/", icon: <FaYoutube />, label: "YouTube" },
            { href: "https://www.instagram.com/cxldkidmusic", icon: <FaInstagram />, label: "Instagram" },
            { href: "https://www.tiktok.com/@cxldkidmusic_", icon: <FaTiktok />, label: "TikTok" },
            { href: "https://discord.gg/R3ZacPGvcE", icon: <FaDiscord />, label: "Discord" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition-colors text-white hover:text-[#8c451f] focus:text-[#8c451f]"
            >
              {icon}
            </a>
          ))}
        </div>

        <Tabs defaultValue="bio" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full backdrop-blur-md bg-white/10 border border-white/10 rounded-md text-lg font-semibold">
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="merch">Merch</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Bio Tab */}
          <TabsContent value="bio" className="mt-8">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg relative z-0">
              <CardContent className="flex flex-col md:flex-row gap-12 p-10 text-gray-200">
                <div className="flex-shrink-0 w-full max-w-xs mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/cxldlol.jpg"
                    alt="CxldKid Artist Portrait"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <article className="flex-1 space-y-6 text-lg leading-relaxed">
                  <h2 className="text-5xl font-extrabold mb-4 glow">About CxldKid</h2>
                  <p>
                    Zander Todd aka CxldKid (born in February 19th, 2004) is a multifaceted music artist,
                    songwriter, and producer from Conway, South Carolina. At 21 years old, he has been steadily
                    carving out a unique niche in the contemporary music landscape.
                  </p>
                  <p>
                    Combining elements of hip-hop, R&B, and electronic music, CxldKid’s sound is a compelling
                    fusion of smooth melodies, hard-hitting beats, and raw, introspective lyricism.
                  </p>
                  <p>
                    His music reflects a personal narrative that resonates with a broad audience, tackling
                    themes such as love, struggle, ambition, and resilience.
                  </p>
                  <p>
                    Notable releases like the hit single <em>GO</em> have helped establish CxldKid as a
                    promising independent artist. He continues to evolve while maintaining full creative
                    control.
                  </p>
                </article>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Music Tab */}
          <TabsContent value="music" className="mt-8">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg relative z-0">
              <CardContent className="p-6 text-gray-200">
                <h3 className="text-3xl font-bold mb-6 text-center glow">Tracklist</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {tracks.map((track) => (
                    <div
                      key={track.id}
                      className={`cursor-pointer rounded-lg overflow-hidden border border-white/10 transition-transform duration-300 hover:scale-105 ${
                        flippedTrackId === track.id ? "shadow-[0_0_30px_#8c451f] scale-105 z-10 relative" : ""
                      }`}
                      onClick={() => setFlippedTrackId(track.id)}
                      aria-label={`Show details for ${track.title}`}
                    >
                      <img src={track.cover} alt={track.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h4 className="text-xl font-bold">{track.title}</h4>
                        <p className="text-sm text-gray-400">{track.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Overlay for expanded track info with fade+scale */}
            {selectedTrack && (
              <div
                ref={overlayRef}
                onClick={onOverlayClick}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 cursor-pointer"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-black/80 rounded-xl shadow-xl p-8 max-w-md w-full cursor-default select-none"
                  style={{
                    border: `6px solid ${selectedTrack.color}`,
                    boxShadow: `0 0 40px ${selectedTrack.color}`,
                    animation: "fadeScaleIn 0.3s ease forwards",
                    willChange: "transform, opacity",
                  }}
                >
                  <img
                    src={selectedTrack.cover}
                    alt={`${selectedTrack.title} cover`}
                    className="w-72 h-72 rounded-lg mx-auto object-cover border-4 border-transparent shadow-lg"
                    style={{ filter: `drop-shadow(0 0 5px ${selectedTrack.color})` }}
                  />
                  <h2 className="text-4xl font-extrabold mt-6 text-center" style={{ color: selectedTrack.color }}>
                    {selectedTrack.title}
                  </h2>
                  <h3 className="text-2xl text-center mb-4">{selectedTrack.artist}</h3>
                  <pre className="text-center whitespace-pre-line text-lg px-4" style={{ color: "#ddd" }}>
                    {selectedTrack.info}
                  </pre>

                  <button
                    onClick={() => setFlippedTrackId(null)}
                    aria-label="Close track info"
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 focus:outline-none"
                  >
                    ×
                  </button>
                  <p className="mt-6 text-center text-gray-400 italic select-none">Click outside or press ESC to close</p>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Merch Tab */}
          <TabsContent value="merch" className="mt-8">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
              <CardContent className="p-6 text-gray-200 text-center">
                <h3 className="text-3xl font-bold mb-2">Official CxldKid Merchandise</h3>
                <p className="text-lg text-gray-400 mb-6">Coming Soon... Hehehe 👀</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center"></div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
{/* Contact Tab */}
<TabsContent value="contact" className="mt-8">
  <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
    <CardContent className="p-6 text-gray-200 space-y-6">
      {/* CxldKid Contact Info */}
      <div>
        <h2
          className="text-xl font-bold text-white mb-2"
          style={{ textShadow: '0 0 8px #8c451f, 0 0 16px #8c451f' }}
        >
          Contact CxldKid
        </h2>
        <p className="mb-2">For features, collabs, fan inquiries, or shoutouts:</p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>
            Email:{" "}
            <a className="text-[#8c451f] underline" href="mailto:cxldkidmusic@gmail.com">
              cxldkidmusic@gmail.com
            </a>
          </li>
          <li>
            Instagram DMs:{" "}
            <a
              className="text-[#8c451f] underline"
              href="https://www.instagram.com/cxldkidmusic"
              target="_blank"
              rel="noreferrer"
            >
              @cxldkidmusic
            </a>
          </li>
        </ul>
      </div>

      {/* Management Contact Info */}
      <div>
        <h2
          className="text-xl font-bold text-white mb-2"
          style={{ textShadow: '0 0 8px #8c451f, 0 0 16px #8c451f' }}
        >
          Management & Business
        </h2>
        <p className="mb-2">For business, bookings, or management-related inquiries:</p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>
            Email:{" "}
            <a className="text-[#8c451f] underline" href="mailto:zach@et3rnal.xyz">
              zach@et3rnal.xyz
            </a>
          </li>
          <li>
            Instagram DMs:{" "}
            <a
              className="text-[#8c451f] underline"
              href="https://www.instagram.com/et3rnalmgmt"
              target="_blank"
              rel="noreferrer"
            >
              @et3rnalmgmt
            </a>
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
</TabsContent>




        </Tabs>

        <footer className="text-center text-sm text-gray-500 mt-16 mb-10 select-none">
  © 2025 CxldKidMusic, 2021–2025 et3rnal.xyz<br />
  Made with Love from Tennessee 💗
</footer>

      </div>
      

      <MusicPlayer tracks={tracks} currentTrackId={currentTrackId} setCurrentTrackId={setCurrentTrackId} />

      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0);
            text-shadow: 0 0 6px rgba(140, 69, 31, 0.8), 0 0 12px rgba(140, 69, 31, 0.6);
          }
          50% {
            transform: translateY(-8px);
            text-shadow: 0 0 12px rgba(140, 69, 31, 1), 0 0 24px rgba(140, 69, 31, 0.9);
          }
        }
        .animate-wave {
          animation-name: wave;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          display: inline-block;
          will-change: transform, text-shadow;
          color: #8c451f;
        }
        .glow {
          color: #8c451f;
          text-shadow: 0 0 6px rgba(140, 69, 31, 0.8), 0 0 12px rgba(140, 69, 31, 0.6),
            0 0 18px rgba(140, 69, 31, 0.4);
        }

        @keyframes fadeScaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
