export const sortData = (data) => {
  const sortedData = [...data]; // copy data

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1; // -1 stands for "false"
    } else {
      return 1; // 1 stands for "true"
    }
  });

  return sortedData;
};
