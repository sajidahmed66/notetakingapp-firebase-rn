import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const Containter = styled.View`
  flex: 1;
  /* height: height, */
  width: ${width}px;
  padding: 10px;
  position: relative;
  padding-top: 20px;
  background-color: #404258;
`;

export const HeaderText = styled.Text`
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  color: #e7f6f2;
`;

export const NoteCard = styled.View`
  /* max-width: ${width}px; */
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  border-color: #6b728e;
  border-width: 2px;
  margin-bottom: 10px;
  padding: 0px 30px;
  /* background-color: #9e7676; */
`;

export const NoteCardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  /* padding-left: 10px; */
  color: #e7f6f2;
`;

export const TouchableTextTitle = styled.TouchableOpacity`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Fab = styled.View`
  position: absolute;
  bottom: 20px;
  right: 30px;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: #dee2e3;
  /* overflow: hidden; */
  flex: 1;
  align-items: center;
  justify-content: center;
`;
