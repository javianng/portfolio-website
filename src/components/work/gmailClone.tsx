import Window from "../common/Window";

export default function GmailClone() {
  return (
    <div className="bg-base-300 mt-9 border shadow">
      <div className="bg-base-100 flex justify-center">
        <Window>
          <iframe
            src="https://gmail-clone-sigma-ten.vercel.app/"
            className="h-[90vh] w-full bg-white"
          />
        </Window>
      </div>
    </div>
  );
}
