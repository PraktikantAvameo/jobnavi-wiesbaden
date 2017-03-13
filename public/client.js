
//Document Ready
$(document).ready(function(){
console.log("Teat");

$('#getButton').click(function (){
	$.get( "http://localhost:8124/get/users",function(data){
	console.log(data);
		/*for(var i = 0; i < data.length; i++){
			console.log(data[i].name);
			$("#result").append("<li>" + data[i].name + " " + data[i].nachname + "</li>");
		}*/
		
		/*for(var i = 0; i < data.length; i++){
			console.log(data[i].name);
			//$("#resultName").append("<li>" + data[i].name + "</li>");
			$("#result2").append("<li>" + data[i].name + " " + data[i].nachname + " " + data[i].alter + "</li>");
		}*/
		
		/*var resultString = "<tr>";
		for(var i = 0; i < data.length; i++){ 	
			resultString += "<td>"+Number(i+1)+"</td><td>" + data[i].name + "</td><td>" + data[i].alter + "</td>";
		 if(data[i].projekte){
			for(var j = 0; j < data[i].projekte.length; j++){
				console.log(data[i].projekte);
				/*$("#table1").append("<tr><td>"+Number(i+1)+"</td><td>" + data[i].name + "</td><td>" + data[i].alter + "</td><td><ul><li>" + data[i].projekte[j] + "</li></ul></td>");
				resultString += "<td><ul><li>" + data[i].projekte[j] + "</li></ul></td>";
			} 
		 }
		resultString += "</tr>";
		$("#table1").append(resultString);npm 
		resultString = "<tr>";
			
		}
		*/	
		
	});
});

$('#postButton').click(function (){
	$.post( "http://localhost:8124/post",function(data){
	console.log("post test");
	});
});
/*
var name1;
var alter1;
var projekte1;
$('#mitarbeiterErstellen').click(function(){
	obj1={
		name: $('#exampleInputName1').val(),
		alter: $('#exampleInputName2').val(),
		projekte: $('#exampleInputName3').val()
	};
	
	
	$.post( "http://localhost:8124/post/daten", obj1, function(data){
		console.log("Mitarbeiter wurde erstellt");
		console.log("Test: " + exampleInputName1.val)
	});
	
	$.get( "http://localhost:8124/get/daten",function(data){
		name = $('#exampleInputName1').val();
		alter = $('#exampleInputName2').val();
		projekte = $('#exampleInputName3').val();
	});
	
});

$('#exampleInputName1').val(function(){
	$.post( "http://localhost:8124/post/daten",function(data){	
		var textBox1 = $("exampleInputName1").text(); 
		console.log(textBox1);
	});
});*/


//Startseite
//Suchen button

$.get( "/get/branchen-neue-branche-anlegen/get-branche-table",function(data){
	console.log(data);
	var resultString = "";
		for(var i = 0; i < data.length; i++){
		 if(data[i].name){
			$("#table-branche").append("<tr><td>" + data[i].name + "</td><td><a href=''>>&nbsp;Bearbeiten</a></td></tr>");
		 }
		}
		
		/*resultString += "</tr>";
		$("#table-branche").append(resultString);*/
		//resultString = "<tr>";
});

$.get( "/get/branchen-branche-bearbeiten/get-branche-table",function(data){
	console.log(data);
	var resultString = "";
		for(var i = 0; i < data.length; i++){
		if(data[i].name){
			$("#table-branche").append("<tr><td>" + data[i].name + "</td><td><a href='/get/branchen-branche-bearbeiten-bearbeiten'>>&nbsp;Bearbeiten</a></td></tr>");
		}
		}
		
		/*resultString += "</tr>";
		$("#table-branche").append(resultString);*/
		//resultString = "<tr>";
});




$.get( "/get/branchen-alle-branchen-anzeigen/get-branche-table-alle",function(data){
	console.log(data);
	var resultString = "";
		
		for(var i = 0; i < data.length; i++){
			$("#table-branche-alle").append("<tr><td>" + data[i].name + "</td><td><a href='/get/branchen-alle-branchen-anzeigen/get-branche-bearbeiten'>>&nbsp;Bearbeiten</a></td></tr>");
		}
		
		/*resultString += "</tr>";
		$("#table-branche").append(resultString);*/
		//resultString = "<tr>";
});

//Bearbeiten
$.get( "/get/branchen-branche-bearbeiten-bearbeiten-bearbeiten",function(data){
	for(var i = 0; i < data.length; i++){
		$("#textbox-branche-bearbeiten").val(data[i].name);
	}
});

$.get( "/get/branchen-alle-branchen-anzeigen/get-branche-table-alle-bearbeiten",function(data){
	console.log(data);
	var resultString = "";
		for(var i = 0; i < data.length; i++){
			$("#table-branche-alle-bearbeiten").append("<tr><td>" + data[i].name + "</td><td></td></tr>");
		}
		
		/*resultString += "</tr>";
		$("#table-branche").append(resultString);*/
		//resultString = "<tr>";
});



$.get( "/get/praktikumsplatz-alle-anonymen-plaetze/get-praktikumsplatz-table",function(data){
	getPraktikumsPlaetze();
});

$.get( "/get/praktikumsplatz-alle-anonymen-plaetze/get-praktikumsplatz-table-alle",function(data){
	getAllePraktikumsPlaetze();
});

$.get( "/get/betriebe-alle-betriebe-anzeigen/get-betriebe-table-alle",function(data){
	console.log(data);
	var resultString = "";
		for(var i = 0; i < data.length; i++){
			$("#table-betriebe-alle").append("<tr><td>" + data[i].name + "</td><td></td><td>" + data[i].strasse + "</td><td></td><td>" + data[i].plz + "," + data[i].ort + "</td><td></td><td>" + data[i].ansprechpartner + "<a href=''>>&nbsp;Bearbeiten</a></td></tr>");
		}
		
		/*resultString += "</tr>";
		$("#table-branche").append(resultString);*/
		//resultString = "<tr>";
});



function filterPraktikumsPlaetze(plaetze, anonym){
	var result = "";	
	for(var i = 0; i < plaetze.length; i++) {
		if(plaetze[i].anonym == anonym){
			result += "<tr><td>" + plaetze[i].bezeichnung + "</td><td></td><td>" + plaetze[i].branche + "</td><td></td><td>" + 	plaetze[i].betrieb + "</td><td><a href=''>>&nbsp;Bearbeiten</a></td></tr>";
		}
	}
	
	return result;
}

function allePraktikumsPlaetze(plaetze){
	var result = "";	
	for(var i = 0; i < plaetze.length; i++) {
			result += "<tr><td>" + plaetze[i].bezeichnung + "</td><td></td><td>" + plaetze[i].branche + "</td><td></td><td>" + 	plaetze[i].betrieb + "</td><td><a href=''>>&nbsp;Bearbeiten</a></td></tr>";

	}
	
	return result;
}



function getPraktikumsPlaetze(){
	$.get( "/get/praktikumsplatz-alle-anonymen-plaetze/get-praktikumsplatz-table",function(data){
		//console.log(JSON.parse($("#seitenInfo").html()));
		//var obj = jQuery.parseJSON($("#seitenInfo").html());
		//console.log(obj);
		$("#table-praktikumsplatz").append(filterPraktikumsPlaetze(data,"ja"));
	
	});
}

function getAllePraktikumsPlaetze(){
	$.get( "/get/praktikumsplatz-alle-anonymen-plaetze/get-praktikumsplatz-table-alle",function(data){
		$("#table-praktikumsplatz-alle").append(allePraktikumsPlaetze(data));
	});
}



$('.login-backend-button').click(function(){
	$.get( "/backend/Login-Startseite",function(data){

	});
});

$.get( "/get/impressum",function(data){
	console.log("test funktioniert");
});


//Praktikumsplatz
$.get( "/get/praktikumsplatz-anlegen",function(data){
	console.log("test funktioniert");
});

$.get( "get/praktikumsplatz-alle-praktikumsplaetze",function(data){
	console.log("test funktioniert");
});

$.get( "/get/praktikumsplatz-suchen-bearbeiten",function(data){
	console.log("test funktioniert");
});


//Branchen
$.get( "/get/branchen-alle-branchen-anzeigen",function(data){
	console.log("test funktioniert");
});

$.get( "/get/branchen-branche-bearbeiten",function(data){
	console.log("test funktioniert");
});

$.get( "/get/branchen-branche-bearbeiten-bearbeiten",function(data){
	console.log("test funktioniert");
});

$.get( "/get/branchen-neue-branche-anlegen",function(data){
	console.log("test funktioniert");
});


//Betriebe
$.get( "/get/betriebe-alle-betriebe-anzeigen",function(data){
	console.log("test funktioniert");
});

$.get( "/get/betriebe-betriebe-exortieren",function(data){
	console.log("test funktioniert");
});

$.get( "/get/betriebe-betrieb-suchen-bearbeiten",function(data){
	console.log("test funktioniert");
});

$.get( "/get/betriebe-neuen-betrieb-anlegen",function(data){
	console.log("test funktioniert");
});


//Backend Startseite
$.get( "/backend/Login",function(data){
	console.log("test funktioniert");
});

$.get( "/get/backend/Login-Startseite",function(data){
	console.log("test funktioniert");
});

$.get( "/backend/Logout",function(data){
	console.log("test funktioniert");
});

//test

});