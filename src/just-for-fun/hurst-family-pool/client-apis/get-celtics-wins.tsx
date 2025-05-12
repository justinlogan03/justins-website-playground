export const getCelticsWins = async () => {
  console.log("test 222");
  const res = await fetch("/api/getCelticsWins");
  console.log(res);
  const { wins } = await res.json();
  return wins;
};
