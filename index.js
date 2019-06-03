/*
index.js

[Author] Kevin K. Pho (OmnInfinity) <kevinpho@mit.edu>
[Author] Teresa T. Pho (teresapho5) <teresathanhpho@gmail.com>
[Description] Main entry point for the UIHook
 */

/*** Packages ***/
const {withUiHook, htm} = require("@zeit/integration-utils");

/*** Types ***/
module.exports = withUiHook(
  // Take an async anonymous lambda that takes a payload
  async ({payload, zeitClient}) => {
    // Dereference the payload into a state and action
    const {clientState, action} = payload;

    // Download the metadata
    const api = await zeitClient.getMetadata();

    if (action === "submit") {
      // console.log("%s %s %s %s", store.secretId, store.secretKey, clientState.secretId, clientState.secretKey)

      // Update the stored value with the client's inputs
      api.Base = "https://cdn.contentful.com";
      api.SpaceId = clientState.SpaceId;
      api.Key = clientState.Key;

      // Push these changes
      await zeitClient.setMetadata(api);
    }

    return htm`
      <Page>
        <ProjectSwitcher />
        <Container>
          <Input label="Space ID" name="SpaceId" value=${api.spaceId || ""}/>
          <Input label="API Key" name="Key" type="password" value=${api.Key || ""}/>
        </Container>
        <Container>
          <Button action="submit">Submit</Button>
          <Button action="reset">Reset</Button>
        </Container>
        <Container>
          <Input label="Space ID" name="SpaceId" value=${api.spaceId || ""}/>
          <Input label="API Key" name="Key" type="password" value=${api.Key || ""}/>
        </Container>
        <Container>
          <Button action="submit">Submit</Button>
          <Button action="reset">Reset</Button>
        </Container>
      </Page>
    `;
  }
);
