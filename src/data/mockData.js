// 500+ dummy rows
export const generateMockData = () => {
  const rows = [];
  for (let i = 1; i <= 50; i++) {
    rows.push({
      id: i,
      name: `Item ${i}`,
      value: Math.floor(Math.random() * 1000),
    });
  }
  return rows;
};
