app.get('/api/notes', function (req, res) {
    fs.readFile(db/db.json),  
    return res.json(getNotes)
  })

  app.post("/api/notes", function(req, res) {
    fs.writeFile(db/db.json),
    return res.json(saveNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    fs.writeFile(db/db.json),
    return res.json(deleteNote);
  });