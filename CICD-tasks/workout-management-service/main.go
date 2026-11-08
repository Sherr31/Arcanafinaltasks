package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
    e.POST("/create", create)
	e.Logger.Fatal(e.Start(":1323"))
}

func create(c echo.Context) error {
	return c.String(http.StatusOK, "Workout created")
}
