import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import ModalForAdd from "./Modal";
import {
  deleteSprintAction,
  getSprintAction,
} from "../../Redux/sprint/sprint.action";
import { getTaskAction } from "../../Redux/task/task.action";

const Sprint = () => {
  const { loginData } = useSelector((store) => store.User);
  const { sprintData, error } = useSelector((store) => store.Sprint);
  const [useData, setUserData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect(() => {
    if (loginData) {
      setUserData(jwt_decode(loginData.token));
    }
    dispatch(getSprintAction());
    dispatch(getTaskAction());
  }, [loginData]);

  const handleDelete = (id) => {
    // ------------ (delete sprint) ----------------
    dispatch(deleteSprintAction(id));

    setTimeout(() => {
      dispatch(getSprintAction());
      toast({
        title: `Deleted.👍`,
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }, 100);
  };

  const handleView = (id) => {
    localStorage.setItem("sprint_id", id);
    navigate("/tasks");
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
        <Heading color="#ffffff">Create a Sprint</Heading>
        <Button
          onClick={() => setIsModalVisible(!isModalVisible)}
          colorScheme={"teal"}
        >
          Create
        </Button>
      </Box>

      {/* -------------- ( Api Error ) --------------- */}
      {error ? <Heading color="red">Server error...</Heading> : ""}

      {/* ---------- Sprints -------- */}
      {sprintData.length == 0 ? (
        <Heading
          fontSize={[20, 20, 40, 40]}
          textAlign="center"
          color="#989898"
          mt="10"
        >
          No Sprint Found!!
        </Heading>
      ) : (
        ""
      )}
      {sprintData &&
        sprintData.map((el) => (
          <Box
            key={el._id}
            display="flex"
            m="auto"
            mt="10"
            alignItems="center"
            w={["80%", "80%", "50%", "50%"]}
            justifyContent="space-between"
            bg="#181c47"
            borderRadius={10}
            p="5"
          >
            <Box textAlign="left">
              <Heading fontSize={18} color="#ffffff">
                {el.name}
              </Heading>

              <Text color="#ffffff" fontSize={14} mt="2">
                {el.description}
              </Text>
            </Box>
            <Box>
              <Button
                fontSize={13}
                ml="2"
                onClick={() => handleView(el._id)}
                colorScheme={"teal"}
              >
                View Task
              </Button>
              <Button
                fontSize={13}
                ml="2"
                onClick={() => handleDelete(el._id)}
                colorScheme={"#dc143c"}
                bg={"#dc143c"}
              >
                Delete Sprint
              </Button>
            </Box>
          </Box>
        ))}

      {/* ----------------- (Modal) ---------- */}
      <ModalForAdd isOpen={isModalVisible} setIsOpen={setIsModalVisible} />
    </div>
  );
};

export default Sprint;
