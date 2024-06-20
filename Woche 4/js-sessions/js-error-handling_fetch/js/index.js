console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      console.log("response ok");
      return await response.json();
    } else {
      console.log("response not ok");
      return null;
    }
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);
    try {
      if (result.error) {
        // const contentType = result.headers.get("content-type");
        console.log(result);
        errorElement.textContent = result.error;
        userElement.innerHTML = "No user data available.";
      } else {
        const user = result.data;
        userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
        errorElement.textContent = "";
      }
    } catch (error) {
      userElement.innerHTML = "No user data available.";
      errorElement.textContent = "Error 404: User not found";
    }
  });
});
