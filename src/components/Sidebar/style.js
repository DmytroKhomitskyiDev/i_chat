import styled from "styled-components";
import colors from "../../styles/colors";
export const SSideBar = styled.div`
  max-width: 290px;
  width: 100%;
  background: ${colors.WHITE};
  box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);
  padding-top: 90px;
  padding-bottom: 52px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .avatarBlock{
    text-align: center;
    margin-bottom: 85px;
    color: ${colors.DARK};
    
    .avatarImg {
      border-radius: 50%;
      margin-bottom: 15px;
    }
    .avatarArrow{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .avatarSub{
      font-size: 18px;
      line-height: 21px;
      margin-right: 10px;
    }
    svg{
      width: 10px;
      height: unset;
      margin-top: 4px;
    }
  }
  
  .navList{
    padding-left: 38px;
    & li:hover a{
        color: ${colors.BLUE};
    } 
    & li:hover svg{
        fill: ${colors.BLUE};
    }
  }

  .navList a{
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: ${colors.GREY};
  }
  .navItem{
    margin-bottom: 55px;
    position: relative;
    
    &:before{
      content: '';
      position: absolute;
      left: -36px;
      top: -8px;
      height: 40px;
      width: 3px;
      background: transparent;
      border-radius: 3px;
    }
    
    &:hover:before{
      background: ${colors.BLUE};
      box-shadow: 1px 0px 10px rgba(42, 139, 242, 0.45), 0px 0px 10px rgba(42, 139, 242, 0.55), 4px 0px 25px rgba(42, 139, 242, 0.75);
    }
  }
`

export const SIcon = (icon) =>  styled(icon)`
  margin-right: 17px;
  fill: ${colors.SVG};
`