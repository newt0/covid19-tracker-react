export const sortData = (data) => {
  const sortedData = [...data]; // copy data

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1) )
};
