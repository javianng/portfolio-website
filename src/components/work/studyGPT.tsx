import Image from "next/image";
import Window from "../common/Window";

export default function StudyGPT() {
  return (
    <Window>
      <Image
        src={"/projectDocuments/StudyGPT/chat.png"}
        alt={"StudyGPT"}
        width={1600}
        height={1600}
      />
    </Window>
  );
}
