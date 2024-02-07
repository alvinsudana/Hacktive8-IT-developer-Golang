package main

import "tes/routers"

func main() {
	PORT := ":8080"

	routers.StartServer().Run(PORT)
	// routers.StartServer().Run(PORT)
}
