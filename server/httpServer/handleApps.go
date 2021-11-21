package httpServer

import (
	"fmt"
	"log"
	"net/http"
	"overseer/service"
)

type AppsHandler struct {
	srv service.AppService
}

func NewAppHandler(srv service.AppService) *AppsHandler {
	return &AppsHandler{srv: srv}
}

func (a *AppsHandler) handleApps(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		a.handleAppsGet(w, r)
		return
	case "POST":
		a.handleAppsPost(w, r)
		return
	}

	respondHTTPErr(w, r, http.StatusNotFound)
}

func (a *AppsHandler) handleAppsGet(w http.ResponseWriter, r *http.Request) {
	log.Println("[+] GET apps/")
	res := a.srv.GetMonitored()
	toSend := make([]string, 0, 10)
	for _, el := range res {
		toSend = append(toSend, el.GetName())
	}
	respond(w, r, http.StatusOK, toSend)
}

func (a *AppsHandler) handleAppsPost(w http.ResponseWriter, r *http.Request) {
	log.Println("[+] POST apps/")
	var res appsResponse
	decodeBody(r, &res)

	a.srv.ClearMonitored()
	fmt.Println("[+] Request apps: ")
	for _, name := range res.Apps {
		fmt.Println("[+] App Name: " + name)
		supported := a.srv.IsAppSupported(name)
		fmt.Printf("[+] App Supported: %t\n", supported)
		if supported {
			a.srv.AddMonitoredApp(name)
		}
	}
	respond(w, r, http.StatusAccepted, nil)
}

type appsResponse struct {
	Apps []string `json:"apps"`
}
