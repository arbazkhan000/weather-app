// const baseURl = "0502a3668b0449d090c155328242001";
const baseURl =
  "https://api.weatherapi.com/v1/current.json?key=0502a3668b0449d090c155328242001 ";

export const getdataCity = async (city) => {
  const response = await fetch(`${baseURl}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getdatalocation = async (lang, lat) => {
  const response = await fetch(`${baseURl}&q=${lang},${lat}&aqi=yes`);
  return await response.json();
};
