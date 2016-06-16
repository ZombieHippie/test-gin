
import { UploadSummary } from "./src/app/upload-summary"
import { Summary } from "./src/summary/summary.model"
import { Artifact } from "./src/artifact/artifact.model"

const host = 'localhost:8080'


const lintReport: Artifact = {
  FileContents: `<xml></xml>`,
  Data: `{
    "error": 0,
    "warning": 4
  }`,
  Label: 'lint',
  Passed: 1, // has no significance
  Failed: 0,
}
const testReport: Artifact = {
  FileContents: `<xml></xml>`,
  Data: `{
    "pass": 12,
    "fail": 0,
    "error": 0

  }`,
  Label: 'unit',
  Passed: 12,
  Failed: 0,
}

const arts: Artifact[] = [
  lintReport,
  testReport
]

const summary: Summary = {
  PullRequestID: 1,
  Commit: "962c4b831f447bccd8ab4185a4898d41833d91d3",
  Author: "Cole R Lawrence <colelawr@gmail.com>",
  Message: "Fix all golang compilation errors",
  Artifacts: arts,
  Success: true,
  Created: new Date(),
  Repository: {
    ID: "ZombieHippie/test-gin",
    ACL: "user:ZombieHippie",
    Active: true
  }
}

UploadSummary(host, 'authy', summary, (err, summary) => {
  console.log(err, summary)
})