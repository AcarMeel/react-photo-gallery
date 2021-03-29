import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

const Album = ({ photoList }) => {
  const firstPhoto = [...photoList].find(photo => (parseInt(photo.id) % 2 === 0));
  return (
    <>
      <h2>Album #{firstPhoto.albumId}</h2>
      <Link
        to={{
          pathname: `/album/${firstPhoto.albumId}`,
          state: { photoList },
        }}
      >
        <Photo photoItem={firstPhoto} />
      </Link>
    </>
  );
};

export default Album;
