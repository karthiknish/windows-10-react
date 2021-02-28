/* React */
import React, { useRef, useEffect, useState } from "react";
import { initialTracks } from "./config";
/* Components */
import Window from "../windowWrapper/window";
import Webamp from "webamp";
/* Image */
const config = {
  // Optional.
  initialTracks: [
    {
      metaData: {
        artist: "DJ Mike Llama",
        title: "Llama Whippin' Intro",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url:
        "https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3",
    },
  ],
};
const Win = () => {
  const [divRef, setDivRef] = useState(null);
  useEffect(() => {
    if (divRef == null) {
      return;
    }
    const webamp = new Webamp(config);
    webamp.renderWhenReady(divRef);
    return () => {
      webamp.dispose();
    };
  }, [divRef]);

  return (
    <Window appName="Winamp">
      <div
        style={{ width: "15rem", height: "24rem" }}
        // style={{ position: "fixed", left: 0, top: 0, right: 0, bottom: 0 }}
        ref={setDivRef}
      />
      );
      {/* <div style={{ width: "15rem", height: "24rem" }}><Webamp /></div> */}
    </Window>
  );
};

export default Win;
