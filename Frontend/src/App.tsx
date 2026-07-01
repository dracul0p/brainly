import Button from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import { Card } from "./components/ui/Card";
import CreateContentModel from "./components/ui/CreateContentModel";
import { useState } from "react";

function App() {
  const [modelOpen, setModelOpen] = useState(true);
  return (
    <div className=" min-h-screen bg-black p-4 ">
      <div className="flex justify-end gap-4 p-4 mr-4">
        <Button
          startIcon={<PlusIcon />}
          varient="primary"
          size="md"
          text="Add"
          onClick={() => setModelOpen(true)}
        />
        <Button
          startIcon={<ShareIcon size="md" />}
          varient="secondary"
          size="md"
          text="Share"
          onClick={() => {}}
        />{" "}
      </div>
      <div className="flex items-start">
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=s9HIgo6_2K4"
          title="React Tutorial"
        />
        <Card
          type="twitter"
          link="https://x.com/PR0GRAMMERHUM0R/status/2071866359026155619?ref_src=twsrc%5Etfw"
          title="First tweet"
        />
      </div>

      <CreateContentModel
        open={modelOpen}
        onClose={() => setModelOpen(false)}
      />
    </div>
  );
}

export default App;
