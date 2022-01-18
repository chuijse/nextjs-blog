const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    force: "last",
    migrationsPath: "./migrations",
  });
  const comments = await db.all("SELECT * FROM Comment");
  console.log("All COMMENTS", JSON.stringify(comments, null, 2));
}

setup();

/*const db = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err.message);

    console.log("connetion successfull");
  }
);*/

//db.run(`CREATE TABLE users(first_name, username, password, email, id)`);

/*const sql = `INSERT INTO users (first_name, username, password, email, id) 
VALUES(?,?,?,?,?)`;*/

/*db.run(sql, ["mike", "mike_codes", "123", "mike_code@gmail.com", 1], (err) => {
  if (err) return console.log(err.message);
  console.log("A new row has been created");
});*/

/*const sql = `SELECT * FROM users`;

db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);

  rows.forEach((row) => {
    console.log(row);
  });
});

db.close((err) => {
  if (err) return console.log(err);
});*/

/*const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");*/
