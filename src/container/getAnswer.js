export async function getAnswer(url) {
  try {
    const res = await fetch(url);
    const data = await res.text();
    console.log("data is:", data);
    return data;
  } catch (err) {
    throw err;
  }
}
