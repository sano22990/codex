<!doctype html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>صفحه اصلی</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @viteReactRefresh
    @vite('resources/js/register.jsx')
</head>
<body>
    <h1>خوش آمدید</h1>

    <div id="register-root" data-route-register="{{ route('register') }}"></div>
</body>
</html>
