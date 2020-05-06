const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app){

app.get('/api/notes', function (req, res) {
    fs.readFile("db/db.json", "utf8", (error, data) => {
      console.log(error);
      let modifiedData = JSON.parse(data).slice();
      res.json(modifiedData)
    });
    
  })

  app.post("/api/notes", function(req, res) {
    fs.readFile("db/db.json", "utf8", (error, data) => {
      console.log(error);
      let dataArray = JSON.parse(data)
      let note = req.body;
      note.id = uuidv4();
      dataArray.push(note);
      fs.writeFile("db/db.json", JSON.stringify(dataArray), error => {
        if (error) throw error;
        console.log("Successfully saved!")
        res.json(note)
      })
    })
    
  });

  app.delete("/api/notes/:id", function(req, res) {
    fs.readFile("db/db.json", "utf8", (error, data) => {
      console.log(error);
      let dataArray = JSON.parse(data);
      let modifiedArray = dataArray.filter(note => note.id != req.params.id)
      
      fs.writeFile("db/db.json", JSON.stringify(modifiedArray), error => {
        if (error) throw error;
        console.log("Successfully deleted!")
        res.end()
      })
    })
  });

}