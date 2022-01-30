import styled from "styled-components";
import colors from "../../styles/colors";

export const SChatAdd = styled.div`
  max-width: 580px;
  width: 100%;
  
  
  .chatAdd-BlockTitle,.chatRoom-title{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .chatAdd-BlockTitle{
    padding-right: 10px;
  }
  .chatTitle{
    font-size: 36px;
    line-height: 26px;
    color: ${colors.DARK};
    letter-spacing: 0.01em;
    margin-bottom: 15px;
  }
  .chatSubTitle{
    font-size: 18px;
    line-height: 26px;
    text-transform: capitalize;
    color: ${colors.GREY};
    position: relative;
    margin-bottom: 24px;
  }
  .BlockTitle_right{
    max-width: 240px;
    width: 100%;
  }
  
  .chatRooms{
    overflow-y: scroll;
    max-height: 68vh;
    padding-right: 6px;
    
    &::-webkit-scrollbar{
      width: 6px;
      background-color: transparent;
     
    }

 
    
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      background: ${colors.SCROLL};
      box-shadow: 4px 4px 15px rgba(112, 124, 151, 0.05), 2px 2px 10px rgba(112, 124, 151, 0.1), 1px 1px 50px rgba(112, 124, 151, 0.15);
      position: relative;
     
    }
  }
`

export const SChatBlock = styled.div`
 
    border-radius: 6px;
    background: ${colors.WHITE};
    padding: 30px 40px 40px 40px;
    margin-bottom: 20px;
    cursor: pointer;
  
   &.activeBlock{
     background: linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%);
     p,.chatRoom-text p{
       color: ${colors.WHITE};
     }
     .chatRoom-name{
       color: ${colors.DARK};
     }
   }
  
  .chatRoom-title{
    margin-bottom: 15px;
  }
  .chatRoom-left{
    display: flex;
    align-items: center;
  }
  .chatRoom-leftImg{
    position: relative;
  }
  .chatRoom-img{
    border-radius: 50%;
    margin-right: 20px;
  }
  .chatRoom-absImg{
    position: absolute;
    left: 3px;
    top: 3px;
  }
  .chatRoom-text p{
    max-width: 450px;
    font-size: 16px;
    line-height: 26px;
    color: ${colors.GREY};
  }
  .chatRoom-name{
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 5px;
  }
  .chatRoom-action{
    font-size: 16px;
    line-height: 19px;
    color: ${colors.BLUE};
  }
  .chatRoom-data{
    font-size: 16px;
    line-height: 19px;
    color: ${colors.GREY};
  }
`