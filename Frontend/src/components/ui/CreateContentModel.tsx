import XIcon from "../../icons/xIcon";
import Button from "./Button";

// controlled component: ------>
function CreateContentModel({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed bg-black top-0 left-0 opacity-100 flex justify-center text-white ">
          <div className="flex flex-col justify-center">
            <span className="bg-white p-4  text-red-500 rounded">
              <div className="flex justify-end opacity-60 ">
                <div
                  className="hover:opacity-100 cursor-pointer"
                  onClick={onClose}
                >
                  <XIcon />
                </div>
              </div>
              <div className="flex flex-col p-3">
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button
                  varient="primary"
                  text="Submit"
                  size="md"
                  onClick={() => {}}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({
  onChange,
  placeholder,
}: {
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <input
      type="text"
      className="px-4 py-2 rounded m-2 text-black border border-gray-200"
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

export default CreateContentModel;
