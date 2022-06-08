import React from 'react';
import { 
    SiderbarContainer,
    Icon,
    CloseIcon,
    SiderbarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
  } from './SiderbarElements';

const Sidebar = () => {
  return (
    <SiderbarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SiderbarWrapper>
            <SidebarMenu>
                <SidebarLink to="/shoes">
                    Shoes
                </SidebarLink>
                <SidebarLink to="clothing">
                    Clothing
                </SidebarLink>
                <SidebarLink to="accessories">
                    Accessories
                </SidebarLink>
                <SidebarLink to="signup">
                    Sign up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/shoes">signup</SidebarRoute>
            </SideBtnWrap>
        </SiderbarWrapper>
    </SiderbarContainer>
  );
};

export default Sidebar;