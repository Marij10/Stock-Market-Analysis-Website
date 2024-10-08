export const getCompanyArray = async function () {
  try {
    const request = await fetch(
      "https://stocks3.onrender.com/api/stocks/getstockstatsdata"
    );
    if (!request.ok) {
      throw new Error("No data fetched");
    }
    const data = await request.json();
    const obj = data.stocksStatsData;
    const keysArray = Object.keys(obj[0]);
    keysArray.pop();
    return keysArray;
  } catch (err) {
    console.error(err);
  }
};

export const getStocksStats = async function () {
  try {
    const request = await fetch(
      "https://stocks3.onrender.com/api/stocks/getstockstatsdata"
    );
    if (!request.ok) {
      throw new Error("No data fetched");
    }
    const data = await request.json();
    const obj = data.stocksStatsData;
    return obj;
  } catch (err) {
    console.error(err);
  }
};

export const getDescription = async function () {
  try {
    const request = await fetch(
      "https://stocks3.onrender.com/api/stocks/getstocksprofiledata"
    );
    if (!request.ok) {
      throw new Error("No data fetched");
    }
    const data = await request.json();
    const desc = data.stocksProfileData[0];
    return desc;
  } catch (err) {
    console.error(err);
  }
};

export const getChartsData = async function () {
  try {
    const request = await fetch(
      "https://stocks3.onrender.com/api/stocks/getstocksdata"
    );
    if (!request.ok) {
      throw new Error("No data fetched");
    }
    const data = await request.json();
    const desc = data.stocksData[0];

    return desc;
  } catch (err) {
    console.error(err);
  }
};
