import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function TeamForm(props) {
  const { addNewMember, editTeamMember, editMember } = props;
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    setTeamMember(editMember);
  }, [editMember]);
  const handleChanges = (e) => {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  };
  const subitForm = (e) => {
    //so it doesn't refresh the whole page
    e.preventDefault();
    if (editMember) {
      editTeamMember(teamMember);
    } else {
      addNewMember(teamMember);
    }
    setTeamMember({
      name: "",
      email: "",
      role: "",
    });
  };
  return (
    <div className="form">
      <Form onSubmit={subitForm}>
        <FormGroup>
          <Label htmlFor="name">Name: </Label>
          <Input
            type="text"
            id="name"
            placeholder="Full Name"
            name="name"
            value={teamMember.name}
            onChange={handleChanges}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email: </Label>
          <Input
            type="email"
            id="email"
            placeholder="email@email.com"
            name="email"
            value={teamMember.email}
            onChange={handleChanges}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="role">Project Role: </Label>
          <Input
            type="text"
            id="role"
            placeholder="Full Stack Engineer"
            name="role"
            value={teamMember.role}
            onChange={handleChanges}
            required
          />
        </FormGroup>
        <Button className="formButton" type="submit">
          {!editMember ? "Add Team Member" : "Edit Team Member"}
        </Button>
      </Form>
    </div>
  );
}

export default TeamForm;
