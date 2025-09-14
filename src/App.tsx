import React, { useState } from "react";
import Home from "./components/Home";
import HostAuthPage from "./components/HostAuth";
import UserAuthPage from "./components/UserAuth";
import HostDashboard from "./components/HostDashboard";
import UserDashboard from "./components/UserDashboard";
import MapView from "./components/MapView";

type Page =
  | "home"
  | "host-auth"
  | "user-auth"
  | "host-dashboard"
  | "user-dashboard"
  | "map";

type User = {
  id: string;
  name: string;
  email: string;
  type: "user" | "host";
} | null;

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("home");
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [selectedStation, setSelectedStation] = useState<any>(null);

  return (
    <div>
      {page === "home" && <Home setPage={setPage} />}

      {page === "host-auth" && (
        <HostAuthPage setCurrentUser={setCurrentUser} setCurrentPage={setPage} />
      )}

      {page === "user-auth" && (
        <UserAuthPage setCurrentUser={setCurrentUser} setCurrentPage={setPage} />
      )}

      {page === "host-dashboard" && (
        <HostDashboard
          currentUser={currentUser}
          setCurrentPage={setPage}
          setCurrentUser={setCurrentUser}
        />
      )}

      {page === "user-dashboard" && (
        <UserDashboard
          currentUser={currentUser}
          setCurrentPage={setPage}
          setCurrentUser={setCurrentUser}
          setSelectedStation={setSelectedStation}
        />
      )}

      {page === "map" && (
        <MapView
          currentUser={currentUser}
          setCurrentPage={setPage}
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
        />
      )}
    </div>
  );
};

export default App;
