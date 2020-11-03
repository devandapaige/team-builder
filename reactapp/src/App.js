import React, { useState } from "react";
import "./App.css";
import TeamForm from "./components/TeamForm";
import TeamMemberCard from "./components/TeamMemberCard";
const TeamData = [
  {
    id: 1,
    name: "Amanda Nelson",
    email: "devandapaige@gmail.com",
    role: "Frontend Engineer",
  },
  {
    id: 2,
    name: "Alex Nelson",
    email: "alex@email.com",
    role: "UX Design",
  },
  {
    id: 3,
    name: "Kiwi Nelson 😸",
    email: "none",
    role: "Emotional Support",
  },
];
function App() {
  //Two sets of state, one for the team members and the other for which team member is being selected to edit.
  const [teamMembers, setTeamMembers] = useState(TeamData);
  const [editMember, setEditMember] = useState("");
  //when the Form is filled out a new team member will be added to the page.
  const addNewMember = (newTeamMember) => {
    newTeamMember.id = Date.now();
    setTeamMembers([...teamMembers, newTeamMember]);
  };
  //stretch goal: to add an option for editing the credentials of an existing team member:
  const selectEditMember = (teamMemberEdit) => {
    setEditMember(teamMemberEdit);
  };
  const editTeamMember = (teamMember) => {
    const currentTeam = [...teamMembers];
    const newTeam = currentTeam.map((teamMemberEdit) => {
      if (teamMemberEdit.id === teamMember.id) {
        teamMemberEdit.name = teamMember.name;
        teamMemberEdit.email = teamMember.email;
        teamMemberEdit.role = teamMember.role;
      }
      return teamMemberEdit;
    });
    setTeamMembers(newTeam);
    setEditMember("");
  };

  return (
    <div className="app">
      <h1>Project Team List</h1>
      <TeamForm
        addNewMember={addNewMember}
        editTeamMember={editTeamMember}
        editMember={editMember}
      />
      <TeamMemberCard
        teamMembers={teamMembers}
        selectEditMember={selectEditMember}
      />
    </div>
  );
}

export default App;
