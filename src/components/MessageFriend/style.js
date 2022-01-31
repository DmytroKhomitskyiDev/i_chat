import styled from "styled-components";
import colors from "../../styles/colors";

export const SFriendMessage = styled.div`
    display: flex;
    margin-bottom: 15px;
  
  .messageBody--avatar{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 24px;
  }
  .messageBody--send{
    padding: 14px 22px 25px 22px;
    background: linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);
    box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1);
    border-radius: 0px 10px 10px 10px;
    max-width: 520px;
    margin-right: 15px;
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
  .messageBody--text{
    font-size: 16px;
    line-height: 26px;
    color: ${colors.WHITE};
  }
  .messageBody--dots{
    align-self: center;
    cursor: pointer;
  }
`