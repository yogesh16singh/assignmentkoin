import TeamMemberImage from "../../assets/team-member-1.jpg";

const TeamMember = () => {
  return (
    <div className="rounded-md bg-[#e8f4fd] px-3 py-2 flex items-center md:gap-8 flex-wrap md:flex-nowrap justify-center md:justify-start gap-4">
      <div className="flex flex-col items-center">
        <img
          src={TeamMemberImage}
          alt="Team-Member-1"
          className="object-cover w-32 h-24 rounded-md"
        />
        <h4 className="font-bold text-sm tracking-tight py-1">John Doe</h4>
        <h5 className="opacity-60 font-medium text-xs leading-3">
          Designation here
        </h5>
      </div>
      <p className="w-full text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat
      </p>
    </div>
  );
};

export default TeamMember;
