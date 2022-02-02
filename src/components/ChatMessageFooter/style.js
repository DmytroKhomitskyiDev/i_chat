import styled from "styled-components";
import colors from "../../styles/colors";

export const SChatFooter = styled.div`
  padding: 0 60px 0 60px;
  background-color: ${colors.WHITE};
  width: 850px;
  
  .messageBody--bottom{
    background-color: ${colors.WHITE};
    display: flex;
    align-items: center;
    padding: 27px 0 38px 0;
    border-top: 2px solid;
    border-color:  rgba(112, 124, 151, 0.15);
    border-radius: 2px;
  }


  .messageBody--add{
    margin-right: 20px;
    position: relative;
    
    svg{
      display: block;
      z-index: 2;
      position: relative;
      cursor: pointer;
    }
  }
  .messageBody--sendMessage{
    display: flex;
    align-items: center;
    margin-bottom: 0;
    
    .ant-form-item-control-input-content{
      display: flex;
      max-width: unset;
      align-items: center;
    }
  }
  .messageSmile{
    margin-right: 30px;
    margin-left: 30px;
  }
  .send-block{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%);
    box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15), 2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);
    cursor: pointer;
    padding: 0;

    svg{
      margin-top: 2px;
      margin-right: 2px;
    }
  }
  .messageBody--input {
    flex: 1;
    margin-bottom: 0;
  }
  .messageBody--input input, .messageBody--input input::placeholder {
    font-size: 20px;
    line-height: 24px;
    color: rgba(112, 124, 151, 0.5);
  }
  .messageBody--input input{
    width: 100%;
    border: none;
    outline: none;
    box-shadow: none;
  }
  .ant-form{
    display: flex;
    align-items: center;
    flex: 1;
  }
  .ant-col-16{
    max-width: unset;
  }
  .messageBody--icon{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: ${colors.BLUE_ICON};
    box-shadow: 0px 10px 15px rgba(42, 139, 242, 0.2), 0px 7px 25px rgba(42, 139, 242, 0.1), 0px 5px 25px rgba(42, 139, 242, 0.1);
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .messageBody--icon:last-child{
    margin-bottom: 15px;
  }
  .messageBody--add--abs{
    position: absolute;
    z-index: -1; 
    opacity: 0;
    transition: all .6s;
    bottom: 0;
  }
  .active .messageBody--add--abs{
    top: unset;
    z-index: 1;
    opacity: 1;
    transition: all .6s;
    bottom: 40px;
  }
  
`