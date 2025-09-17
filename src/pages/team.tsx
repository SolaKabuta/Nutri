import PageTransition from "@/components/animations/PageTransition";
import TeamsCard from '@/components/ui/team/TeamsCard';

import Hero from '@/components/sections/team/Hero';
const Team = () => {
  return (
    <>
      <PageTransition>
      {/*<main>*/}
      <Hero/>
      <TeamsCard/>
      {/*</main>*/}
      </PageTransition>
    </>
  );
}

export default Team;