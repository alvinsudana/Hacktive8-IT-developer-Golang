package main

import (
	"assignment2/config"
	"assignment2/controllers"
	"assignment2/routers"
)

var PORT = ":8080"

func main() {
	db := config.StartDB()
	controller := controllers.New(db)

	routers.StartServer(controller).Run(PORT)
}
