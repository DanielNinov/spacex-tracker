import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { NO_PATCH } from '../../common/constants';
import DateFormatter from '../../utils/DateFormatter';

const SingleLaunch = ({ launch }) => {
  return (
    <>
      <Card className="mb-3">
        <Row noGutters="true">
          <Col className="col-auto">
            {launch.links.patch.small ?
              <Image className="launch-patch-small ml-1" src={launch.links.patch.small} alt={`${launch.name} patch`}
                width="100" height="100" /> :
              <Image className="launch-patch-small ml-1" src={NO_PATCH} alt={`${launch.name} missing patch`}
                width="100" height="100" />} <br />
          </Col>

          <Col>
            <Card.Body>
              <Card.Title>{launch.name} / {launch.rocket.name}</Card.Title>
              <Card.Subtitle className="mb-1">{DateFormatter(launch.date_utc, launch.date_precision, launch.tbd, launch.net)}</Card.Subtitle>

              {launch.details ?
              <Card.Text>{launch.details}</Card.Text> :
              <Card.Text className="card-text">No description available</Card.Text>}

              <Card.Link className="social-media-icon"
                href={`${launch.links.reddit.campaign}`}
                aria-label={`${launch.name} Reddit Link`}><i className="fab fa-reddit fa-lg" /></Card.Link>
              <Card.Link className="social-media-icon"
                href={`https://youtu.be/${launch.links.youtube_id}`}
                aria-label={`${launch.name} Youtube Link`}><i className="fab fa-youtube fa-lg" /></Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default SingleLaunch;