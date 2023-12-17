export const getCats = async () => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_c50BgVxy7qbngcBORc1qrvsPe6CCla2mSu0NPp542q6x2O7QiK8B5p4ZXW1dJBTO",
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    requestOptions
  );

  const [data] = await response.json();

  return data.url;
};

export const getDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};

