import styled from "@emotion/styled";

export const Root = styled("div")(({
  marginTop: "16px",
  flex: "1 1 auto",
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  paddingRight: "5px",

  "&::-webkit-scrollbar": {
    width: "8px"
  },

  "&::-webkit-scrollbar-track": {
    background: "transparent"
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#E0E3E9",
    borderRadius: "8px"
  }
}));
