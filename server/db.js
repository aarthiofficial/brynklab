import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE heading (id INTEGER PRIMARY KEY, text TEXT)");
  db.run("INSERT INTO heading (text) VALUES (?)", [
    "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
  ]);
});

export default db;
