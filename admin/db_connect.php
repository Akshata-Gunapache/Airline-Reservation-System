<?php

$conn = new mysqli('localhost', 'root', 'Aag@2802', 'flight_booking_db');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>