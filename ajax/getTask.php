<?php
	requiere_once'../include/db.php';

	$query="select ID, TASK, STATUS from tasks order by status,id desc";

	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$arr = array();
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$arr[] = $row;	
		}
	}

	echo $json_response = json_encode($arr);
?>