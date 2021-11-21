package apps

import "testing"

func TestAppCollectionAddSize(t *testing.T) {
	col := NewMapCollection()
	app1 := NewBasicApp(1, "Firefox")
	app2 := NewBasicApp(2, "Chrome")
	col.AddApp(app1)
	if col.Size() != 1 {
		t.Fatal("Expected one element")
	}

	col.AddApp(app2)
	if col.Size() != 2 {
		t.Fatal("Expected two elements")
	}
}

func TestAppCollectionAddElems(t *testing.T) {
	col := NewMapCollection()
	app1 := NewBasicApp(1, "Firefox")
	app2 := NewBasicApp(2, "Chrome")
	col.AddApp(app1)
	col.AddApp(app2)

	res, err := col.GetApp(app1.GetId())
	if err != nil {
		t.Fatal(err.Error())
	}

	if res != app1 {
		t.Fatal("Expected to return same element")
	}

	res, err = col.GetApp(app2.GetId())
	if err != nil {
		t.Fatal(err.Error())
	}

	if res != app2 {
		t.Fatal("Expected to return same element")
	}
}
