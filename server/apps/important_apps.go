package apps

type AppCollection interface {
	GetApp(id uint64) (App, error)
	AddApp(App) error
	Size() int
	GetAll() map[uint64]App
}

// Return a List of the apps that Overseer monitors.
func GetImportantApps() AppCollection {
	m := NewMapCollection()
	m.AddApp(NewBasicApp(1, "firefox"))
	m.AddApp(NewBasicApp(2, "chrome"))
	m.AddApp(NewBasicApp(3, "thunderbird"))
	m.AddApp(NewBasicApp(4, "steam"))
	m.AddApp(NewBasicApp(5, "outlook"))

	return m
}
