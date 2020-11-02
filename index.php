<?PHP

$playlistJSON = file_get_contents('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLqSz0ak5p5kWs6ry0vo-aO2RRc1maiq2h&key=AIzaSyBRJ3773xt2m4h5WJjg4u_bgbSNua0psvk&fields=items(contentDetails(videoId))&part=contentDetails&maxResults=10');
$playlistJSONDecodificada = json_decode($playlistJSON);

$url1 = 'https://www.googleapis.com/youtube/v3/videos?id=';
$url2 = '&key=AIzaSyBRJ3773xt2m4h5WJjg4u_bgbSNua0psvk&fields=items(snippet(title,thumbnails(standard(url))),statistics(viewCount))&part=snippet,statistics';

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

<?PHP

foreach($playlistJSONDecodificada as $array) {
    foreach($array as $item) {
        $id = $item->contentDetails->videoId;
        $video = file_get_contents($url1.$id.$url2);
        $videoDecodificado = json_decode($video);
        $titulo = $videoDecodificado->items[0]->snippet->title;
        $visualizacoes = $videoDecodificado->items[0]->statistics->viewCount;
        $img = $videoDecodificado->items[0]->snippet->thumbnails->standard->url;
        
        echo '<pre>';
        echo '<img src="'.$img.'">';
        echo '<br>';
        echo $titulo;
        echo '<br>';
        echo $visualizacoes;
    }
}
?>

</body>
</html>