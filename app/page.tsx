"use client";
import { Toaster } from "sonner";
import BaseGlobe from "./components/Hero";
import GlobeHeader from "./components/Hero/GlobeHeader";

import { DetailsSheet } from "./components/Passport/details-sheet";
import EventSheet from "./components/Passport/event-sheet";

export default function Home() {
  return (
    <main className="bg-white scrollbar-hide">
      <DetailsSheet />
      <GlobeHeader />
      <BaseGlobe />
      <EventSheet />
      <Toaster position="bottom-right" visibleToasts={7} />
    </main>
  );
}
