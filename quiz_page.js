
window.onload = function () {
  //   console.log(sessionStorage.getItem('Name'))
  let data = JSON.parse(localStorage.getItem("Data"));
  console.log(data);

  function createSelectWithOptions(options) {
    const selectElement = document.createElement('select');
  
    Object.values(options).forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      selectElement.appendChild(optionElement);
    });
  
    return selectElement;
  }
  
  
  const selectOptionsDiv = document.getElementById('selectOptionsDiv');

  $.getJSON(
    "http://localhost:8080/quizStream/" + data.streamId,
    function (questionsData) {
      console.log(questionsData)
      console.log(selectOptionsDiv)
    
      questionsData.forEach(question => {
      const options = {
        option1: question.option1,
        option2: question.option2,
        option3: question.option3,
        option4: question.option4
      };
    
      const selectWithOptions = createSelectWithOptions(options);
      const questionLabel = document.createElement('label');
      questionLabel.textContent = question.question;
      
      selectOptionsDiv.appendChild(questionLabel);
      selectOptionsDiv.appendChild(selectWithOptions);
    });
    }
  );

  // $.ajax({
  //     type: "GET",
  //     url:"http://localhost:8080/quizSubject/"+data.subjectId,
  //     // dataType: "json",
  //     success: function (obj) {
  //         for(var i=0;i<obj.length;i++){

  //           document.getElementById("sub_question").innerHTML=obj[i].question;
  //             document.getElementById("s1").innerHTML=obj[i].option1;
  //           //  document.getElementById("s1").val(obj.option1);
  //             document.getElementById("s2").innerHTML=obj[i].option2;
  //             document.getElementById("s3").innerHTML=obj[i].option3;
  //         }
  //     }
  // });
};

let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  var answers = [];
// Get all select elements
var selectElements = document.querySelectorAll("select");

// Loop through select elements and store selected options
selectElements.forEach(function(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    answers.push(selectedOption);
});

// For demonstration purposes, log the answers to the console
console.log("User Answers:", answers[0]);


  let dub = JSON.parse(localStorage.getItem("Data"));
  const data = {
    contactNo: dub.contactNo,
    htmlcssOption: answers[0],
    javascriptOption: answers[1],
    springbootOption:answers[2],
    mysqlOption:answers[3],
    javaOption:answers[4]

  };
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/save/quiz",
    data: JSON.stringify(data),
    // dataType: 'json',
    cors: true,
    contentType: "application/json",
    secure: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },

    success: function (data, textStatus, xhr) {
      if (xhr.status === 200 || xhr.status === 201) {
        // alert("ytfytf")
        window.location.href = "DashboardPg.html";
      } else {
        console.log("Some Error is Coming");
      }
    },

    error: function (error, status) {
      console.log(error, status);
      //  window.location.href="DashboardPg.html"
    },
  });
});
