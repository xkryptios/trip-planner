import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Link to="/">
        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
          <Text fontSize="lg" fontWeight="bold">
            ROAM
          </Text>
        </Button>
      </Link>
    </Box>
  );
}
