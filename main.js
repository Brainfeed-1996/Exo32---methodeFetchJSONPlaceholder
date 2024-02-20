const promise01 = fetch("https://jsonplaceholder.typicode.com/users/");
promise01
  .then((response) => {
    console.log(response);
    const usersData = response.json();
    console.log(usersData);
    usersData.then((data) => console.log(data[1].address["city"]));
  })
  .catch((err) => console.log(err));
