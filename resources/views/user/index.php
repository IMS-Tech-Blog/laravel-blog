<!DOCTYPE html>
<html>
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