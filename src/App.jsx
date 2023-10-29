import { useState } from "react";
import InputGroups from "./components/shared/forms/InputGroups";
import Button from "./components/UI/buttons/Button";

const init = {
  title: "",
  bio: "",
  skills: "",
};

function App() {
  const [formState, setFormState] = useState({ ...init });
  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputGroups
            name="title"
            value={formState.title}
            placeholder={"Software Engineer"}
            label="Title"
            onChange={handleChange}
          />
          <InputGroups
            name="bio"
            value={formState.bio}
            placeholder={"I am a software Engineer"}
            label="Bio"
            onChange={handleChange}
          />
          <InputGroups
            name="skills"
            value={formState.skills}
            placeholder={"Javascript,React"}
            label="Skills"
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}

export default App;
