# Rail Baron Alexa Skill

[![Build Status](https://travis-ci.org/jthomerson/rail-baron-alexa-skill.png?branch=master)](https://travis-ci.org/jthomerson/rail-baron-alexa-skill)
[![Coverage Status](https://coveralls.io/repos/github/jthomerson/rail-baron-alexa-skill/badge.svg?branch=master)](https://coveralls.io/github/jthomerson/rail-baron-alexa-skill?branch=master)
[![Dependency Status](https://david-dm.org/jthomerson/rail-baron-alexa-skill.png)](https://david-dm.org/jthomerson/rail-baron-alexa-skill)
[![Dev Dependency Status](https://david-dm.org/jthomerson/rail-baron-alexa-skill/dev-status.png)](https://david-dm.org/jthomerson/rail-baron-alexa-skill#info=devDependencies&view=table)


## What is it?

An Alexa skill you can use with your Amazon Echo to ask Alexa for destination and payout
information.


## How do I contribute?

I genuinely appreciate external contributions. As part of the Silvermine team, I have
[extensive documentation](contribute) on how you can contribute.


## Developing

Cheat sheet for using the [Serverless Alexa Skills plugin][sls-skills]. Note that all
these commands must be run from inside `./service` since that's where the Serverless
service itself resides (to separate the run-time node dependencies from the build-time /
dev dependencies).

```
# authenticate to the Amazon Developer Portal so you can run `sls alexa` commands
sls alexa auth

# Update Alexa Skill Manifests
sls alexa update

# List your Alexa Interaction Models
sls alexa models

# Update and build your Alexa Interaction Models
sls alexa build
```


## License

This software is released under the MIT license. See [the license file](LICENSE) for more
details.

[contribute]: https://github.com/silvermine/silvermine-info#contributing
[sls-skills]: https://github.com/marcy-terui/serverless-alexa-skills/
