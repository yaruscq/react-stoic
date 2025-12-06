import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  // Don't use two returns

  const display = true;

  return display ? <Welcome /> : <Code />;
}
