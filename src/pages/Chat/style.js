import styled from "styled-components";
import colors from "../../styles/colors";
import {Button} from "antd";

export const SChatContainer = styled.div`
  padding: 110px 60px 0px 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


export const SButton = styled(Button)`
    width: 100%;
    height: 60px;
    background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
    box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
    border-radius: 6px;
    font-size: 20px;
    color: ${colors.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
  
    &:hover, &:focus{
      background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
      color: ${colors.WHITE};
    }
  
    img{
      margin-right: 7px;
    }
`



