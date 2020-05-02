app.get('/public/', function (req, res) {
    res.render("notes.html")
  });

  app.get('/public/*', function (req, res) {
    res.render("index");
    
  })
