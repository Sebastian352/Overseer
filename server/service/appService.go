package service

import (
	"fmt"
	"overseer/apps"
)

// Incapsulates all operations.
type AppService interface {
	// Check if the app is monitored by Overseer
	IsAppSupported(appName string) bool

	// Add app to the Current User monitored apps.
	AddMonitoredApp(appName string)

	// Clear the Monitored Apps
	ClearMonitored()

	// Get all monitored apps
	GetMonitored() []apps.App
}

type concreteAppService struct {
	importantApps apps.AppCollection
	actualApps    apps.AppCollection
}

// Create a new Instance of a AppService.
func NewAppService() AppService {
	return &concreteAppService{importantApps: apps.GetImportantApps(),
		actualApps: apps.NewMapCollection()}
}

func (srv *concreteAppService) IsAppSupported(appName string) bool {
	_, err := srv.importantApps.GetAppByName(appName)
	return err == nil
}

func (srv *concreteAppService) AddMonitoredApp(appName string) {
	app, err := srv.importantApps.GetAppByName(appName)
	if err != nil {
		fmt.Printf("[!] WARNING: No App with name '%s'\n", appName)
		return
	}

	err = srv.actualApps.AddApp(app)
	if err != nil {
		fmt.Printf("[!] WARNING: App with name '%s' could not be added\n", appName)
	}
}

func (srv *concreteAppService) ClearMonitored() {
	srv.actualApps.RemoveAll()
}

func (srv *concreteAppService) GetMonitored() []apps.App {
	mapped := srv.actualApps.GetAll()
	arr := make([]apps.App, 0, 10)
	for _, a := range mapped {
		arr = append(arr, a)
	}

	return arr
}
