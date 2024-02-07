package repository

import (
	"belajar-gorm/database"
	"belajar-gorm/models"
	"fmt"
)

func UpdateUserById(id uint, email string) {
	db := database.GetDB()

	user := models.User{}

	err := db.Model(&user).Where("id = ?", id).Updates(models.User{Email: email}).Error

	if err != nil {
		fmt.Println("Update data error")
		return
	}

	fmt.Printf("Update user's email: %+v \n", user.Email)
}
