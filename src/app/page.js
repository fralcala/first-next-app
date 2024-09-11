"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {
  const headerStyle = {
    backgroundColor: "lightcoral",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  function openModal() {
    console.log("open");
  }

  const myNmae = "Ty the Lobster Guy";

  const farmAnimals = [
    "seal",
    "polar bear",
    "iguana",
    "chimpanzee",
    "tasmanian devil",
  ];

  // const person = (
  //   name: "Ty the Ghost Guy",
  //   hairColor: "black",
  //   eyeColor: "void",
  // )

  const timesTySaid = 0;

  <main>
    <nav className={homeStyles.homeNav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
    <h1 style={headerStyle}>Next.js App</h1>
    <p className={homeStyles.callout}>
      This is a very sunny day here in Rainyville. Suprising not our sunniest
      day this week. signing off, {myNmae}.
    </p>
    <p>Array of farm animals: {farmAnimals.join(", ")}</p>
    <p>Person: {JSON.stringify(person)}</p>
    <p>Times Ty said Hemi-demi-semi-quaver: {timesTySaid}</p>
    <p>Is it Tuesday: (String)</p>
    <button onClick={openModal}>View Sun</button>
  </main>;
}
