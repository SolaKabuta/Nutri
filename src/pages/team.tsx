import PageTransition from "@/components/animations/PageTransition";
import OurTeam from '@/components/sections/team/OurTeam';

import Hero from '@/components/sections/team/Hero';
const Team = () => {
  return (
    <>
      <PageTransition>
      <main>
      <Hero/>
      <OurTeam/>
      </main>
      </PageTransition>
    </>
  );
}

export default Team;