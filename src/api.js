export async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = response.json();
  console.log("data", data);
}
