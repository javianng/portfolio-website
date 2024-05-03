import Image from "next/image";

export default function MemoriesHub() {
  return (
    <div className="bg-base-300 mt-9">
      <div className="bg-base-100 flex justify-center">
        <Image
          src="/projectDocuments/memories-hub.png"
          alt={""}
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
