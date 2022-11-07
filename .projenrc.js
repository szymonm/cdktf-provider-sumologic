const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  useCustomGithubRunner: false,
  terraformProvider: "sumologic/sumologic@~> 2.19.1",
  cdktfVersion: "^0.13.0",
  constructsVersion: "^10.0.0",
  jsiiVersion: "^1.53.0",
  minNodeVersion: "14.17.0",

  namespace: "sumologic",
  githubNamespace: "szymonm",
  mavenOrg: "sumologic"
});

project.synth();