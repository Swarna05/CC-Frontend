window.onload= function(){

    // $.getJSON("http://localhost:8080/subject",function (data) {
    //     //alert("fefe")
    //     $.each(data,function(i,obj){
    //         //alert(obj.subject+":"+obj.subject_id);
    //         var div_data="<option value="+obj.subject_id+">"+obj.subject+"</option>";
    //          //alert(obj.subject_id);
    //         $(div_data).appendTo('#sub'); 
    //     });  
    // });

    $.getJSON("http://localhost:8080/stream",function (data) {
        //alert("fefe")
        $.each(data,function(i,obj){
            //alert(obj.subject+":"+obj.subject_id);
            var div_data="<option value="+obj.stream_id+">"+obj.stream+"</option>";
             //alert(obj.subject_id);
            $(div_data).appendTo('#str'); 
        });  
    });

    // $.ajax({
    //     type: "GET",
    //     url:"http://localhost:8080/hobby",
    //     dataType: "json",
    //     success: function (data) {
    //         $.each(data,function(i,obj){
    //          //   alert(obj.subject+":"+obj.subject_id);
    //             var div_data="<option value="+obj.hobby_id+">"+obj.hobby+"</option>";
    //             //alert(div_data);
    //             $(div_data).appendTo('#hob'); 
    //         });  
    //     }
    // });



}


function register() {

    // const nameField = document.getElementById("name").value;
    // const contactField = document.getElementById("num").value;
 //   console.log(nameField);
    
//    sessionStorage.setItem('Name', nameField);
//    sessionStorage.setItem('Contact', contactField);
//    localStorage.setItem('Name', nameField);
//    localStorage.setItem('Contact', contactField);


     //console.log(data.name);
    const data = {
        "name": $('#name').val(),
        "contactNo": $('#num').val(),
        "password": $('#pass').val(),
        "pincode": $('#pin').val(),
        "role": $('#role').val(),
        "grade": $('#grade').val(),
        "streamId": $('#str :selected').val(),
       

    };
    //console.log(data);
         // sessionStorage.setItem('Name', data.name);
          localStorage.setItem('Contact', data.contactNo);
          localStorage.setItem('Data', JSON.stringify(data));
     
     
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/save/newuser",
        data: JSON.stringify(data),
        // dataType: 'json',
        cors: true ,
        contentType:'application/json',
        secure: true,
        headers: {
        'Access-Control-Allow-Origin': '*',
    },

    success: function(data, textStatus, xhr) {
        if(xhr.status === 200 || xhr.status===201){
           
            window.location.href="quiz_page.html"
        }
       else{
        console.log("Some Error is Coming")
       }
    },

    error: function(error, status){
         console.log(error,status)
      //   window.location.href="quiz_page.html";
    }
     
    });
}
