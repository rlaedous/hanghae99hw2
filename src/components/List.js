import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const List = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <StyledSection>
        <h2>Working</h2>
        <StyledBox>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return <Todo key={todo.id} todo={todo} />;
            } else {
              return null;
            }
          })}
        </StyledBox>
      </StyledSection>
      <StyledSection>
        <h2>Done</h2>
        <StyledBox>
          {todos.map((todo) => {
            if (todo.isDone) {
              return <Todo key={todo.id} todo={todo} />;
            } else {
              return null;
            }
          })}
        </StyledBox>
      </StyledSection>
    </div>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    color: #fff;
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background-color: #437299;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
`;

export default List;