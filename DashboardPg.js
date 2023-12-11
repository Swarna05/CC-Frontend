window.onload = function () {

	let data=JSON.parse( localStorage.getItem('Data'))
	let num=JSON.parse( localStorage.getItem('Contact'))
  //  document.getElementById("profile_name").innerHTML=data.name;

	console.log(data);
	//$("#profile_name").innerHTML="grgrgrg";






	$.ajax({
		type: "GET",
		url:"http://localhost:8080/getdata/"+num,
		//dataType: 'json',
		cors: true,
		contentType: 'application/json',
		secure: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		success: function (udata, textStatus, xhr) {
			if (xhr.status === 200 || xhr.status === 201) {
               console.log(udata);
				localStorage.setItem('Data', JSON.stringify(udata));
				document.getElementById("profile_name").innerHTML=udata.name;

				
			}
			else {
				console.log("Some Error is Coming")
			}
		},

	});

	//console.log(user_details)

	//myURL = "http://localhost:8080/getdata/"+;               // result.json
	$.ajax({
		type: "GET",
		url:"http://localhost:8080/result2/"+num,
		//dataType: 'json',
		cors: true,
		contentType: 'application/json',
		secure: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		success: function (da, textStatus, xhr) {
			if (xhr.status === 200 || xhr.status === 201) {
                

				console.log(da);
				
				 document.getElementById("remark").innerHTML = (da[0].suggestions) //Result: John;
				// document.getElementById("cou").innerHTML = (da[0].course)

				 document.getElementById("suggestedrole").innerHTML = (da[0].suggested_job) //Result: John;	
				// document.getElementById("cou2").innerHTML = (da[1].course)


				
			}
			else {
				console.log("Some Error is Coming")
			}
		},

	});
	return false;
}; 
