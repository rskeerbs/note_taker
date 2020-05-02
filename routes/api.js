app.get('/api/notes', function (req, res) {
    fs.readFile(db.json, renderNoteList, (error) => {
      console.log(error);
    }  
    return res.json(db.json, getNotes)
  })

  app.post("/api/notes", function(req, res) {
    fs.appendFile(db.json, handleNoteSave, (error) => {
      console.log(error);
    }
    return res.json(db.json, saveNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    fs.appendFile(db.json, handleNoteDelete, (error) => {
      console.log(error);
    }
    return res.json(db.json, deleteNote);
  });