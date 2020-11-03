import React from "react";
import {Card, CardText, CardBody, CardTitle, Button} from 'reactstrap';

function TeamMemberCard(props) {
const {teamMembers, selectEditMember} = props;
const editTeamMember = (teammate) => {
    selectEditMember(teammate);
}
  return (
  <div className="tmCard">
      {
          teamMembers.map( teammate => (
              <Card key={teammate.id} className="card">
                  <CardBody>
                      <CardText>
                          <CardTitle className="name">{teammate.name}</CardTitle>
                          <CardText className="email">{teammate.email}</CardText>
                          <CardText className="role">{teammate.role}</CardText>
                      </CardText>
                      <Button className="edit" onClick={() => editTeamMember(teammate)}>Edit</Button>
                  </CardBody>
              </Card>
          ))
      }
  </div>
  );
}

export default TeamMemberCard;
