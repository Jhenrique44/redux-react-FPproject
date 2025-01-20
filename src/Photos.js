import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, selectOverFiveYears } from "./store/photos";

const Photos = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.photos);
  const photos = useSelector(selectOverFiveYears);
  React.useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (photos)
    return (
      <ul className="">
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </li>
        ))}
      </ul>
    );
  else return null;
};

export default Photos;
