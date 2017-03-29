module Title = {
  include ReactRe.Component.JsProps;
  type props = {text: string};
  let name = "title";
  let render {props} => <h1> (ReactRe.stringToElement props.text) </h1>;
  type jsProps = Js.t {. text : string};
  let jsPropsToReasonProps = Some (fun jsProps => {text: jsProps##text});
};

include ReactRe.CreateComponent Title;

let createElement ::text => wrapProps text;
