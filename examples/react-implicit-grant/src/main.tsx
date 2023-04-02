import React from "react";
import { createRoot } from "react-dom/client";
import { Page as IndexPage } from "./pages/index";
import { Page as CallbackPage } from "./pages/callback";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpotifyProvider } from "./spotifyContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
	},
	{
		path: "/callback",
		element: <CallbackPage />,
	},
]);

createRoot(document.getElementById("root")!).render(
	// <React.StrictMode> TODO FIX THIS
	<QueryClientProvider client={queryClient}>
		<SpotifyProvider>
			<RouterProvider router={router} />
		</SpotifyProvider>
	</QueryClientProvider>,
	// </React.StrictMode>,
);
