//Question 25 : Write a script to change the background color of a webpage when a button is clicked.
// Answer :
<!DOCTYPE html>
< lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background</title>
</head>
<body>
    <script>
<button onclick="document.body.style.backgroundColor = ['blue', 'green', 'yellow', 'red', 'pink'][base.floor(base.random()*2)]">Change Color</button>
</script>
</body>
</html>