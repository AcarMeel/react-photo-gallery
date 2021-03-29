import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Photo from "./Photo";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Photos = () => {
  const { state } = useLocation();
  const { photoList } = state;
  const [photoViewer, setPhotoViewer] = useState([]);
  const [startList, setStartList] = useState(0);

  const pagination = () => {
    const newList = [...photoList].splice(startList, 10);
    setStartList(prev => prev + 10);
    setPhotoViewer(prev => [...prev, ...newList]);
  };

  useEffect(() => {
    pagination();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {photoViewer.map((photo) => (
          <Grid item xs={12} sm={6} md={4}>
            <Photo key={photo.id} photoItem={photo} showContent={true} />
          </Grid>
        ))}
      </Grid>
      <Button disabled={startList === 50} variant="contained" color="secondary" onClick={pagination}>
        Load more
      </Button>
    </>
  );
};

export default Photos;
