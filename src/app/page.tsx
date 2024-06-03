"use client";

import { useState } from "react";
import {
  AgeResponse,
  CountryResponse,
  GenderResponse,
  Result,
} from "@/components/interface";
import NameForm from "@/components/NameForm";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (name: string) => {
    setLoading(true);
    setResult(null);

    try {
      const [ageRes, genderRes, countryRes] = await Promise.all([
        fetch(`https://api.agify.io?name=${name}`),
        fetch(`https://api.genderize.io?name=${name}`),
        fetch(`https://api.nationalize.io?name=${name}`),
      ]);

      const ageData: AgeResponse = await ageRes.json();
      const genderData: GenderResponse = await genderRes.json();
      const countryData: CountryResponse = await countryRes.json();

      setResult({
        age: ageData.age,
        gender: genderData.gender,
        country: countryData.country.map((c) => c.country_id),
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            HyVee Assignment
          </h1>
          <br />
          <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Name-base age, gender, and nationality predictor
          </h1>
          <br />
          <NameForm onSubmit={handleFormSubmit} />
        </div>
        <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
          {result && (
            <TextRevealCard
              text="See your age and gender"
              revealText={`Age: ${result.age}, Gender: ${result.gender}`}
            >
              <TextRevealCardTitle>
                Country: {result.country.join(", ")}
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                <TextGenerateEffect words="This is a text reveal card. Hover over the card to reveal the
                age." />
              </TextRevealCardDescription>
            </TextRevealCard>
          )}
        </div>
      </div>
    </>
  );
}
