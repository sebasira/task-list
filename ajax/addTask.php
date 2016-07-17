<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1); 

	// Include MySQL connection script
	require_once '../include/db.php';

	if (isset($_GET['task'])){
		$task = $_GET['task'];
		$status = 0;
		$created = time();

		$query = "INSERT INTO task(task,status,created_at)  VALUES ('$task', '$status', '$created')";

		$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

		$result = $mysqli->affected_rows;

		echo $json_response = json_encode($result);
	}
?>