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
                          <CardTitle>{teammate.name}</CardTitle>
                          <CardText>{teammate.email}</CardText>
                          <CardText>{teammate.role}</CardText>
                      </CardText>
                      <Button color='info' onClick={() => editTeamMember(teammate)}>Edit</Button>
                  </CardBody>
              </Card>
          ))
      }
  </div>
  );
}

export default TeamMemberCard;
