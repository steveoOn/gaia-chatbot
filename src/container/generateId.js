import nanoid from "nanoid";

export const generateId = (array, key = "id") => {
  let newQues = [...array];

  for (let i = 0; i < array.length; i++) {
    let randomId = nanoid(10);
    newQues[i][key] = randomId;
  }
  return newQues;
};
