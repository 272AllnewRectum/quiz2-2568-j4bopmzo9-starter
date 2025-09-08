import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  type DividerCssVariables,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};
    
  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  //let val_number: number = Number("500.0");
  //console.log(val_number + 100); // 600.0

  return (
    <div
      className="modal fade"
      id="modal" //id="modalregister": ตัวระบุของ modal (ใช้กับ data-bs-target หน้า HomePage)
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <text className="modal-title">Add an items</text>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>

  );
    
  
}
