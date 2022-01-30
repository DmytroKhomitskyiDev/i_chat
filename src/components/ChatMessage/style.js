import styled from "styled-components";
import colors from "../../styles/colors";

export const SMessageContainer = styled.div`
  max-width: 850px;
  width: 100%;
`

export const SChatMessageHeader = styled.div`
  padding: 28px 38px 29px 60px;
  background-color: ${colors.GRAY_2};
  border-radius: 6px 6px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid;
  border-bottom-color: rgba(112, 124, 151, 0.1);
  
  .message-header--left{
    display: flex;
    
    img{
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .message-header--title{
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: ${colors.DARK};
    margin-bottom: 6px;
  }
  .message-header--time{
    font-size: 16px;
    line-height: 19px;
    color: ${colors.BLUE};
  }
  .message-header--right{
    display: flex;
  }
  .message-header--icon:first-child{
    margin-right: 20px;
  }
  .message-header--icon{
    width: 52px;
    height: 52px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);
    background-color: ${colors.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const SMessageBody = styled.div`
  background-color: ${colors.WHITE};
  height: 62vh;
  padding-top: 30px;
  padding-right: 15px;
  
  .messageBody--top{
    padding: 0 17px 20px 60px;
    overflow: hidden;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 6px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color:#fff;
      width: 16px;
    }
    
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      background: ${colors.SCROLL};
      box-shadow: 4px 4px 15px rgba(112, 124, 151, 0.05), 2px 2px 10px rgba(112, 124, 151, 0.1), 1px 1px 50px rgba(112, 124, 151, 0.15);
    
    }
  }
  
`