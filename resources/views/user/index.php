<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
<head>
</head>
<body>
    <div class="container">
            <section class="content">
                <div class="pad group">
                    <?php 
                    	foreach ($user as $value) {
                    		var_dump($value->name);
                    	}
                    ?>
                </div>
            </section>
        </div>
</body>
</html>