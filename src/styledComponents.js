import styled from 'styled-components';

export const Containerr = styled.div`
  background-color: ${(props) => props.isBlueTheme===true? "#191D28": "white"};
  padding-top:10px;
  padding-left:20px;
  padding-right:20px;

`
export const CustomHeader = styled.nav`
  background-color: ${(props) => props.isBlueTheme===true? "#191D28": "white"};

`
export const CustomButton = styled.button`
background-color: ${(props) => props.isBlueTheme===true? "#2E3241": "#F8F9FA)"};
color:${(props) => props.isBlueTheme===true? "white": "black)"};
border:none;
border-radius:12px;
width:80px;
height:40px;
margin-right:20px;
font-weight:bold;
text-align:center;
display:flex;
justify-content:center;
align-item:center;
` 
export const CustomRow = styled.tr`
background-color: ${(props) => props.isBlueTheme===true? "#2E3241": "#F8F9FA"};
margin-bottom: 50px;
border:none;
height:65px;
border-radius:12px !important;
color:${(props) => props.isBlueTheme===true? "white": "#0C0F48)"};
border-collapse: collapse;
margin-top:50px;
    font-family: verdana;
    font-size: 15px;
    font-weight:bold;

`