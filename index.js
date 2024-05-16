/*
  1) Створіть Map, де ключами будуть імена гравців, а значеннями - їхня кількість балів. Напишіть функції для додавання балів гравцям, віднімання балів і видалення гравців.

  
*/

// 2)

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    country: "USA",
    postalCode: "12345",
    state: "California",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  contacts: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
    social: {
      facebook: "john.doe.123",
      twitter: "@johndoe",
      instagram: "@johndoe123",
    },
  },
  hobbies: ["reading", "traveling", "hiking"],
  education: {
    degree: "Bachelor's",
    field: "Computer Science",
    university: "University of California, Berkeley",
  },
  work: {
    company: "ABC Corp",
    position: "Software Engineer",
    experience: "5 years",
  },
  family: {
    spouse: {
      firstName: "Jane",
      lastName: "Doe",
      age: 28,
    },
    children: [
      { name: "Emily", age: 5 },
      { name: "Michael", age: 3 },
    ],
  },
};

/*
  За допомогою деструктуризації дістати з об'єкту слідуючі данні і покласти їх у змінні з відповідними іменами:
  university, city, latitude, пошту з назвою userEmail, друге хобі з назвою secondHobbie, ім'я першої дитини з назвою firstChildName
*/

const {
  education: { university },
  address: {city, coordinates: {latitude} },
  contacts: { email: userEmail },
  hobbies: [, secondHobbie],
  family: {children: [firstChildName]},
  // age, /* Для себе демонстрація */
} = user;

console.log("university = ", university, "\n");
console.log("city = ", city, "\n");
console.log("latitude = ", latitude, "\n");
console.log("userEmail = ", userEmail, "\n");
console.log("secondHobbie = ", secondHobbie, "\n");
console.log("firstChildName = ", firstChildName, "\n");
// console.log("age = ", age, "\n"); /* Для себе демонстрація */
