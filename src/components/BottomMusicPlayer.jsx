import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2, ChevronUp } from 'lucide-react';

const playlist = [
  {
    id: 'song1',
    url: '/music/song1.mp3',
    title: 'GO',
    artist: 'CxldKid, CARi',
    cover: '/music/cover1.jpg',
    lyrics: `Girl it's 2am and you don't pick up your phone
And then you wanna tell me that you been out with no one
It's not a secret
Baby why you keep it from me

Huh
When you press send where do you go
Do you think you're better alone
Baby are you out fucking someone else
Should've known I was better alone

Told me you where staying in tonight
But you ain't picking up your line
Girl I saw the post
Caught you in the frame
Other side of town
But you swore you changed
Same look when you lie again
Girl I know that perfume scent ain't for your friend
And you moving real low
I know your out there thinking that I don't know

When you're outside where do you go
Do you think of me
I'm alone
I know your out there fucking someone else
Should've known I be better alone

Should've known
Should've known
I'd be better off
Should've known
Should've known
I'd be better off
Should've known
Should've known
I'd be better off
Without you
Should've known
Should've known
I'd be better off
Should've known
Should've known
I'd be better off
Should've known
I'd be better off
Without you,`,
  },
  {
    id: 'song2',
    url: '/music/song2.mp3',
    title: 'I dont miss you',
    artist: 'CxldKid, J-Docc',
    cover: '/music/cover2.jpg',
    lyrics: `Lyrics for Song Two go here...`,
  },
  {
    id: 'song3',
    url: '/music/song3.mp3',
    title: 'If you want it - Pt. 2',
    artist: 'CxldKid',
    cover: '/music/cover3.jpg',
    lyrics: `Lyrics for Song Three go here...`,
  },
  {
    id: 'song4',
    url: '/music/song4.mp3',
    title: 'REMINDS ME OF YOU',
    artist: 'CxldKid',
    cover: '/music/cover4.jpg',
    lyrics: `Lyrics for Song Four go here...`,
  },
  {
    id: 'song5',
    url: '/music/song5.mp3',
    title: 'BLACKED OUT',
    artist: 'CxldKid',
    cover: '/music/cover5.jpg',
    lyrics: `Lyrics for Song Five go here...`,
  },
  {
    id: 'song6',
    url: '/music/song6.mp3',
    title: 'FIXATED',
    artist: 'CxldKid',
    cover: '/music/cover6.jpg',
    lyrics: `Lyrics for Song Six go here...`,
  },
  {
    id: 'song7',
    url: '/music/song7.mp3',
    title: 'In L.A (feat. KURSED!)',
    artist: 'CxldKid',
    cover: '/music/cover7.jpg',
    lyrics: `Lyrics for Song Seven go here...`,
  },
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [showDetails, setShowDetails] = useState(false);

  const accentColor = '#8c451f';

  const song = playlist[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => handleSkip();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [volume, currentSongIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    if (audioRef.current) audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolume = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
  };

  const handleSkip = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300" onClick={() => setShowDetails(false)}>
          <div className="bg-gray-900 text-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-auto animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <img src={song.cover} alt="Large Album Cover" className="w-full h-auto object-contain rounded-md mb-4" />
            <h2 className="text-3xl font-semibold mb-2">{song.title}</h2>
            <h3 className="text-xl text-gray-400 mb-4">{song.artist}</h3>
            <pre className="text-base whitespace-pre-wrap text-gray-300 leading-relaxed">{song.lyrics}</pre>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 flex items-center px-4 py-2 shadow-md z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(255 255 255 / 0.05)', borderTop: '1px solid rgba(140, 69, 31, 0.2)', color: 'white' }}>
        <div className="relative">
          <img src={song.cover} alt="Album Cover" className="w-16 h-16 rounded-md object-cover mr-4" />
          <button onClick={() => setShowDetails(true)} className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-60 transition-colors duration-200 rounded" aria-label="Show Details">
            <ChevronUp size={18} className="text-white opacity-80" />
          </button>
        </div>

        <div className="flex flex-col mr-6">
          <span className="text-lg font-semibold leading-tight">{song.title}</span>
          <span className="text-sm text-gray-400 leading-tight">{song.artist}</span>
        </div>

        <div className="flex items-center space-x-4 mr-6" style={{ color: accentColor }}>
          <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={24} color={accentColor} /> : <Play size={24} color={accentColor} />}
          </button>
          <button onClick={handleSkip} aria-label="Skip">
            <SkipForward size={24} color={accentColor} />
          </button>
        </div>

        <div className="flex-1 flex items-center space-x-2">
          <span className="text-sm w-10 text-right" style={{ color: accentColor }}>{formatTime(currentTime)}</span>
          <input type="range" min="0" max="100" value={progress} onChange={handleSeek} className="w-full h-1 rounded-lg appearance-none cursor-pointer" style={{ accentColor: accentColor, background: 'rgba(255 255 255 / 0.2)', outline: 'none' }} />
          <span className="text-sm w-10" style={{ color: accentColor }}>{formatTime(duration)}</span>
        </div>

        <div className="flex items-center ml-4 space-x-2" style={{ color: accentColor }}>
          <Volume2 size={20} color={accentColor} />
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} className="w-20 h-1" style={{ accentColor: accentColor, background: 'rgba(255 255 255 / 0.2)', outline: 'none' }} />
        </div>

        <audio ref={audioRef} src={song.url} preload="auto" />
      </div>

      <style jsx>{`
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        @keyframes slide-up {
          from {
            transform: translateY(20%);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }

        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          background: rgba(255 255 255 / 0.2);
          border-radius: 9999px;
          height: 6px;
          cursor: pointer;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: ${accentColor};
          border-radius: 50%;
          cursor: pointer;
          border: none;
          margin-top: -4px;
          transition: background-color 0.2s ease;
        }
        input[type='range']:focus::-webkit-slider-thumb {
          background: ${accentColor};
          box-shadow: 0 0 8px ${accentColor};
          outline: none;
        }

        input[type='range']::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: ${accentColor};
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        input[type='range']:focus::-moz-range-thumb {
          background: ${accentColor};
          box-shadow: 0 0 8px ${accentColor};
          outline: none;
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;
