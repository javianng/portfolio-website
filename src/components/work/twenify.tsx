import Window from "../common/Window";

export default function Twenify() {
  return (
    <div className="bg-base-300 mt-9 border shadow">
      <div className="bg-base-100 flex justify-center">
        <Window>
          <iframe
            src="https://twenity.vercel.app/"
            className="h-[90vh] w-full"
          />
        </Window>
      </div>
    </div>
  );
}
