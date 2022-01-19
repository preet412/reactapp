var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    // db.run(
    //   `CREATE TABLE adduser (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         username text,
    //         email text UNIQUE,
    //         password text,
    //         CONSTRAINT email_unique UNIQUE (email),
    //         confirmPassword text
    //         )`,
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email),
            confirmPassword text
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO user (username, email, password) VALUES (?,?,?)";
          db.run(insert, ["admin", "admin@example.com", md5("admin123456")]);
          db.run(insert, ["adduser", "user@example.com", md5("user123456")]);
        }
      }
    );
  }
});

module.exports = db;
