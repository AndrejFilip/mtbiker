import { FrontImage } from "./Components/FrontImage";
import { MessagesContainer } from "./Components/MessagesContainer";

export default function Index() {
  return (
    <div {...{ className: "w-full flex flex-col gap-2" }}>
      {" "}
      <FrontImage />
      <MessagesContainer />
    </div>
  );
}
