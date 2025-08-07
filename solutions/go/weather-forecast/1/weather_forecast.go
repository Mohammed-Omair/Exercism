// Package weather provides functionality to manage and report weather conditions.
package weather

// CurrentCondition represents the current weather condition.
var CurrentCondition string

// CurrentLocation represents the location for which the weather condition is reported.
var CurrentLocation string

// Forecast returns a string describing the current weather condition for a given city.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
