package httpServer

import (
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
}

func (a *AppsHandler) handleAppsPost(w http.ResponseWriter, r *http.Request) {
	log.Println("[+] POST apps/")
}
