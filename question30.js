//Question 30 : Write a script to toggle the visibility of a paragraph when a button is clicked.
//Answer :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Paragraph</title>
</head>
<body>
    <button onclick="toggle()">Toggle Paragraph</button>
    <p id="paragraph" style="display:none;">This is a paragraph.</p>

    <script>
        function toggle() {
            const p = document.getElementById('paragraph');
            p.style.display = p.style.display === 'none' ? 'block' : 'none';
        }
    </script>
</body>
</html>