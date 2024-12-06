document.getElementById('myButton1').addEventListener('click', function() {
  document.getElementById('output').textContent='Button Clicked!!!';
});

document.getElementById('submitButton').addEventListener('click', function(){
  // Get the text input value
  const textInputValue = document.getElementById('textInput').value;
  
  // Update the paragraph text with the input value
  document.getElementById('output1').textContent= textInputValue;
})