/**
 * Created by zauri_000 on 06.11.2016.
 */

var loki = require("lokijs");
var Q = require("q");

module.exports = {
    getList: function() {
        var defer = Q.defer();
        var db = new loki('./server/db.json');

        db.loadDatabase({}, function(res) {
            var col = db.getCollection("words");
            var data = col.find();
            defer.resolve(data);
        });

        return defer.promise;
    },

    add: function(data) {
        var defer = Q.defer();
        var db = new loki('./server/db.json');

        db.loadDatabase({}, function(res) {
            var col = db.getCollection("words");
            try{
                if(data.length){
                    data.forEach(function(v) {
                        col.insert(v);
                    });

                    db.saveDatabase();
                }

                defer.resolve(true);
            }
            catch(e){
                defer.reject(e);
            }
        });

        return defer.promise;
    }
};