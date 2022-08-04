import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggleStatus } from "../redux/modules/todos";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const toggleStatusHandler = () => {
    dispatch(toggleStatus(todo.id));
  };

  return (
    <StyledTodo>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <StyledButtonGroup>
        <StyledTodoButton color="#4285F4">
          <Link to={`/${todo.id}`}>상세보기</Link>
        </StyledTodoButton>
        <StyledTodoButton color="#34A853" onClick={toggleStatusHandler}>
          {todo.isDone ? "취소" : "완료"}
        </StyledTodoButton>
        <StyledTodoButton color="#EA4335" onClick={onDeleteHandler}>
          삭제하기
        </StyledTodoButton>
      </StyledButtonGroup>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;

  flex-basis: 24.93%;
  height: 250px;
  padding: 20px;
  box-sizing: border-box;

  h3 {
    font-weight: 600;
    font-size: 24px;
  }

  p {
    color: #555;
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledTodoButton = styled.button`
  font-family: omnigothic, sans-serif;
  font-size: 12px;
  width: 30%;
  height: 20px;
  background-color: #fff;
  color: ${(props) => props.color};
  border-radius: 10px;
  border: 1.5px solid ${(props) => props.color};
  &:hover {
    color: #fff;
    background-color: ${(props) => props.color};
    transition: 0.3s;
  }
`;

export default Todo;