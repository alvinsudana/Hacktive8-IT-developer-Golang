package main

import "belajar-gin/routers"

func main() {
	PORT := ":8080"

	routers.StartServer().Run(PORT)
	// routers.StartServer().Run(PORT)
}
