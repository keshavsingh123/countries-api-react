import React from "react";
import { ShimmerTitle } from "react-shimmer-effects";

class Loading extends React.Component {
  render() {
    return <ShimmerTitle line={7} gap={10} variant="primary" />;
  }
}
export default Loading