package httpServer

import (
	"flag"
	"log"
	"net/http"
	"overseer/service"
)

type Server interface {
	Run()
}

type customHttpServer struct {
	appService service.AppService
}

// Create a new instance of a HTTP Server
func NewServer(appService service.AppService) Server {
	return &customHttpServer{appService: appService}
}

func (c *customHttpServer) Run() {

	addr := flag.String("port", ":8080", "port to listen to")

	handler := NewAppHandler(c.appService)
	log.Println("[+] Starting customHttpServer")
	log.Printf("[+] Running on port %s", *addr)
	mux := http.NewServeMux()
	mux.HandleFunc("/apps", withCORS(handler.handleApps))

	http.ListenAndServe(*addr, mux)
	log.Println("[+] Stopping...")
}
