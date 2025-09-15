import TeamCard from "@/components/ui/team/TeamCard";
interface OurTeamProps {
  image: string;
  label: string;
  role: string;
}

const OurTeam = () => {
  return (
    <main>
     <TeamCard/> 
    </main>
  );
};

export default OurTeam;