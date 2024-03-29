# now-contentful
Built for the Zeit Now Hackathon in 2019! Integrates any Now-based web app with the Contentful CMS

// [Todo] Add rest of the sections here
// [Todo] Add documentation
// [Todo] Split the integration into separate development and production integrations (or just use branches in the VCS)

## Instructions
1. Clone this repo
2. Modify package.json to change dependencies if desired
3. Run `npm install` to locally install dependencies
4. Modify now.json to change build configuration if desired
5. Run `now dev -p 5000` to run the integration's UIHook locally on a development configuration
5. Run `now --target=production` to run the integration's UIHook remotely on a production configuration

[1] Note that the only working development environment this test appeared to work was on a Mac installation of Now and under the Chrome browser (and, as it appears, not  Chromium-based browsers, such as Vivaldi) due to fetch NetworkErrors

## Additional Links
A test web app for integration of a Now web app running on Next.js pulling data from a Contentful CMS with the aid of our integration
* [Web App Deployment](https://now-contentful-test.pho-grammers.now.sh/)
* [Web App Source Code](https://github.com/pho-grammers/now-contentful-test/)

The integration itself for interfacing with the CMS
* [Integration Marketplace]() // [Todo] MISSING
* [Integration Source Code](https://github.com/pho-grammers/now-contentful/)

Some DevOps-related links, such as organizations
* [Zeit Team](https://zeit.co/pho-grammers/)
* [GitHub Organization](https://github.com/orgs/pho-grammers/)
