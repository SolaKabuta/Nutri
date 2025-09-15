import PageTransition from "@/components/animations/PageTransition";

import Hero from '@/components/sections/team/Hero';
const Team = () => {
  return (
    <>
      <PageTransition>
      <main>
      <Hero/>
      <Hero/>
      </main>
      </PageTransition>
    </>
  );
}

export default Team;