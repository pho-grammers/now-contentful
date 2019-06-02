/*
index.js

[Author] Kevin K. Pho (OmnInfinity) <kevinpho@mit.edu>
[Description] Main entry point for the UIHook
 */

/*** Packages ***/
const {withUiHook} = require("@zeit/integration-utils");

/*** Types ***/
let count = 999;

module.exports = withUiHook(({payload}) => {
  count += 1;
  return `
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
    `;
});
