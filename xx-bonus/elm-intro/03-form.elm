import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

main = Html.beginnerProgram { model=model,view=view,update=update}

-- Model
type alias Model = {
    name : String
    , password : String
    , passwordAgain : String
}

model : Model
model = Model "" "" "" -- equiv to { name="",password="",passworagian==""}

-- UPDATE
type Msg = Name String | Password String | PasswordAgain String

update : Msg -> Model -> Model
update msg model = 
    case msg of
    Name name ->
        { model | name=name}
    
    Password password ->
        {model | password = password}

    PasswordAgain password ->
        {model | passwordAgain=passwordAgain}

    -- VIEW 
view : Model -> Html msg
view model = 
    div []
            [
                input [type_ "text",onInput Name] []
                , input [ type_ "password", onInput Password]
                , input [ type_ "password", onInput PasswordAgain]
                , viewValidation model
            ]

viewValidation : Model -> Html msg
viewValidation model =
    let
        (color, message) = 
            if model.password == model.passwordAgain then
            ("green","ok")
    in
        
