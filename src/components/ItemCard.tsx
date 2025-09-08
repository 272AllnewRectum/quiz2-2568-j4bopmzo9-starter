import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type FoodProps = {
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard() {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  <Group>
    <Card>
      <ActionIcon color="red" onClick={() => {}}>
        <IconTrash size={16} />
      </ActionIcon>
      <Text>
        {} - {} Baht x {} = {} Baht
      </Text>
      <Badge fullWidth>Submit</Badge>
    </Card>
  </Group>;
  //let val_number: number = Number("500.0");
  //console.log(val_number + 100); // 600.0

  return (
    <div>
      <Group>
        <Card>
          <ActionIcon color="red" onClick={() => {}}>
            <IconTrash size={16} />
          </ActionIcon>
          <Text>
            
          </Text>
          <Badge color="green">Drinks</Badge>
        </Card>
      </Group>
      ;
    </div>
    /* Type additional text here. */
  );
}
