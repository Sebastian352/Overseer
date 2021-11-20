package main

import (
	"fmt"
	"overseer/apps"
)

func main() {
	fmt.Println("Overseer CLI")
	monitoredApps := apps.GetImportantApps()
	for key, value := range monitoredApps.GetAll() {
		fmt.Printf("%d -> %s\n", key, value.GetName())
	}
}
