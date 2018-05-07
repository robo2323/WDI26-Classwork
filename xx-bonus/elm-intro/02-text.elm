import Name exposing {Html, Attribute, div, input text}
import Html.Attributes exposing (..)
import Html.events exposing (onInput)

main = Html.begginerProgram {model = model, view = view, update = update}