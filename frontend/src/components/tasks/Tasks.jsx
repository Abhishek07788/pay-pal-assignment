import { Box, Button, Heading, Select, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import TaskModalForAdd from "./Modal";
import {
  deleteTaskAction,
  getTaskByName,
  getTaskBySprintIdAction,
} from "../../Redux/task/task.action";
import TaskModalForEdit from "./EditModal";

const Tasks = () => {
  const { loginData } = useSelector((store) => store.User);
  const { taskData, error, loading } = useSelector((store) => store.Task);
  const [useData, setUserData] = useState({});
  const [currentTask, setOneTask] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setEditIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect(() => {
    if (loginData) {
      setUserData(jwt_decode(loginData.token));
    }
    const sprint_id = localStorage.getItem("sprint_id");
    dispatch(getTaskBySprintIdAction(sprint_id));
  }, [loginData]);

  const handleDelete = (id) => {
    // ------------ (delete task) ----------------
    dispatch(deleteTaskAction(id));

    setTimeout(() => {
      const sprint_id = localStorage.getItem("sprint_id");
      dispatch(getTaskBySprintIdAction(sprint_id));
      toast({
        title: `Deleted.👍`,
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }, 800);
  };

  // ---------- Edit -----------
  const handleEdit = (el) => {
    setEditIsModalVisible(!isEditModalVisible);
    setOneTask(el);
  };

  const handleGetAssigneeName = (e) => {
    if (e.target.value) {
      dispatch(getTaskByName(e.target.value));
    } else {
      const sprint_id = localStorage.getItem("sprint_id");
      dispatch(getTaskBySprintIdAction(sprint_id));
    }
  };

  return (
    <div>
      {/* ---------Main Heading------ */}
      <Box
        display="flex"
        m="auto"
        mt="24"
        alignItems="center"
        w={["85%", "85%", "55%", "55%"]}
        justifyContent="space-between"
        bg="#121212"
        borderRadius={10}
        p="5"
      >
        <Heading color="#ffffff">Create a Task</Heading>
        <Button
          onClick={() => setIsModalVisible(!isModalVisible)}
          colorScheme={"teal"}
        >
          Create
        </Button>
      </Box>

      {/* ---------- filter --------- */}
      <Box w={["85%", "85%", "55%", "55%"]} m="auto">
        <Select
          w={["60%", "60%", "40%", "40%"]}
          float="right"
          bg="grey"
          color="black"
          borderColor="black"
          onChange={handleGetAssigneeName}
        >
          <option value="">All Task of A Particular User</option>
          {taskData &&
            taskData.map((el) => (
              <option key={el._id} value={el.assignee_name}>
                {el.assignee_name}
              </option>
            ))}
        </Select>
      </Box>
      {/* -------------- ( Api Error ) --------------- */}
      {error ? <Heading color="red">Server error...</Heading> : ""}
      {loading ? <Heading fontSize={30} color="green">loading...</Heading> : ""}

      {/* ---------- Tasks -------- */}
      {taskData.length == 0 ? (
        <Heading fontSize={[20,20,40,40]} textAlign="center" color="#989898" mt="20">
          No Task Found on this sprint!!
        </Heading>
      ) : (
        ""
      )}

      <Box mt={14}>
        {taskData &&
          taskData.map((el) => (
            <Box
              key={el._id}
              display="flex"
              m="auto"
              mt="10"
              alignItems="center"
              w={["80%","80%","50%","50%"]}
              justifyContent="space-between"
              bg="#181c47"
              borderRadius={10}
              p="5"
            >
              <Box textAlign="left">
                <Heading fontSize={18} color="#ffffff">
                  Task Name: {el.task_name}
                </Heading>

                <Heading fontSize={15} color="#ffffff">
                  Assignee: {el.assignee_name}
                </Heading>
                <Text color="#ffffff" fontSize={14} mt="2">
                  Status: {el.status}
                </Text>
                <Text color="#ffffff" fontSize={14} mt="2">
                  Description: {el.description}
                </Text>
              </Box>
              <Box>
                <Button
                  fontSize={15}
                  ml="2"
                  onClick={() => handleEdit(el)}
                  colorScheme={"teal"}
                >
                  Edit Task
                </Button>
                <Button
                  fontSize={15}
                  ml="2"
                  onClick={() => handleDelete(el._id)}
                  colorScheme={"#dc143c"}
                  bg={"#dc143c"}
                >
                  Delete Task
                </Button>
              </Box>
            </Box>
          ))}
      </Box>
      {/* ----------------- (Add Modal) ---------- */}
      <TaskModalForAdd isOpen={isModalVisible} setIsOpen={setIsModalVisible} />
      {/* ----------------- (Edit Modal) ---------- */}
      <TaskModalForEdit
        isOpen={isEditModalVisible}
        setIsOpen={setEditIsModalVisible}
        currentTask={currentTask}
      />
    </div>
  );
};

export default Tasks;
