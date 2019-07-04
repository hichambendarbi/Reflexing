import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-content: ${props => props.alCon};
  position: ${props => props.pos};
  background-color: ${props => props.backgroundC};
  height: ${props => props.height};
  width: ${props => props.width};
  grow: ${props => props.grow};
  shrink: ${props => props.shrink};
  basis: ${props => props.basis};
  order: ${props => props.order};
  self: ${props => props.self};
  color: ${props => props.color};
  padding: ${props => props.padding};
  justify-content: ${props => props.justC};
  display: ${props => props.display};
  margin-top: ${props => props.marginT};

  margin-left: ${props => props.marginL};
  font-size: ${props => props.fontS};
  ${props => props.css}
`;

export const Box = ({
  children,
  css,
  grow,
  shrink,
  basis,
  order,
  flex,
  backgroundC,
  width,
  self,
  color,
  padding,
  justC,
  display,
  pos,
  alCon,
  marginT,
  marginL,
  fontS,
  height
}) => (
  <StyledElement
    css={css}
    grow={grow}
    shrink={shrink}
    basis={basis}
    order={order}
    flex={flex}
    self={self}
    backgroundC={backgroundC}
    width={width}
    height={height}
    color={color}
    padding={padding}
    justC={justC}
    display={display}
    pos={pos}
    alCon={alCon}
    marginT={marginT}
    marginL={marginL}
    fontS={fontS}
  >
    {children}
  </StyledElement>
);
