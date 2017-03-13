var express = require('express');
var MongoClient = require('mongodb').MongoClient; 
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


//Stellt eine verbindung mit der Datenbank her
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }

  var collection = db.collection('userCollections');
  collection.find({}).toArray(function(err, items) {
	  console.log(items);
	  test = items;
  });
	
  db.close();
});

//port angeben
var port = 8124;
console.log("Server funktioniert");
app.use(express.static('public'));


//Drei abfragen die html Dateien senden
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/startseite.html');
});

app.get('/get', function(req, res){
	console.log("Get wurde geklickt");
	res.send('/get funktioniert');
	//res.sendFile(__dirname + '/public/praktikumsbörse.html');
});

app.post('/post', function(req, res){
	console.log("post wurde geklickt");
	res.send('/post funktioniert');
});

app.get('/get/test', function(req, res){
	res.send(test);
});

app.get('/get/suche', function(req, res){
	res.sendFile(__dirname + '/public/suche.html');
});

app.get('/get/impressum', function(req, res){
	res.sendFile(__dirname + '/public/impressum.html');
});


//Praktikumsplatz
app.get('/get/praktikumsplatz-anlegen', function(req, res){
	res.sendFile(__dirname + '/public/Praktikumsplatz/praktikumsplatz_anlegen.html');
});

app.get('/get/praktikumsplatz-alle-anonymen-plaetze-anzeigen', function(req, res){
	res.sendFile(__dirname + '/public/Praktikumsplatz/praktikumsplatz-alle-anonymen-plätze-anzeigen.html');
});

app.get('/get/praktikumsplatz-alle-praktikumsplaetze', function(req, res){
	res.sendFile(__dirname + '/public/Praktikumsplatz/praktikumsplatz-alle-praktikumsplätze.html');
});

app.get('/get/praktikumsplatz-suchen-bearbeiten', function(req, res){
	res.sendFile(__dirname + '/public/Praktikumsplatz/praktikumsplatz-suchen-bearbeiten.html');
});


//Branchen
app.get('/get/branchen-alle-branchen-anzeigen', function(req, res){
	res.sendFile(__dirname + '/public/Branchen/branchen-alle-branchen-anzeigen.html');
});

app.get('/get/branchen-branche-bearbeiten', function(req, res){
	res.sendFile(__dirname + '/public/Branchen/branchen-branche-bearbeiten.html');
});

app.get('/get/branchen-branche-bearbeiten-bearbeiten', function(req, res){
	res.sendFile(__dirname + '/public/Branchen/branchen-branche-bearbeiten-bearbeiten.html');
});

app.get('/get/branchen-neue-branche-anlegen', function(req, res){
	res.sendFile(__dirname + '/public/Branchen/branchen-neue-branche-anlegen.html');
});


//Betriebe
app.get('/get/betriebe-alle-betriebe-anzeigen', function(req, res){
	res.sendFile(__dirname + '/public/Betriebe/betriebe-alle-betriebe-anzeigen.html');
});

app.get('/get/betriebe-betriebe-exortieren', function(req, res){
	res.sendFile(__dirname + '/public/Betriebe/betriebe-betriebe-exortieren.html');
});

app.get('/get/betriebe-betrieb-suchen-bearbeiten', function(req, res){
	res.sendFile(__dirname + '/public/Betriebe/betriebe-betrieb-suchen-bearbeiten.html');
});

app.get('/get/betriebe-neuen-betrieb-anlegen', function(req, res){
	res.sendFile(__dirname + '/public/Betriebe/betriebe-neuen-betrieb-anlegen.html');
});


//Backend Startseite
app.get('/backend/Login', function(req, res){
	res.sendFile(__dirname + '/public/Praktikumsplatz/Login.html');
});

app.get('/backend/Login-Startseite', function(req, res){
	res.sendFile(__dirname + '/public/Login-Startseite.html');
});

app.get('/backend/Logout', function(req, res){
	res.sendFile(__dirname + '/public/Praktikumsplatz/Login.html');
});


app.get('/get/branchen-neue-branche-anlegen/get-branche-table', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('branchenCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});


app.get('/get/branchen-branche-bearbeiten/get-branche-table', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('branchenCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});


app.get('/get/praktikumsplatz-alle-anonymen-plaetze/get-praktikumsplatz-table', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('praktikumsplatzCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});

app.get('/get/praktikumsplatz-alle-anonymen-plaetze/get-praktikumsplatz-table-alle', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('praktikumsplatzCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});

app.get('/get/branchen-alle-branchen-anzeigen/get-branche-table-alle', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('branchenCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});



app.get('/get/betriebe-alle-betriebe-anzeigen/get-betriebe-table-alle', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('betriebeCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});




//Um die Daten in die Datenbank zu füllen
var assert = require('assert');
app.get('/get/daten', function(req, res){	
	//Suchen von Daten in DB
	//Wenn  Ergebniss da
	res.sendFile(__dirname + '/public/startseite.html');
	res.sendFile(__dirname + '/public/client.js');
	res.sendFile(__dirname + '/public/suche.html');
	res.sendFile(__dirname + '/public/impressum.html');
	//res.sendFile(__dirname + '/public/praktikumsbörse.html');
});

//Praktikumsplatz
app.post('/post/daten', function(req, res){
	console.log(req.body.betrieb);
		var item = {
		betrieb: req.body.betrieb,
		anonymeEinstellung: req.body.anonymeEinstellung,
		branche: req.body.branche,
		bezeichnung: req.body.bezeichnung,
		kurzbeschreibung: req.body.kurzbeschreibung,
		tätigkeiten: req.body.tätigkeiten,
		anforderungen: req.body.anforderungen,
		notizen: req.body.notizen,		
		};
	
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db){
		assert.equal(null, err);
		db.collection('praktikumsplatzCollection').insertOne(item,function(err, result){
			assert.equal(null, err);
			console.log("Neuer Praktikumsplatz wurde erstellt");
			res.status(200).send("OK");
			db.close();
		});;
	});
});

//Branche
app.post('/post/branchen-neue-branche-anlegen', function(req, res){
		var item = {
			brancheName: req.body.brancheName,
		};
	
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db){
		assert.equal(null, err);
		db.collection('branchenCollection').insertOne(item,function(err, result){
			assert.equal(null, err);
			console.log("Neuer Branche wurde erstellt");
			res.status(200).send("OK");
			db.close();
		});;
	});
});

app.get('/get/branchen-alle-branchen-anzeigen/get-branche-table-alle-bearbeiten', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('branchenCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});


app.get('/get/branchen-branche-bearbeiten-bearbeiten-bearbeiten', function(req, res){
	//res.sendFile(__dirname + '/public/Branche/branchen-neue-branche-anlegen.html');
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db) {
	  if(!err) {
	  }

	  var collection = db.collection('branchenCollection');
	  collection.find({}).toArray(function(err, items) {
		  console.log("items", items);
		  //test = items;
		  res.send(items);
	  });
		
	  db.close();
	});
	
});



app.post('/get/branchen-branche-bearbeiten-bearbeiten', function(req, res){
		var item = {
			name: req.body.name,
		};
	
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db){
		assert.equal(null, err);
		db.collection('branchenCollection').updateOne(item,function(err, result){
			assert.equal(null, err);
			console.log("Branche wurde bearbeitet");
			res.status(200).send("OK");
			db.close();
		});;
	});
});


//Betrieb
app.post('/post/betriebe-neuen-betrieb-anlegen', function(req, res){
	console.log(req.body.betrieb);
		var item = {
		name: req.body.name,
		strasse: req.body.strasse,
		plz: req.body.plz,
		ort: req.body.ort,
		anrede: req.body.anrede,
		vorname: req.body.vorname,
		nachname: req.body.nachname,
		mitarbeiteranzahl: req.body.mitarbeiteranzahl,
		intern_ansprech: req.body.intern_ansprech,
		telefon: req.body.telefon,
		telefax: req.body.telefax,
		email: req.body.email,
		url: req.body.url,
		betriebnotiz: req.body.betriebnotiz,
		upload: req.body.upload,
		};
	
	
	MongoClient.connect("mongodb://localhost:27017/JobNavi", function(err, db){
		assert.equal(null, err);
		db.collection('betriebeCollection').insertOne(item,function(err, result){
			assert.equal(null, err);
			console.log("Neuer Betrieb wurde erstellt");
			res.status(200).send("OK");
			db.close();
		});;
	});
});



app.listen(port);