window.onload = function () {
	myURL = "result.json";
	$.ajax({
		type: "GET",
		url: myURL,
		dataType: 'json',
		cors: true,
		contentType: 'application/json',
		secure: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		success: function (da, textStatus, xhr) {
			if (xhr.status === 200 || xhr.status === 201) {

				//alert("ghyuhcy")
				document.getElementById("pro").innerHTML = (da[0].response[0].profession) //Result: John;
				document.getElementById("cou").innerHTML = (da[0].response[0].course)

				document.getElementById("pro2").innerHTML = (da[0].response[1].profession) //Result: John;	
				document.getElementById("cou2").innerHTML = (da[0].response[1].course)


				
			}
			else {
				console.log("Some Error is Coming")
			}
		},

	});
	return false;
}; 
