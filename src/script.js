// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("predictionForm");
  
    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the input value
      var inputData = document.getElementById("inputData").value;
  
      // Make an AJAX request to the server-side API
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/predict", true);
      xhr.setRequestHeader("Content-Type", "application/json");
  
      // Define the data to be sent
      var data = JSON.stringify({ inputData: inputData });
  
      // Handle the response from the server
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            displayResult(response.prediction);
          } else {
            displayResult("Error occurred. Please try again.");
          }
        }
      };
  
      // Send the request with the data
      xhr.send(data);
    });
  
    // Function to display the prediction result
    function displayResult(result) {
      var resultContainer = document.getElementById("resultContainer");
      var predictionResult = document.getElementById("predictionResult");
  
      predictionResult.textContent = result;
      resultContainer.style.display = "block";
    }
  });
  