import Data from "@/components/Data";
import Particle from "@/components/Particle";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-6 lg:pb-20">
          {/* slogan */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="font-secondary sm:text-xl text-xs">
              Desenvolvedor de Software
            </span>
            <h1 className="xl:text-5xl sm:text-4xl text-3xl  border-accent border-y-2 p-2">
              Transformando Idéias <br />
              em{" "}
              <span className="font-quartenary text-accent">
                Realidade Digital
              </span>
            </h1>
            <span className="font-secondary sm:text-xl text-xs">
              Analista e desenvolvedor de sistemas
            </span>
          </div>

          {/* particles */}
          <Particle />

          {/* photo */}
          <div className="order-1 lg:mb-0 lg:pb-0 pb-6">
            <Photo />
          </div>
        </div>
      </div>
      <Data />
    </section>
  );
}
