declare namespace DZ {
    interface AuthResponse {
      accessToken: string;
      expires: number;
      userID: string;
    }
  
    interface User {
      name: string;
    }
  
    function login(callback: (response: { authResponse?: AuthResponse }) => void, options: { perms: string }): void;
  
    function api(path: string, callback: (response: User) => void): void;
  }