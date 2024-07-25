import { ScrollArea } from "~/components/ui/scroll-area";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-lg shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-end justify-start text-balance bg-white p-4 text-end">
        <article>
          <h1 className="h1" id="about me">
            about me
          </h1>
          <p className="p">
            Exercitation ea velit elit sunt ullamco elit cillum sit proident
            commodo velit reprehenderit.
          </p>
          <p className="p">
            Laboris sunt qui amet reprehenderit reprehenderit labore
            exercitation cupidatat enim laborum id elit laboris ipsum officia.
            Irure mollit laborum labore qui qui occaecat eu consequat officia
            adipisicing ea ea fugiat. Eu nulla duis enim commodo velit veniam
            nostrud sunt aliqua aute do cupidatat consectetur. Voluptate aliqua
            sunt consectetur non irure incididunt ipsum consequat. Labore sint
            id culpa nisi non quis commodo mollit magna nisi nulla veniam.
          </p>
          <p className="p">
            Aliquip adipisicing laboris Lorem. Ullamco occaecat nulla et
            exercitation elit labore aliqua exercitation laborum consectetur do
            aute excepteur velit aliqua. Velit excepteur Lorem fugiat eiusmod
            occaecat ea. Nulla labore ad eu sit sint do ad occaecat sit in
            veniam duis reprehenderit labore. Sunt non id culpa veniam sunt est
            anim dolore ex. Consequat consequat esse anim nulla quis esse
            adipisicing consequat nostrud tempor commodo aute laborum. Aliquip
            ut enim eiusmod nostrud fugiat velit ut est do aliqua. Duis ex nisi
            non veniam deserunt Lorem anim nisi.
          </p>
        </article>
      </main>
    </ScrollArea>
  );
}
