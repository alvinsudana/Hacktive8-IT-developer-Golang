package main

import (
	"belajar-gorm/database"
	"belajar-gorm/repository"
)

func main() {
	database.StartDB()

	repository.DeleteProductById(1)
}
