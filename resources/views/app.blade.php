<!DOCTYPE html>
<html>
<head>

<link rel='stylesheet' href="/css/bootstrap.min.css" type='text/css' media='all'/>
<link rel='stylesheet' href="/css/all.css" type='text/css' media='all'/>
</head>
<body>
    <div class="container">
            <section class="content">
                <div class="pad group">
                    @yield('content')
                </div>
            </section>
        </div>
</body>
    @yield('footer');
</html>