
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Index from "./pages";
import { Flex,Text } from "@chakra-ui/react";

const App = () => (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="*"
        element={
          <Flex
            height="100vh"
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={4}
          >
            <Text fontSize={20} fontWeight="bold">
              {" "}
              Sorry, this page is not available.
            </Text>
            <Text>
              The link you followed may be broken, or the page may have been
              removed...
            </Text>
          </Flex>
        }
      />
    </Routes>
);

export default App;