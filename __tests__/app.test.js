const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Hello, CI/CD World!");
});

test("GET / should return Hello, CI/CD World!", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello, CI/CD World!");
});
