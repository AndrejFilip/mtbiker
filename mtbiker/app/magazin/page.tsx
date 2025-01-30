import { FrontImage } from "./components/FrontImage";
import { MagazineContainer } from "./components/MagazineContainer";

export default function Index() {
  return (
    <div {...{ className: "w-full flex flex-col gap-2" }}>
      <FrontImage />
      <MagazineContainer />
    </div>
  );
}
