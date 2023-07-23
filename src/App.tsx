import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { PlaylistConfig } from "./context/playlistConfig";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [currentPlaylistId, setCurrentPlaylistId] = useState<string>();

  return (
    <PlaylistConfig.Provider
      value={{ currentPlaylistId, setCurrentPlaylistId }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PlaylistConfig.Provider>
  );
}

export default App;
