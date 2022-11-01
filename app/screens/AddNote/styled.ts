import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const AddnoteContainer = styled.View`
  flex: 1;
  padding: 10px;
  width: ${width}px;
  justify-content: flex-start;
  background-color: #fff8ea;
`;

export const HeaderTextAddNote = styled.Text`
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
`;

export const AddNoteInput = styled.TextInput`
  width: 90%;
  margin: 10px 10px;
  border-color: #080808;
  border-radius: 5px;
  border-width: 2px;
  padding: 15px;
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
  background-color: #90a17d;
  border-radius: 15px;
  padding: 15px;
`;

export const GoBackBtn = styled.View`
  height: 100%;
  background-color: #ffe1e1;
  border-radius: 15px;
  padding: 15px;
`;
