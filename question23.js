//Question 23 : What does the addEventListener method do? Write an example.


//Answer : The addEventListener method in JavaScript is used to attach an event handler to an HTML element. This method allows you to listen for specific events and define what should happen when those events occur.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>addEventListener Example</title>
</head>
<body>
    <button id="myButton">Click Me!</button>
    <p id="message"></p>

    <script>
        // Get references to the button and paragraph
        const button = document.getElementById("myButton");
        const message = document.getElementById("message");

        button.addEventListener("click", () => {
            message.textContent = "Button was clicked!";
        });
    </script>
</body>
</html>
