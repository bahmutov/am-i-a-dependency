if (/^v6/.test(process.version)) {
  console.log('node 6')
  const execa = require('execa')
  const scriptName = process.argv[2]
  console.log('running script', scriptName)

  const success = (result) => {
    console.log(result.stdout)
  }

  const fails = (result) => {
    console.error(result.stderr)
    process.exit(-1)
  }

  execa.shell('npm run ' + scriptName)
    .then(success, fails)
}
