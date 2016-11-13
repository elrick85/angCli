/**
 * Created by zauri_000 on 06.11.2016.
 */

var loki = require("lokijs");
var provider = require("./provider");

var db = new loki(provider.getDbPath());
var children = db.addCollection('words', {
    unique: ['word']
});

db.saveDatabase();