-- create new db
CREATE DATABASE doe;

-- donors
CREATE TABLE "donors" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "blood" TEXT NOT NULL
);
