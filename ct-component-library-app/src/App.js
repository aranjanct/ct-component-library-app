import React from "react";
import * as styles from "./App.css";

import classNames from "classnames/bind";

import { CtButton, CtAlert, CtInput } from "@captech/ct-react-library";

const cn = classNames.bind(styles);

function App() {
  return (
    <div className="app">
      <div>
        <p className={cn({ header: true })}>
          CapTech Component Library Documentation (accessible on CapTech Network
          or VPN): <br></br>
          <a
            className={cn({ link: true })}
            href="http://si.captech.site/ct-react-library/"
          >
            http://si.captech.site/ct-react-library/
          </a>
        </p>
      </div>
      <div>
        <p className={cn({ header: true })}>
          <ul className={cn({ list: true })}>
            <li>
              Please provide feedback on your experience by filling out{" "}
              <a
                className={cn({ link: true })}
                href="https://teams.microsoft.com/l/entity/81fef3a6-72aa-4648-a763-de824aeafb7d/_djb2_msteams_prefix_1808006743?context=%7B%22subEntityId%22%3Anull%2C%22channelId%22%3A%2219%3A3be3edb06177462a909578cc0aa2b85d%40thread.tacv2%22%7D&groupId=0a67549d-89ea-42a7-a7bb-15e50582b763&tenantId=ae9d6e9a-cc18-4204-ac29-43a0ccb860e8"
              >
                this Component Usability Feedback survey on Teams
              </a>
            </li>
            <li>
              Please report any individual defects or suggested enhancements
              using{" "}
              <a
                className={cn({ link: true })}
                href="https://teams.microsoft.com/_#/tab::c7045f90-1260-4265-bd19-e2072284a31d/General?threadId=19:3be3edb06177462a909578cc0aa2b85d@thread.tacv2&ctx=channel"
              >
                this Form on Teams
              </a>
            </li>
            <li>
              Please feel free to post any feedback in the{" "}
              <a
                className={cn({ link: true })}
                href="https://teams.microsoft.com/_#/conversations/General?threadId=19:3be3edb06177462a909578cc0aa2b85d@thread.tacv2&ctx=channel"
              >
                Component Library Feedback Teams channel
              </a>
            </li>
          </ul>
        </p>
      </div>
      <p className={cn({ header: true })}>
        <b> Sample components: </b>
      </p>
      <div>
        <div className={cn({ row: true, alert: true })}>
          <CtAlert type={"success"}>Success</CtAlert>
        </div>
      </div>
      <div>
        <div className={cn({ row: true, textInput: true })}>
          <CtInput
            readOnly={false}
            disabled={false}
            success={false}
            error={false}
            required={false}
            label="Label"
            placeholder="Placeholder"
            caption="Caption"
          />
        </div>
      </div>
      <div>
        <div className={cn({ row: true, button: true })}>
          <CtButton
            primary={true}
            disabled={false}
            disabledLight={false}
            large={false}
            small={false}
          >
            Button
          </CtButton>
        </div>
      </div>
    </div>
  );
}

export default App;
