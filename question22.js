//Question 22 : How can you select an element in the DOM using JavaScript? (Give an example.)

//Answer : In JavaScript, you can select elements in the DOM using various methods provided by the document object.

<!DOCTYPE html>
<html>
  <body>
    <h1 id="main-title">Hello, World!</h1>
    <script>
      const title = document.getElementById("main-title");
      console.log(title.textContent);
    </script>
  </body>
</html>