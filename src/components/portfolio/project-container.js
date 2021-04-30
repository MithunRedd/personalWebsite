import React from 'react';
import { Grid } from '@chakra-ui/layout';

import ProjectInfo from './project-info';
import ProjectMeta from './project-meta';

const ProjectContainer = ({ project }) => {
  const { name, description, ...otherProps } = project;
  return (
    <Grid
      padding="8px"
      cursor="pointer"
      color="white"
        borderRadius="base"
          bg='gray.500'
        _hover={{
        transform: 'translateY(-2px)',
        transition: 'all .2s',
      }}
      height={{ base: '135px', md: '123px' }}
    >
      
      <ProjectInfo name={name} description={description} />
      <ProjectMeta projectMeta={otherProps} />
    </Grid>
  );
};

export default ProjectContainer;