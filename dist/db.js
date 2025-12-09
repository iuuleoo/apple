"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drizzleDb = void 0;
var sqlite3_1 = require("drizzle-orm/sqlite3");
var sqlite3_2 = require("sqlite3");
var db = new sqlite3_2.default.Database("db.sqlite"); // cria db.sqlite automaticamente
exports.drizzleDb = (0, sqlite3_1.drizzle)(db);
