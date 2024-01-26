<?php
$dir = "/path/to/directory";
$files = scandir($dir);

echo "<ul>";
foreach($files as $file) {
  if ($file != "." && $file != "..") {
    echo "<li>$file</li>";
  }
}
echo "</ul>";
?>
