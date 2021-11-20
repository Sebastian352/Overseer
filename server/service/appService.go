package service

import (
	"overseer/apps"
)

// Incapsulates all operations.
type AppService interface {
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
