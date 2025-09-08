import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddFoodModal from "../components/Modal";
import ItemCard from "../components/ItemCard";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button
        type="button"
        className="m-4 btn btn-primary"
        data-bs-toggle="modal" //data-bs-toggle="modal": บอก Bootstrap ว่าปุ่มนี้จะ เปิด modal
        data-bs-target="#modal"
      >
        Add Food Item
      </Button>
  
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">
        <text order={4}>Main Course: {} Baht</text>
        <text order={4}>Drink: {} Baht</text>
        <text order={4}>Dessert: {} Baht</text>
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack> 
        <ItemCard/> 
      </Stack>
    </Container>
  );
}
