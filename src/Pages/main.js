import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button } from 'semantic-ui-react';
import Typography from '@mui/material/Typography';
import { Image, Reveal, Label, Segment, Grid as SemanticGrid, Divider, List} from 'semantic-ui-react';
import Avatar from '@mui/material/Avatar';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">

          {/* content */}
          <Grid className="content">
                <Grid container textAlign= 'center'>
                    <Grid item xs={12}>
                        <Typography className={'headerFont'} variant="h1" component="h2"> R.S.G </Typography>
                    </Grid>
                </Grid>
                <Divider hidden />
                <Divider hidden />

                <SemanticGrid columns={1}>
                    <SemanticGrid.Column>
                    <Segment raised>
                        <Label as='a' color='red' ribbon>
                            In-Office
                        </Label>

                        <Divider hidden />

                        <SemanticGrid.Column>
                            <Segment padded>
                            <Label attached='top'>McAfee</Label>
                            <List bulleted>
                                <List.Item>
                                    Working on creating new shared middleware for various Modile, Web and Desktop applications at McAfee.
                                </List.Item>
                                <List.Item>
                                    Handling initiative to improve software development processes in the project.
                                </List.Item>
                            </List>
                            </Segment>
                        </SemanticGrid.Column>

                        <Divider hidden />

                        <SemanticGrid.Column>
                            <Segment padded>
                            <Label attached='top'>Vivint Solar - A Sunrun Company</Label>
                            <List bulleted>
                                <List.Item>
                                    Created new features for IOT, Mobile and Web applications using Node JS, AWS, GCP, React, React Native,
                                    Graph QL and various other tech
                                </List.Item>
                                <List.Item>
                                    Worked on E-commerce platform to create payment gateway using Paypal.
                                </List.Item>
                                <List.Item>
                                    Architecting and implementing solutions for grid services project using cloud computing.
                                </List.Item>
                                <List.Item>
                                    Reviewing project specifications and designing technology solutions that meet or exceed performance expectations.
                                </List.Item>
                            </List>
                            </Segment>
                        </SemanticGrid.Column>

                        <Divider hidden />

                        <SemanticGrid.Column>
                            <Segment padded>
                            <Label attached='top'>Limosys Software</Label>
                            <List bulleted>
                                <List.Item>
                                    Developed new concepts and redesigned web applications while collaborating with clients.
                                </List.Item>
                                <List.Item>
                                    Managed development milestones from initial steps through final delivery.
                                </List.Item>
                                <List.Item>
                                    Created web application for MTA to manage customer reservation and track fleet real-time.
                                    Managing and supporting developed system and continuously upgrading application.
                                </List.Item>
                                <List.Item>
                                    Reviewing project specifications and designing technology solutions that meet or exceed performance expectations.
                                </List.Item>
                            </List>
                            </Segment>
                        </SemanticGrid.Column>

                    </Segment>
                    </SemanticGrid.Column>

                    <SemanticGrid.Column>
                    <Segment raised>
                        <Label as='a' color='teal' ribbon='right'>
                            Outside-Office
                        </Label>

                        <Divider hidden />

                        <SemanticGrid.Column>
                            <Segment padded>
                            <Label attached='top'>Fitness</Label>
                            <List bulleted>
                                <List.Item>
                                    Believe in staying active whether its by running or going to gym or hiking.
                                </List.Item>
                                <List.Item>
                                    P2 paragliding pilot. Out of touch for a while though since Toronto doesn't have that many mountains to fly from.
                                </List.Item>
                                <List.Item>
                                    Like to eat clean/whole foods.
                                </List.Item>
                            </List>
                            </Segment>
                        </SemanticGrid.Column>
                    </Segment>
                    </SemanticGrid.Column>
                </SemanticGrid>

        </Grid>

        <Divider hidden />

        {/* footer */}
        <Grid container textAlign= 'center' className="footer">
            <Grid item xs={4}>
                <Button circular color='facebook' icon='facebook' href={"https://www.facebook.com/rohit.gulia.54"} target="_blank" size={'massive'}/>
            </Grid>
            <Grid item xs={4}>
                <Button circular color='linkedin' icon='linkedin' href={"https://www.linkedin.com/in/rohitgulia"} target="_blank" size={'massive'}/>
            </Grid>
            <Grid item xs={4}>
                <Button circular color='github' icon='github' href={"https://github.com/rohitgulia"} target="_blank" size={'massive'}/>
            </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}