import r2wc from "@r2wc/react-to-web-component";
import UcList from "./Components/List/List";
import UcButton from "./Components/Button/Button";

const ucList = r2wc(UcList, { props: { data: "json" } });
const ucButton = r2wc(UcButton, {
  props: { funcProp: "function" },
  shadow: "open",
});

// custom elements must always be named with an '-' in the name so that our html can make a disctintion between custom elements
customElements.define("uc-button", ucButton);

customElements.define("app-webcomponent", ucList);
