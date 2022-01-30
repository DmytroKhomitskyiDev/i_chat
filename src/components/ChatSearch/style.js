import styled from "styled-components";
import colors from "../../styles/colors";

export const SChatSearch = styled.div`
  margin-bottom: 20px;
  display: flex;
  padding-right: 10px;
  
  .inputSearch {
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex: 1;
    height: 70px;
    padding: 22px 40px 22px 40px;
    border: none;
    margin-right: 2px;
  }
  .checkSearch{
    padding: 22px 40px 22px 40px;
    border: none;
    max-width: 170px;
    width: 100%;
    cursor: pointer;
    position: relative;

    option:first-child:after{
      content: '';
      width: 2px;
      height: 2px;
    }
  }

`