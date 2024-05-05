import Window from "../common/Window";

export default function GoogleClone() {
  return (
    <div className="bg-base-300 mt-9">
      <Window>
        <iframe
          src="https://google-clone-beta-rosy.vercel.app/"
          className="h-[90vh] w-full bg-white"
        />
      </Window>
    </div>
  );
}
