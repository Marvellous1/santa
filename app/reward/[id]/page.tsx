import { notFound } from "next/navigation";
import { people } from "@/lib/data";
import { RewardReveal } from "@/components/reward-reveal";
import { BackgroundWrapper } from "@/components/background-wrapper";
import { PageProps } from "@/.next/types/app/page";

export async function generateStaticParams() {
  return people.map((person) => ({
    id: person.id,
  }));
}

export default function RewardPage({ params }: PageProps) {
  const person = people.find( async(p) => p.id === (await params).id);
  
  if (!person) {
    notFound();
  }
  
  return (
    <BackgroundWrapper>
      <div className="max-w-2xl w-full">
        <RewardReveal person={person} />
      </div>
    </BackgroundWrapper>
  );
}