<?php
// Configurações do proxy
$tokenUrl = 'https://api.eumetsat.int/token';
$consumerKey = 'MA1SGu9P_wxIr2zmD0TUkRCH9GIa';
$consumerSecret = 'kObIcgIWXU3xxvKBuxSRVIhowJca';
$tokenParams = http_build_query(array(
    'grant_type' => 'client_credentials',
    'client_id' => $consumerKey,
    'client_secret' => $consumerSecret
));

// Solicitação do token para a API da EUMETSAT
$ch = curl_init($tokenUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $tokenParams);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Retorna a resposta do token para o cliente
header('Access-Control-Allow-Origin: *'); // Permite qualquer origem (CORS temporário para teste)
header('Content-Type: application/json');
echo $response;
