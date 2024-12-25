import { BackgroundWrapper } from "@/components/background-wrapper";

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="max-w-2xl text-center w-full">
        <h1 className="text-3xl font-bold m-0 text-white font-serif">
          WELCOME TO
        </h1>
        <h1 className="text-5xl leading-tight mt-0 font-bold text-white font-serif">
          SECRET SANTA!
        </h1>
      </div>
    </BackgroundWrapper>
  );
}
