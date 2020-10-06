import React from "react";
import styled from "styled-components";

const Details = styled.div`
  padding-bottom: 24px;
`;

const InfoBox = styled.div`
  font-size: 12px;
  margin-bottom: 12px;
  background-color: #dff8f6;
  color: #14aa9b;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dff8f6;
`;

const Title = styled.p`
  font-size: 16px;
`;

function withDetails(Story, storyTitle, infoText) {
  return (
    <Details>
      <Title>{storyTitle}</Title>
      {infoText.length > 0 ? (
        <InfoBox hasValue={infoText.length}>{infoText}</InfoBox>
      ) : null}
      <Story />
    </Details>
  );
}

export default withDetails;
