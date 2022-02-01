import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #335e80;
    display: grid;
    align-items: center;
    top: 0; 
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; 
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};  
    
`;
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.7rem;
    background: transparent;
    font-size: 1.35rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px); 
  text-align: center;

  @media screen and (max-width: 768px){
      grid-template-rows: repeat(6, 60px);
  }
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-item: center;
    justify-content: center;
    font-size: 1.25rem;
    font-family: 'Inter';
    text-decoration: none;
    margin-right: 30px;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
       color: #23A6F0;
       transition: all 0.2s ease-in-out;
    }
`;
export const SideButtonWrap = styled.div`
    display: flex;
    margin-top: -50px;
    justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
    background: #23A6F0;
    white-space: nowrap;
    color: #fff;
    border-radius: 3.84px;
    padding: 12px 22px;
    font-size: 1.25rem;
    font-family: 'Inter';
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #23A6F0;
    }
`