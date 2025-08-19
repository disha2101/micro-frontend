import Card from "../components/card";
import { products } from "../assets/productsList";
import { useAppSelector } from "../store";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Badge,
} from "@chakra-ui/react";

const Index = () => {
  const { items } = useAppSelector((state) => state.products);
  return (
    <div className="container mx-auto py-6">
      <Heading mb={6} w="fit-content" size="lg" borderBottom={'1px solid'} borderColor="#e2e8f2" pb={1}>
        Featured Products
      </Heading>
      <Flex
        wrap="wrap"
        gap={6}
        align="center"
        p={4}
      >
        {products.map((product, key) => (
          <Card
            key={key}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </Flex>
      <Flex
        mt={10}
        direction="column"
        align="center"
        textAlign="center"
        gap={6}
      >
        {/* Note section */}
        <Box
          px={6}
          py={4}
          bg="yellow.50"
          border="1px dashed"
          borderColor="yellow.300"
          rounded="xl"
          shadow="sm"
          maxW="lg"
        >
          <Heading size="sm" color="yellow.700">
            ⚠️ Note: You can add a maximum of 10 items to the cart.
          </Heading>
        </Box>

        {/* Cart Summary */}
        {items && items.length > 0 && (
          <Box
            w="full"
            maxW="lg"
            bg="white"
            rounded="2xl"
            shadow="md"
            p={6}
            textAlign="center"
          >
            <Heading size="md" mb={4} color="teal.600">
              🛍️ Cart Summary
            </Heading>

            <Divider mb={4} />

            <Flex justify={'space-between'} align={'center'} alignItems={'center'} wrap="wrap" gap={6}>
              <Stat>
                <StatLabel>Products Added</StatLabel>
                <StatNumber>
                  {items.map((p) => p.quantity).reduce((a, b) => a + b, 0)}
                </StatNumber>
                <StatHelpText>
                  <Badge colorScheme="teal" textTransform={'none'} px={2} py={1} rounded="full">
                    In your cart
                  </Badge>
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Total Price</StatLabel>
                <StatNumber color="green.600">
                  ₹{" "}
                  {items
                    .map((p) => p.price * p.quantity)
                    .reduce((a, b) => a + b, 0)}
                </StatNumber>
                <StatHelpText>Incl. all items</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Unique Products</StatLabel>
                <StatNumber>{items.length}</StatNumber>
                <StatHelpText>
                  {items.length > 1 ? "Different products" : "Single product"}
                </StatHelpText>
              </Stat>
            </Flex>
          </Box>
        )}
      </Flex>
      ;
    </div>
  );
};

export default Index;
