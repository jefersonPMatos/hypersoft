import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: "Inter";
    font-weight: 400;
  }
  hr {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 2px;
    border: 0;
    background-color: #ed1ca6;
    width: 60px;
    margin-top: -10px;
    margin-bottom: 50px;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 16px;
  width: 280px;
  height: 80px;
  background-color: #fff;
  border-radius: 4px;
  font-family: "Inter";
  font-weight: 400;
  cursor: pointer;

  span {
    h1 {
      font-size: 14px;
      color: #000;
    }

    p {
      color: #a5a5a5;
      font-size: 12px;
    }
  }
`;

export const Photo = styled.div`
  background: #a5a5a5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ProfilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Comment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  font-family: "Inter";
  font-weight: 400;
  font-size: 28px;
  color: #000;
  width: 850px;
  height: 350px;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  min-height: 80%;
  font-family: "Inter";
  font-weight: 400;
`;

export const Contact = styled.div`
  display: flex;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 700px;
  height: 420px;
  border-radius: 5px;
  padding: 20px;

  h1 {
    display: flex;
    color: #000;
    margin-left: -320px;
    font-family: "Inter";
    font-weight: 400;
  }

  span {
    display: flex;
    input {
      width: 295px;
    }
  }
`;

export const Adress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 430px;
  height: 420px;
  border-radius: 5px;
  color: #000;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 70%;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  width: 600px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dfe3eb;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  color: #000;
`;

export const TextArea = styled.input`
  width: 600px;
  height: 150px;
  background: #ffffff;
  border: 1px solid #dfe3eb;
  border-radius: 4px;
  padding: 10px;
  color: #000;
  vertical-align: top;
`;

export const Button = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 28px;
`;
