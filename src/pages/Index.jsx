import { Container, Text, VStack, Heading, Box, Link, IconButton, HStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Multimodal Data Analysis
        </Heading>
        <Text fontSize="lg" textAlign="center">
          A comprehensive toolkit for analyzing different types of multimodal datasets. Automatically process, analyze, and extract useful information from various data modalities including text, images, audio, and more.
        </Text>
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Features
          </Heading>
          <VStack spacing={2} align="start">
            <Text>- Python scripts for data processing and analysis</Text>
            <Text>- Pre-trained models for various data modalities</Text>
            <Text>- Sample datasets for testing and experimentation</Text>
            <Text>- Detailed documentation and usage guides</Text>
          </VStack>
        </Box>
        <HStack spacing={4}>
          <Link href="https://github.com/your-repo/multimodal-data-analysis" isExternal>
            <IconButton aria-label="GitHub Repository" icon={<FaGithub />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
