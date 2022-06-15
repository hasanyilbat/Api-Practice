//!GET
// fetch("http://localhost:3000/projects")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// //!POST

// fetch("http://localhost:3000/projects", {
//   method: "POST",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({
//     id: 1,
//     projectID: 22,
//     description: "python files",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//!P

// fetch("http://localhost:3000/projects/1", {
//   method: "PUT",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({
//     id: 1,
//     projectID: 100,
//     description: "PUT operation",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//!DELETE

// fetch("http://localhost:3000/projects/1", {
//   method: "DELETE",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({}),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//*****DOM ISLEMLERI******/

// //
fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => updateDom(data))
  .catch((err) => console.log(err));

const updateDom = (data) => {
  const display = document.querySelector(".display");
  data.forEach((user) => {
    const { name, title } = user;
    display.innerHTML += `
        <p>${name}</p>
        <p>${title}</p>
        `;
  });
};
