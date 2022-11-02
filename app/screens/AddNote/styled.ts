import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const AddnoteContainer = styled.View`
  flex: 1;
  padding: 10px;
  width: ${width}px;
  justify-content: flex-start;
  background-color: #404258;
`;

export const HeaderTextAddNote = styled.Text`
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  color: #e7f6f2;
  padding-top: 10px;
`;

export const AddNoteInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: "#e7f6f2",
}))`
  width: 90%;
  margin: 10px 10px;
  border-color: #6b728e;
  border-radius: 5px;
  border-width: 2px;
  padding: 15px;
  color: #e7f6f2;
`;

export const BtnContainer = styled.View`
  height: 75px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 12px 0px;
`;

export const AddNoteBtn = styled.View`
  height: 100%;
  background-color: #3f4e4f;
  border-radius: 15px;
  padding: 15px;
`;

export const GoBackBtn = styled.View`
  height: 100%;
  background-color: #7d6e83;
  border-radius: 15px;
  padding: 15px;
  /* color: " #e7f6f2"; */
`;

export const BtnText = styled.Text`
  font-size: 14px;
  color: #e7f6f2;
`;
