
window.onload= function(){
    let userdata=JSON.parse( localStorage.getItem('Data'))
    console.log(userdata)
    document.getElementById("title_name").innerHTML=userdata.name;
    let x= localStorage.getItem('Contact');
    console.log(x);
    
    $.ajax({
        type: "GET",
        url:"http://localhost:8080/getdata/"+x,
        dataType: "json",
        success: function (data, textStatus, xhr) {
            console.log(data.grade);
			if (xhr.status === 200 || xhr.status === 201) {
				document.getElementById("nfield").value = data.name;
                $('#nfield').attr('disabled',true);
				
                document.getElementById("numfield").value = data.contactNo;
                $('#numfield').attr('disabled',true);

                document.getElementById("pinfield").value = data.pincode;
                document.getElementById("rfield").value = data.role;
                document.getElementById("gfield").value = data.grade;

                   
                $.getJSON("http://localhost:8080/stream",function (sdata) {
                    //alert("fefe")
                    $.each(sdata,function(i,obj){
                         
                        if(obj.stream_id === data.streamId){
                            div_data="<option value="+obj.stream_id+" selected>"+obj.stream+"</option>";
                        }
                        else{
                            div_data="<option value="+obj.stream_id+">"+obj.stream+"</option>";
                        }
                        $(div_data).appendTo('#str'); 
                    });  
                });

                // $.ajax({
                //     type: "GET",
                //     url:"http://localhost:8080/hobby",
                //     dataType: "json",
                //     success: function (hdata) {
                //         $.each(hdata,function(i,obj){

                //             if(obj.hobby_id===data.hobbyId){

                //                 var div_data="<option value="+obj.hobby_id+" selected>"+obj.hobby+"</option>";
                //             }
                //             else{
                //                 var div_data="<option value="+obj.hobby_id+">"+obj.hobby+"</option>";
                //             }                         
                //             $(div_data).appendTo('#hob'); 
                //         });  
                //     }
                // });
            
	
			}
			else {
				console.log("Some Error is Coming")
			}
		},
    });



}

function update(){
   // console.log("jygyugykgyuguyguygkyu")
    console.log($('#nfield').val())

    const data={
    //    "name":document.getElementById("nfield").value,
    //    "contactNo":document.getElementById("numfield").value,
    //    "password":"abcd",
        "pincode":document.getElementById("pinfield").value,
        "role": document.getElementById("rfield").value,
        "grade":document.getElementById("gfield").value,
        "sstreamId":$('#sub :selected').val(),
       
        };
    $.ajax({
        url: 'http://localhost:8080/updateUser',
        type: 'PUT',
        dataType: 'application/json',
        data: data,
        success: function(data, textStatus, xhr) {
            if(xhr.status === 200 || xhr.status===201){
                
                window.location.href="DashboardPg.html";
            }
           else{
            console.log("Some Error is Coming");
           }
        },
        error: function(error, status){
          //  window.location.href="DashboardPg.html"
       }
    });
}
