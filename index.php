<?PHP

$dadosJSON = file_get_contents('https://www.googleapis.com/youtube/v3/videos?id=IHNzOHi8sJs&key=&fields=items(snippet(title,thumbnails(maxres(url))),statistics(viewCount))&part=snippet,statistics');
$dadosJSONDecodificados = json_decode($dadosJSON);

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Visualizações</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<img src="<?php echo $dadosJSONDecodificados->items[0]->snippet->thumbnails->maxres->url ?>" width="320" height="180">

</body>
</html>
