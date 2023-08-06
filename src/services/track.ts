// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Track } from "../features/track/Track";

// Define a service using a base URL and expected endpoints
export const trackApi = createApi({
  reducerPath: "trackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.deezer.com/`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMockTrack: builder.query<Track, string>({
      query: (id) => `api/track/${id}`,
    }),
    getTrackById: builder.query<Track, string>({
      query: (id) => `track/${id}&output=jsonp`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMockTrackQuery, useGetTrackByIdQuery } = trackApi;
