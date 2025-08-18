import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch, addProduct, updateQuantity } from "../store";

interface CardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, name, price, image }) => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) =>
    state.products.items.find((p) => p.id === id)
  );

  const handleAddToCart = () => {
    dispatch(addProduct({ id, name, price, quantity: 1 }));
  };

  const handleQuantityChange = (quantity: number) => {
    if (quantity >= 1 && quantity <= 10) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <Box
      className="shadow-lg rounded-2xl p-4 bg-white"
      maxW="250px"
      textAlign="center"
    >
      <Image
        src={image}
        alt={name}
        className="rounded-xl object-cover"
        w="100%"
        h="180px"
        mb={3}
      />
      <VStack spacing={2}>
        <Text fontWeight="semibold">{name}</Text>
        <Text color="gray.600">₹ {price}</Text>

        {product  ? (
          <HStack spacing={2}>
            <IconButton
              aria-label="Decrease"
              icon={<MinusIcon />}
              size="sm"
              rounded="full"
              isDisabled={product.quantity <= 1}
              onClick={() => handleQuantityChange(product.quantity - 1)}
            />
            <Text fontWeight="bold">{product.quantity}</Text>
            <IconButton
              aria-label="Increase"
              icon={<AddIcon />}
              size="sm"
              rounded="full"
              isDisabled={product.quantity >= 10}
              onClick={() => handleQuantityChange(product.quantity + 1)}
            />
          </HStack>
        ) : (
          <Button
            colorScheme="teal"
            size="sm"
            className="rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Card;
