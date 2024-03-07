import TeamMember from "./TeamMember";
import { H2 } from "../shared/Typography";

const Team = () => {
  return (
    <section className="p-6 rounded-lg shadow-lg bg-white max-w-5xl w-full ">
      <H2 value="Team" />
      <p className="text-sm py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col gap-4">
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
};
export default Team;
