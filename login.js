
function login(){
    const data={
        "contactNo":$('#con').val(),
        "password":document.getElementById('pass').value,  //JSON
     
    }; 
    localStorage.setItem('Contact', data.contactNo);
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/user",
        data: JSON.stringify(data),
     //   dataType: 'json',
        cors: true ,
        contentType:'application/json',
        secure: true,
        headers: {
        'Access-Control-Allow-Origin': '*',
    },
    success: function(data, textStatus, xhr) {
        if(xhr.status === 200 || xhr.status===201){
            
            window.location.href="DashboardPg.html"
        }
       else{
        console.log("Some Error is Coming")
       }
    },
        error: function(error, status){
          // window.location.href="DashboardPg.html"
         console.log(error,status)
    }
     
    });
}
