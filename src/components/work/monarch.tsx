import Window from "../common/Window";

export default function Monarch() {
  return (
    <div className="bg-base-300 mt-9">
      <div className="bg-base-100 flex justify-center">
        <Window>
          <iframe
            src="https://ueh-biztech-hackathon-e18wa79t0-javianng.vercel.app"
            className="h-[90vh] w-full bg-white"
          />
        </Window>
      </div>
    </div>
  );
}
