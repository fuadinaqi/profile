import ProfileAbout from "./sections/About";
import ProfileSkill from "./sections/Skill";
import ProfileEducation from "./sections/Education";
import ProfileExperience from "./sections/Experience";

function ProfileView() {
  return (
    <>
      <ProfileAbout />
      <hr />
      <ProfileSkill />
      <hr />
      <ProfileEducation />
      <hr />
      <ProfileExperience />
    </>
  );
}

export default ProfileView;
