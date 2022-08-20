import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addComment } from "../../redux/modules/commentSlice";
import Button from "../elements/Button";

function AddForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = (formData, e) => {
    e.preventDefault();
    dispatch(__addComment({ comment: formData.comment }));
    reset();
  };

  useEffect(() => {
    setFocus("comment");
  }, [setFocus]);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            inputred
            type="text"
            placeholder={"댓글을 입력해주세요. (5-100자)"}
            name="comment"
            aria-invalid={errors.comment ? "true" : "false"}
            {...register("comment", {
              required: "댓글은 필수 입력사항입니다.",
              minLength: {
                value: 10,
                message: "10자 이상 입력해주세요.",
              },
              maxLength: {
                value: 105,
                message: "100자 이하 입력해주세요.",
              },
            })}
          />

          <ButtonBox>
            <ErrorMsg>
              {errors.comment && (
                <small role="alert">{errors.comment.message}</small>
              )}
            </ErrorMsg>
            <Button type="submit" content={"등록"}></Button>
          </ButtonBox>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 50px auto;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100px;
  border: 1px solid #d5d0d0;
  margin: 15px 0px;
  border-radius: 5px;
  resize: none;
  background-color: transparent;
  font-size: large;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: -20px;
`;

const ErrorMsg = styled.div`
  width: 70%;
  color: ${(props) => props.theme.errorTextColor};
`;

export default AddForm;
