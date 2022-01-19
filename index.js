var express = require("express");
var cors = require("cors");

var app = express();
var db = require("./database.js");
var md5 = require("md5");

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Server port
var HTTP_PORT = 8080;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
// Root endpoint
// app.get("/", (req, res, next) => {
//   res.json({ message: "Ok" });
// });
app.get("/api/getuserlist", (req, res, next) => {
  var sql = "select * from user";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.get("/api/getuser/:id", (req, res, next) => {
  var sql = "select * from user where id = ?";
  var params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

app.post("/api/adduser/", (req, res, next) => {
  var errors = [];
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
  };
  var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
  var params = [data.name, data.email, data.password];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.send({
      message: "success",
    });
  });
});

app.post("/api/authentics/", (req, res, next) => {
  var errors = [];
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  console.log(req.body);
  var data = {
    email: req.body.email,
    password: md5(req.body.password),
  };
  var sql = "SELECT * FROM user WHERE email = ? and password= ?";
  var params = [data.email, data.password];
  db.all(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    console.log(JSON.stringify(result));
    res.send({
      //message: "success msg ",
      //+ result.json(),
      message: "success ",
    });
  });
});
app.post("/api/checkEmail/", (req, res, next) => {
  db.run(
    "SELECT * FROM user WHERE email = ?",
    req.params.email,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "check email", changes: this.changes });
    }
  );
});
app.post("/api/checkSignIn/", (req, res, next) => {
  db.run(
    "SELECT * FROM user WHERE email = ? and password= ",
    req.params.email,
    md5(req.params.password),
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "User details", changes: this.changes });
    }
  );
});

app.patch("/api/adduser/:id", (req, res, next) => {
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? md5(req.body.password) : null,
  };
  db.run(
    `UPDATE user set 
           name = COALESCE(?,name), 
           email = COALESCE(?,email), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
    [data.name, data.email, data.password, req.params.id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

app.delete("/api/deleteuser/:id", (req, res, next) => {
  db.run(
    "DELETE FROM user WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "user deleted", changes: this.changes });
    }
  );
});
app.delete("/api/deleteAllUser", (req, res, next) => {
  db.run("DELETE FROM user", function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "ALl user deleted", changes: this.changes });
  });
});

app.post("/api/authentics/", (req, res, next) => {
  var errors = [];
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  var data = {
    email: req.body.email,
    password: md5(req.body.password),
  };
  var sql = "SELECT * FROM user WHERE email = ? and password= ?";
  var params = [data.email, data.password];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.send({
      message: res,
    });
  });
});
// Insert here other API endpoints

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});
