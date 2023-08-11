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
      data: T[]
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

  
    function login(callback: (response: { authResponse?: AuthResponse }) => void, options: { perms: string }): void;
  
    function api<T>(path: string, callback: (response: T) => void): void;
  }