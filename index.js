/*
index.js

[Author] Kevin K. Pho (OmnInfinity) <kevinpho@mit.edu>
[Description] Main entry point for the UIHook
 */

/*** Packages ***/
const {withUiHook, htm} = require("@zeit/integration-utils");

/*** Types ***/
let count = 0;

const store = {
  secretId: "",
  secretKey: ""
};

module.exports = withUiHook(
  // Take an async anonymous lambda that takes a payload
  async ({payload}) => {
    // Dereference the payload into a state and action
    const {clientState, action} = payload;

    if (action === "submit") {
      store.secretId = clientState.secretId;
      store.secretKey = clientState.secretKey;
    }

    else if (action === "reset") {
      store.secretId = "";
      store.secretKey = "";
    }

    return htm`
      <Page>
        <Container>
          <Input label = "Secret ID" name = "secretId" value = $(store.secretId)/>
          <Input label = "Secret Key" name = "secretKey" value = $(store.secretKey)/>
        </Container>
        <Container>
          <Button action = "submit">Submit</Button>
          <Button action = "reset">Reset</Button>
        </Container>
        <AutoRefresh timeout = ${3000}/>
      </Page>
      `;
  }
);
