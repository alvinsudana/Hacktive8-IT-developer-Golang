package repository

import (
	"belajar-gorm/database"
	"belajar-gorm/models"
	"errors"
	"fmt"

	"gorm.io/gorm"
)

func GetUserById(id uint) {
	db := database.GetDB()

	user := models.User{}

	err := db.First(&user, "id = ?", id).Error

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			fmt.Println("User data not found")
			return
		}
		print("Error finding user :", err)
	}

	fmt.Printf("User Data : %+v \n", user)
}
