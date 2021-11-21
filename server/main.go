package main

import (
	"fmt"
	"overseer/apps"
	"overseer/httpServer"
	"overseer/service"
)

func main() {
	fmt.Println("Overseer CLI")
	monitoredApps := apps.GetImportantApps()
	for key, value := range monitoredApps.GetAll() {
		fmt.Printf("%d -> %s\n", key, value.GetName())
	}

	service := service.NewAppService()
	server := httpServer.NewServer(service)
	server.Run()
}
