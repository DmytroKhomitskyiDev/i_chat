import styled from "styled-components";
import colors from "../../styles/colors";

export const SMyMessage = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 35px;
  
  .my-dots, .my--messageBlock{
    margin-right: 14px;
  }
  .my--messageBlock{
    background-color: ${colors.WHITE};
    border: 1px solid rgba(112, 124, 151, 0.25);
    box-sizing: border-box;
    box-shadow: 10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05);
    padding: 14px 22px 17px 22px;
    border-radius: 10px 10px 0px 10px;
    max-width: 520px;
    word-break: break-all;
    position: relative;
  }
  .abs_date{
    position: absolute;
    width: max-content;
    bottom: -27px;
    right: 0;
    color: rgba(112, 124, 151, 0.7);
    font-size: 14px;
  }
  .my--message{
    font-size: 16px;
    line-height: 26px;
    color: ${colors.GREY};
  }
  .messageBody--dots{
    cursor: pointer;
  }
`