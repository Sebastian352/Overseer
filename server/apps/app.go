package apps

type App interface {
	GetName() string
	GetId() uint64
}

type basicApp struct {
	name string
	id   uint64
}

func (b *basicApp) GetName() string {
	return b.name
}

func (b *basicApp) GetId() uint64 {
	return b.id
}

// Create a new Basic App.
func NewBasicApp(id uint64, name string) *basicApp {
	return &basicApp{id: id, name: name}
}
