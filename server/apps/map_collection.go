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

func NewMapCollection() AppCollection {
	elems := make(map[uint64]App)
	return &mapCollection{elems: elems}
}
