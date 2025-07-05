<?php
$host = 'localhost'; // MySQL host (usually localhost)
$username = 'root'; // MySQL username
$password = ''; // MySQL password
$database = 'my_database'; // Name of your MySQL database

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
<?php include 'db_connection.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>

    <?php
    // Example query
    $sql = "SELECT * FROM my_table";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
        }
    } else {
        echo "0 results";
    }
    ?>

</body>
</html>