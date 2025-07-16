import React, { useEffect, useState } from 'react';

const Animal = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImageUrl(data.message))
      .catch(err => console.log(err));
  }, [isActive]);

  return (
    <div>
      <h2>Animal Component</h2>
      <img src={imageUrl} alt="image" />
      <br />
      <br />
      <button onClick={() => setIsActive(!isActive)}>Change Image</button>
    </div>
  );
};

export default Animal;
