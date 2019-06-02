/*
index.js

[Author] Kevin K. Pho (OmnInfinity) <kevinpho@mit.edu>
[Description] Main entry point for the UIHook
 */

/*** Packages ***/
const {withUiHook, htm} = require("@zeit/integration-utils");

/*** Types ***/
// let count = 0;

// // Store the current results here
// // [Note] Constant structure (with variables inside)
// const store = {
//   secretId: "",
//   secretKey: ""
// };

module.exports = withUiHook(
  // Take an async anonymous lambda that takes a payload
  async ({payload, zeitClient}) => {
    // Dereference the payload into a state and action
    const {clientState, action} = payload;

    // Download the metadata
    const store = await zeitClient.getMetadata();

    if (action === "submit") {
      // console.log("%s %s %s %s", store.secretId, store.secretKey, clientState.secretId, clientState.secretKey)
      // Update the stored value with the client's inputs
      store.secretId = clientState.secretId;
      store.secretKey = clientState.secretKey;

      // Push these changes
      await zeitClient.setMetadata(store);
    }

    else if (action === "reset") {
      store.secretId = "";
      store.secretKey = "";
    }

    // [Note] JSX does not allow spaces between properties
    return htm`
      <Page>
        <Container>
          <Input label="Secret ID" name="secretId" value=$(store.secretId || "")/>
          <Input label="Secret Key" name="secretKey" type="password" value=$(store.secretKey || "")/>
        </Container>
        <Container>
          <Button action="submit">Submit</Button>
          <Button action="reset">Reset</Button>
        </Container>
      </Page>
    `;
  }
);
