import React from 'react';
import axios from 'axios';
import { Grid, VStack, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import ProjectContainer from './project-container';

class ProjectsPage extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    try {
      const repositoryRequestUrl =
        'https://api.github.com/users/MithunRedd/repos?sort=updated&direction=desc';
      const repositoryRequestConfig = {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      };

      axios
        .get(repositoryRequestUrl, repositoryRequestConfig)
        .then((repositoryResult) => {
          if (repositoryResult.status === 200 && repositoryResult.data) {
            this.setState({ projects: repositoryResult.data });
          }
        });
    } catch (error) {}
  }

  render() {
    const { projects } = this.state;

    return (
      <>
      <VStack 
          justifyContent="center"
          pl={2}
        ><Heading mt={4}  mb={2}>Portfolio</Heading></VStack>
      <Grid
        mt={3}
        p={4}
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={3}
      >
        {projects.length ? (
          projects.map((project) => (
            <ProjectContainer key={project.id} project={project} />
          ))
        ) : (
          <Spinner />
        )}
        </Grid>
      </>
    );
  }
}

export default ProjectsPage;