import { useState } from "react";

// const userUrl = `http://localhost:3000/api/user/me?access_token=${accessToken}`;

function App() {
  const [user, setUser] = useState<DZ.User | null>(null);

  const handleLogin = () => {
    // Then, request the user to log in
    DZ.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          DZ.api("/user/me", function (response) {
            setUser(response);
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { perms: "basic_access,email" }
    );
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Deezer</button>
      )}
    </div>
  );
}

export default App;
