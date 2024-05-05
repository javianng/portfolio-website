import Window from "../common/Window";

export default function TwitterClone() {
  return (
    <div className="bg-base-300 mt-9">
      <div className="bg-base-200 flex justify-center">
        <Window>
          <iframe
            src="https://twitter-clone-theta-two.vercel.app/"
            className="h-[90vh] w-full bg-white"
          />
        </Window>
      </div>
    </div>
  );
}
