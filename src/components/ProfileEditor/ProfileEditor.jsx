import { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

function ProfileEditor() {
  const [name, setName] = useState("User");
  const [job, setJob] = useState("Student");
  const [desc, setDesc] = useState("Description");

  return (
    <div>
      <h3>Profile Editor</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />

      <ProfileCard name={name} profession={job} description={desc} />
    </div>
  );
}

export default ProfileEditor;
