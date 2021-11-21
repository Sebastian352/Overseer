package apps

import "fmt"

// A Collection of Apps
type mapCollection struct {
	elems map[uint64]App
}

func (a *mapCollection) GetApp(id uint64) (App, error) {
	val, ok := a.elems[id]
	if !ok {
		return nil, fmt.Errorf("no element with id %d", id)
	}
	return val, nil
}

func (a *mapCollection) AddApp(app App) error {
	a.elems[app.GetId()] = app
	return nil
}

func (a *mapCollection) Size() int {
	return len(a.elems)
}

func (a *mapCollection) GetAll() map[uint64]App {
	return a.elems
}

func (a *mapCollection) GetAppByName(name string) (App, error) {
	for _, val := range a.elems {
		if val.GetName() == name {
			return val, nil
		}
	}
	return nil, fmt.Errorf("no App with '%s' name found", name)
}

func (a *mapCollection) RemoveAll() {
	for k := range a.elems {
		delete(a.elems, k)
	}
}

func NewMapCollection() AppCollection {
	elems := make(map[uint64]App)
	return &mapCollection{elems: elems}
}
