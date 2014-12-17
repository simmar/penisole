<meta charset="utf-8">


<link rel="stylesheet" href="css/base.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/title.css" type="text/css" media="screen">

<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300|Sancreek|Raleway:100' rel='stylesheet' type='text/css' /><!--effet parralax-->
<link href='http://fonts.googleapis.com/css?family=Playball' rel='stylesheet' type='text/css'><!--font-->


<?php
//get current file name and print it in the <title>
$currentFile = $_SERVER["SCRIPT_NAME"];
$parts = Explode('/', $currentFile);
$currentFile = $parts[count($parts) - 1];
?>
<title><?php echo $currentFile; ?> | Your project name</title>

<script>
    // This will write the 'hasJS' class in the <html> tag.
    // You can check if javascript is enabled via JS or CSS.
    var hasJS = function() {
        var htmlTag = document.getElementsByTagName('html')[0];
        htmlTag.className = (htmlTag.className + ' ' || '') + 'hasJS';
    }();
</script>