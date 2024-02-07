package repository

import (
	"belajar-gorm/database"
	"belajar-gorm/models"
	"fmt"
)

func CreateUser(email string) {
	db := database.GetDB()

	User := models.User{
		Email: email,
	}

	err := db.Create(&User).Error

	if err != nil {
		fmt.Println("Error creating user data", err)
		return
	}

	fmt.Println("New User Data :", User)
}
