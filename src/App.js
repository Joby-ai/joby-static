import "./App.css";
import logo from "./assets/logo.svg";
import vector_1 from "./assets/vector_1.svg";
import vector_2 from "./assets/vector_2.svg";
import vector_3 from "./assets/vector_3.svg";
import vector_4 from "./assets/vector_4.svg";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Opacity overlay */}
      <div className="absolute inset-0" />

      {/* Main content */}
      <div className="relative z-10">
        <header className="p-8">
          <div className="flex items-center ml-4">
            <img src={logo} alt="logo" className="h-16" />
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 text-center font-[Cera Round Pro DEMO REGULAR]">
          <h1 className="text-4xl font-bold mb-4 text-[#F2A41D] font-[Cera Round Pro DEMO BLACK]">
            We've moved!
          </h1>
          <h2 className="text-4xl font-bold mb-8 font-[Cera Round Pro DEMO BLACK]">
            Joby.ai is now Hirebase.org
          </h2>

          <div className="max-w-xl mt-12 mx-auto space-y-6 text-gray-700 text-start text-lg ">
            <div>
              <h3 className="font-semibold font-[#475467]">
                What does this mean?
              </h3>
              <p>
                Don't worry, Joby.ai is not going away we are just changing its
                name (and domain)! Everything is the same, and better. If you
                are a Joby.ai user, you can login to HireBase with the same
                credentials, all your information including saved jobs is saved.
              </p>
            </div>
            <p>
              We've been updating HireBase.org for a while now, and decided its
              finally time to shutdown Joby.ai and move everyone over. If you
              have any questions please email{" "}
              <a
                href="mailto:spencer@hirebase.org"
                className="font-semibold font-[#475467]"
              >
                spencer@hirebase.org
              </a>{" "}
              or{" "}
              <a
                href="mailto:hello@joby.ai"
                className="font-semibold font-[#475467]"
              >
                hello@joby.ai
              </a>{" "}
              (same person).
            </p>
          </div>

          <a
            href="https://hirebase.org"
            className="inline-block mt-12 px-8 py-3 bg-[#F2A41D] text-white rounded-md hover:bg-[#F2A41D] transition-colors"
          >
            Go to HireBase.org
          </a>
        </main>
      </div>

      {/* Vector decorations */}
      <img src={vector_1} alt="" className="absolute left-0 top-1/3 w-42" />
      <img src={vector_2} alt="" className="absolute left-0 top-3/4 w-54" />
      <img src={vector_3} alt="" className="absolute right-0 bottom-2/4 w-42" />
      <img src={vector_4} alt="" className="absolute right-0 bottom-1/4 w-54" />
    </div>
  );
}
