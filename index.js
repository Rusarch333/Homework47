// 1) Створіть Map, де ключами будуть імена гравців, а значеннями - їхня кількість балів. Напишіть функції для додавання балів гравцям, віднімання балів і видалення гравців.

console.log("TASK 1 ____________\n");

const MIN_PLAYER_SCORE = 0;
const MAX_PLAYER_SCORE = 12;

/**
 * Функція, яка повертає помилку, якщо мапа з балами гравців порожня
 * @param {Map} playerScore
 * @throws {Error} "Players score can't be empty!"
 */
const validatePlayerScoreOnEmpty = (playerScore) => {
  if (playerScore.size === 0) {
    throw new Error("Players score can't be empty!");
  }
};

/**
 * Функція, яка перевіряє чи існує заданий гравець у мапі балів гравців
 * @param {Map} playerScore
 * @param {string} player
 * @throws {Error} "Player " + player + " is not exists!"
 */
const validatePlayerExistence = (playerScore, player) => {
  if (playerScore.has(player) === false) {
    throw new Error("Player " + player + " is not exists!");
  }
};

/**
 * Функція, яка виконує перевірку на порожність мапи з балами гравців,
 * а також перевірку на існування гравця у цій мапі
 * послідовно викликає функції validatePlayerScoreOnEmpty(playerScore)
 * та validatePlayerExistence(playerScore, player)
 * @param {Map} playerScore
 * @param {string} player
 */
const validatePlayerScoreForPlayer = (playerScore, player) => {
  validatePlayerScoreOnEmpty(playerScore);
  validatePlayerExistence(playerScore, player);
};

/**
 * Функція, яка повертає помилку, якщо кількість балів не є цілим числом більшим за 0
 * @param {number} points
 * @throws {Error} "Points must be integer number > 0!"
 */
const validatePointsNumber = (points) => {
  if (Number.isInteger(points) === false || points <= 0) {
    throw new Error("Points " + points + " must be integer number > 0!");
  }
};

/**
 * Функція, яка збільшує оцінку гравця на певну кількість балів
 * @param {Map} playerScore
 * @param {string} player
 * @param {number} points
 * @throws {RangeError} : SHORTLY - Player can't have more then MAX_PLAYER_SCORE !
 */
const increasePoints = (playerScore, player, points = 1) => {
  validatePlayerScoreForPlayer(playerScore, player);
  validatePointsNumber(points);

  const newPlayerScore = playerScore.get(player) + points;

  if (newPlayerScore > MAX_PLAYER_SCORE) {
    throw new RangeError(
      "You want to give player " +
        player +
        " - " +
        points +
        " points but player can't have more then " +
        MAX_PLAYER_SCORE +
        "!"
    );
  }

  playerScore.set(player, newPlayerScore);
};

/**
 * Функція, яка зменшує оцінку гравця на певну кількість балів
 * @param {Map} playerScore
 * @param {string} player
 * @param {number} points
 * @throws {RangeError} : SHORTLY - Player can't have less then MIN_PLAYER_SCORE !
 */
const decreasePoints = (playerScore, player, points = 1) => {
  validatePlayerScoreForPlayer(playerScore, player);
  validatePointsNumber(points);

  const newPlayerScore = playerScore.get(player) - points;

  if (newPlayerScore < MIN_PLAYER_SCORE) {
    throw new RangeError(
      "You want to take from player " +
        player +
        " - " +
        points +
        " points but player can't have less then " +
        MIN_PLAYER_SCORE +
        "!"
    );
  }

  playerScore.set(player, newPlayerScore);
};

/**
 * Функція, яка видаляє гравця з мапи балів гравців
 * @param {Map} playerScore
 * @param {string} player
 */
const removePlayer = (playerScore, player) => {
  validatePlayerScoreForPlayer(playerScore, player);
  playerScore.delete(player);
};

const playersPoints = new Map();

playersPoints.set("Гравець1", 0);
playersPoints.set("Гравець2", 12);
playersPoints.set("Гравець3", 0);
playersPoints.set("Гравець4", 12);

console.log("playersPoints BEFORE Methods =", playersPoints, "\n");

try {
  increasePoints(playersPoints, "Гравець1", 12);

  decreasePoints(playersPoints, "Гравець2", 12);

  increasePoints(playersPoints, "Гравець3", 5);
  decreasePoints(playersPoints, "Гравець3", 4);

  removePlayer(playersPoints, "Гравець4");
} catch (error) {
  console.error(error);
}

console.log("playersPoints AFTER Methods =", playersPoints, "\n");

// 2.) Є об'єкт user:

console.log("TASK 2 ____________\n");

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
  address: {
    city,
    coordinates: { latitude },
  },
  contacts: { email: userEmail },
  hobbies: [, secondHobbie],
  family: {
    children: [firstChildName],
  },
  // age, /* Для себе демонстрація */
} = user;

console.log("university = ", university, "\n");
console.log("city = ", city, "\n");
console.log("latitude = ", latitude, "\n");
console.log("userEmail = ", userEmail, "\n");
console.log("secondHobbie = ", secondHobbie, "\n");
console.log("firstChildName = ", firstChildName, "\n");
// console.log("age = ", age, "\n"); /* Для себе демонстрація */
