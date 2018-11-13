package main

import "fmt"
import "net/http"
import "time"

func main() {
  template := "<!DOCTYPE html><html><head><meta charset='utf-8'>"
  template += "<title></title></head><body>%q</body></html>"

  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, template, time.Now())
  })
  http.ListenAndServe(":8000", nil)
}
