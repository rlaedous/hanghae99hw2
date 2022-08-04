import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "../redux/modules/todos";
import styled from "styled-components";

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  const todos = useSelector((state) => state.todos.todo);

  return (
    <StyledDetail key={todos.id}>
      <div>
        <p>ID: {todos.id}</p>
        <StyledDetailButton onClick={() => navigate("/")}>
          이전으로
        </StyledDetailButton>
      </div>
      <div>
        <h1>{todos.title}</h1>
        <p>{todos.body}</p>
      </div>
    </StyledDetail>
  );
};

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 500px;
  height: 300px;
  margin: 30vh auto;
  padding: 20px;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > h1 {
    font-weight: 600;
    font-size: 24px;
    padding: 30px 0;
  }

  div > p {
    color: #999;
  }
`;

const StyledDetailButton = styled.button`
  font-family: omnigothic, sans-serif;
  background-color: #fff;
  width: 80px;
  height: 25px;
  color: #437299;
  border-radius: 17.5px;
  border: 1.5px solid #437299;
  &:hover {
    color: #fff;
    background-color: #437299;
    transition: 0.3s;
  }
`;

export default DetailPage;