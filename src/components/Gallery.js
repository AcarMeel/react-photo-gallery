import React from "react";
import Album from "./Album";

import { useQuery } from 'react-query'
import Grid from "@material-ui/core/Grid";
import { fetchPhotos } from "../api/fetchPhotos";

const Gallery = () => {
    const { data: photos, isLoading } = useQuery('Products', fetchPhotos);
    const totalAlbums = Array.from(
    Array(parseInt(process.env.REACT_APP_MAX_ALBUMS)).keys()
  );

  if (isLoading) return <div>Loading...</div>;

  if (!isLoading)
    return (
      <div>
        <Grid container spacing={3}>
          {totalAlbums.map((i) => (
            <Grid item xs={12} sm={6} md={4}>
              <Album
                key={i}
                photoList={[...photos].filter(
                  (album) => album.albumId === i + 1
                )}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
};

export default Gallery;
