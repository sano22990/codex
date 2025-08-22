<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Welcome</h1>
    <p id="message"></p>
    <script>
        $(function() {
            $('#message').text('This main page uses jQuery!');
        });
    </script>
</body>
</html>
