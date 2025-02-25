import React from "react";
import { MdLink, MdLinkOff } from "react-icons/md";
import { CustomNodeProps } from "src/components/CustomNode";
import useGraph from "src/store/useGraph";
import useStored from "src/store/useStored";
import styled from "styled-components";
import * as Styled from "./styles";

const StyledExpand = styled.button`
  pointer-events: all;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.TEXT_NORMAL};
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 40px;
  border-left: 1px solid ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`;

const StyledTextNodeWrapper = styled.span<{ hasCollapse: boolean }>`
  display: flex;
  justify-content: ${({ hasCollapse }) => (hasCollapse ? "space-between" : "center")};
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledImageWrapper = styled.div`
  padding: 5px;
`;

const StyledImage = styled.img`
  border-radius: 2px;
  object-fit: contain;
  background: ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};
`;

const TextNode: React.FC<CustomNodeProps> = ({ node, x, y, hasCollapse = false }) => {
  const { id, text, width, height, data } = node;
  const ref = React.useRef(null);
  const hideCollapse = useStored(state => state.hideCollapse);
  const childrenCount = useStored(state => state.childrenCount);
  const imagePreview = useStored(state => state.imagePreview);
  const expandNodes = useGraph(state => state.expandNodes);
  const collapseNodes = useGraph(state => state.collapseNodes);
  const isExpanded = useGraph(state => state.collapsedParents.includes(id));
  const isImage =
    !Array.isArray(text) && /(https?:\/\/.*\.(?:png|jpg|gif))/i.test(text) && imagePreview;
  // const { inViewport } = useInViewport(ref);

  const handleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!isExpanded) collapseNodes(id);
    else expandNodes(id);
  };

  return (
    <Styled.StyledForeignObject
      width={width}
      height={height}
      x={0}
      y={0}
      hasCollapse={data.parent && hasCollapse}
      ref={ref}
    >
      {isImage ? (
        <StyledImageWrapper>
          <StyledImage src={text} width="70" height="70" loading="lazy" />
        </StyledImageWrapper>
      ) : (
        <StyledTextNodeWrapper
          hasCollapse={data.parent && hideCollapse}
          data-x={x}
          data-y={y}
          data-key={JSON.stringify(text)}
        >
          <Styled.StyledKey parent={data.parent}>
            <Styled.StyledLinkItUrl>
              {JSON.stringify(text).replaceAll('"', "")}
            </Styled.StyledLinkItUrl>
          </Styled.StyledKey>
          {data.parent && data.childrenCount > 0 && childrenCount && (
            <Styled.StyledChildrenCount>({data.childrenCount})</Styled.StyledChildrenCount>
          )}

          {data.parent && hasCollapse && hideCollapse && (
            <StyledExpand onClick={handleExpand}>
              {isExpanded ? <MdLinkOff size={18} /> : <MdLink size={18} />}
            </StyledExpand>
          )}
        </StyledTextNodeWrapper>
      )}
    </Styled.StyledForeignObject>
  );
};

function propsAreEqual(prev: CustomNodeProps, next: CustomNodeProps) {
  return prev.node.text === next.node.text && prev.node.width === next.node.width;
}

export default React.memo(TextNode, propsAreEqual);
