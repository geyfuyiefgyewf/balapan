<?php
require 'vendor/autoload.php'; // Путь к файлу автозагрузки PHPWord

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $description = $_POST['description'];

  // Создаем новый документ Word
  $phpWord = new \PhpOffice\PhpWord\PhpWord();

  // Добавляем раздел
  $section = $phpWord->addSection();

  // Добавляем текстовые данные в документ
  $section->addText("Name: $name");
  $section->addText("Email: $email");
  $section->addText("Description: $description");

  // Сохраняем документ в файл
  $filename = 'form_data.docx';
  $phpWord->save($filename);

  echo "Данные успешно сохранены в файл '$filename'.";
}
?>
