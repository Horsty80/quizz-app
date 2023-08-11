declare namespace DZ {
    interface AuthResponse {
      accessToken: string;
      expires: number;
      userID: string;
    }
  
    interface User {
      name: string;
    }

    interface DeezerResponse<T> {
      data: T[];
      total: number;
    }

    interface PlaylistTrack {
        id: string;
        title: string;
        artist: {
          name: string;
        };
        album: {
          cover_big: string;
          cover: string;
        };
        duration: number;
        preview: string;
    }

    interface Track {
      release_date: string;
    }

    interface Playlist {
      id: string;
      title: string;
      picture_big: string;
      nb_tracks: number;
    }

  
    function getLoginStatus(callback: (response: { authResponse: AuthResponse }) => void): void;
    function login(callback: (response: { authResponse?: AuthResponse }) => void, options: { perms: string }): void;
  
    function api<T>(path: string, callback: (response: T) => void): void;
  }