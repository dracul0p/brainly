import Button from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

function App() {
  return (
    <div className="flex">
      <Button
        startIcon={<ShareIcon size="md" />}
        varient="secondary"
        size="md"
        text="Share"
        onClick={() => {}}
      />{" "}
      <Button
        startIcon={<PlusIcon size={"md"} />}
        varient="primary"
        size="md"
        text="Share"
        endIcon={<ShareIcon size="md" />}
        onClick={() => {}}
      />
    </div>
  );
}

export default App;
