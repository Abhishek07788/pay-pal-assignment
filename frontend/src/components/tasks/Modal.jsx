import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Button,
  useToast,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction, getTaskBySprintIdAction } from "../../Redux/task/task.action";

const TaskModalForAdd = ({ isOpen, setIsOpen }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    task_name: "",
    assignee_name: "",
    status: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sprint_id = localStorage.getItem("sprint_id");
    setForm((prev) => ({ ...prev, [name]: value, sprint_id: sprint_id }));
  };

  // ----------------- (Add) -----------
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: `New Task Added.👍`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    setIsOpen(false);
    dispatch(addTaskAction(form));

    setTimeout(() => {
      dispatch(getTaskBySprintIdAction(form.sprint_id));
    }, 100);
    e.target.reset();
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb="4" bg="#f3f7fd" mt="40" w="50%" color="black">
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Text fontWeight="bold">Task Name:</Text>
              <Input
                type="text"
                placeholder="Task Name"
                name="task_name"
                value={form.task_name}
                onChange={handleChange}
                borderColor="black"
              />
              <Text fontWeight="bold" mt="4">
                Assignee Name:
              </Text>
              <Input
                type="text"
                placeholder="Assignee Name"
                name="assignee_name"
                value={form.assignee_name}
                onChange={handleChange}
                borderColor="black"
              />
              <Select
                borderColor="black"
                mt="4"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="">-- Select Status --</option>
                <option value="Todo">Todo</option>
                <option value="Progress">Progress</option>
                <option value="Done">Done</option>
              </Select>
              <Text fontWeight="bold" mt="4">
                Description:
              </Text>
              <Textarea
                borderBottom={"2px"}
                bg="#e6defa"
                color="black"
                fontSize={20}
                name="description"
                value={form.description}
                onChange={handleChange}
              />
              <Button mt="8" w="100%" colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskModalForAdd;
