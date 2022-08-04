import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

let number = 1;

const Form = () => {
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    body: "",
  };
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") {
      return alert("내용을 입력하세요!");
    }
    dispatch(
      addTodo({
        id: number,
        title: todo.title,
        body: todo.body,
        isDone: false,
      })
    );
    number++;
    setTodo(initialState);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledInputGroup>
        <label>제목</label>
        <StyledInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label>내용</label>
        <StyledInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StyledInputGroup>
      <StyledButton>추가하기</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 40px;
`;

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    font-size: 18px;
    font-weight: 400;
  }
`;

const StyledInput = styled.input`
  border: transparent;
  width: 250px;
  height: 30px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 0 15px;
  &:focus {
    outline-color: #437299;
  }
`;

const StyledButton = styled.button`
  font-family: omnigothic, sans-serif;
  width: 100px;
  height: 35px;
  color: #437299;
  border-radius: 17.5px;
  border: 1.5px solid #437299;
  &:hover {
    color: #fff;
    background-color: #437299;
    transition: 0.3s;
  }
`;

export default Form;