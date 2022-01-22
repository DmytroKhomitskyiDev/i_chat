import styled from "styled-components";
import colors from "../../styles/colors";
import {Form,Button } from "antd";
export const SAutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SAutForm = styled.div`
  width: 500px;
`

export const SAuthBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 36px;
  color: ${colors.DARK};
  letter-spacing: 0.01em;
  text-transform: capitalize;
  margin-bottom: 50px;

  .titleSlash{
    margin-right: 52px;
    position: relative;
    &:before {
      content: '/';
      position: absolute;
      font-size: 60px;
      right: -42px;
      top: -13px;
    }
  }
  
  h2:hover{
    position: relative;
    cursor: pointer;
  }
  
  h2:hover:after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 3px;
    background: #000000;
    border-radius: 15px;
  }
`
export const SForm = styled(Form)`
  .ant-input{
    height: 50px;
    padding-left: 40px;
    background: #FFFFFF;
    border-radius: 6px;
  }
  .ant-input-affix-wrapper{
    padding-left: 40px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 6px;
  }
  .ant-input::placeholder{
    color: #707C97;
    font-weight: 500;
    font-size: 18px;
  }
  .ant-form-item{
    margin-bottom: 30px;
  }
  .ant-form-item:nth-last-child(-n+2){
    margin-bottom: 50px;
  }
  .ant-form-item-control-input-content{
    text-align: center;
  }
`
export const SButton = styled(Button)`
  width: 185px;
  height: 49px;
  background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.WHITE};
  line-height: 24px;
  
  &:hover {
    background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
    color: ${colors.WHITE};
  }
`

