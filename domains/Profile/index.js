import ProfileAbout from "./sections/About";
import ProfileSkill from "./sections/Skill";
import ProfileEducation from "./sections/Education";

function ProfileView() {
  return (
    <>
      <ProfileAbout />
      <hr />
      <ProfileSkill />
      <hr />
      <ProfileEducation />
    </>
  );
}

export default ProfileView;
