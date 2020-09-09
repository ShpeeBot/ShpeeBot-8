# Contributing to Shpee

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Shpee which is published on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Pull Requests](#pull-requests)

[Documentation Contributions](#documentation-contributions)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to <leo@leodt.xyz>.

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question. You'll get faster results by using the resources below.

If chat is more your speed, you can join the support Discord server:

* [Join the support Discord server](https://link.leodt.xyz/invite)
    * Even though Discord is a chat service, sometimes it can take several hours for me to be able to respond &mdash; please be patient!
    * Use the `#help` channel for questions or discussion about writing or contributing to Shpee
    * There are many other channels available, check the channel list

## What should I know before I get started?

#### Shpee is a small GitHub repository that we maintain.
Please do not expect 5 star support or service on our repo, we are a small group who work on various different things.
So far on __10 August 2019__ we have only one developer working on this project.

It will take some time for us to review and respond to your issue tickets and pull requests, please be patient.

### Design Decisions

When we make a significant decision in how we maintain the project and what we can or cannot support, we will document it in the [design-decisions.md file](https://github.com/LeoDoesThings/ShpeeBot/design-decisions.md). If you have a question around how we do things, check to see if it is documented there. If it is *not* documented there, please contact us on [Discord](https://link.leodt.xyz/invite) or by [email](mailto:leo@leodt.xyz) and ask your question.

## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). To submit, create an issue ticket and provide the following information:

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as much detail as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that Shpee crashed**, explain what caused the crash. Also give a copy of the bot log.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Include details about your configuration and environment:

* **Which version of Shpee are you using?** You can get the exact version by typing `info` in any server channel or DMs.
* **What's the name and version of the OS you're using**?
* **Which packages do you have installed?** You can get that list by running `npm list -g --depth=0`.
* **Are you using Shpee on multiple servers?** If so, can you reproduce the problem on a single server?

### Requesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). To submit, create an issue ticket and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Shpee which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most users and isn't something that can or should be implemented as an npm package.
* **List some other Discord bots where this enhancement exists.**
* **Specify which version of Shpee you're using.** You can get the exact version by typing `.info` in any server channel or DMs.
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to Shpee? You can start by looking through these `good first issue` and `help-wanted` issues:

* [Good first issues][good-first-issues] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

If you want to read about using Shpee or developing for Shpee, the [Shpee docs](https://github.com/LeoDoesThings/ShpeeBot/wiki) are available on our GitHub wiki and as a standalone site soon.

### Pull Requests

The process described here has several goals:

- Maintain Shpee's quality
- Fix more important problems first
- Engage the community in working toward the best possible version of Shpee
- Enable a sustainable system for our maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Documentation Contributions

* For contributing to the docs make sure your words are clear and easily understandable.
* Use [Markdown](https://daringfireball.net/projects/markdown).
* If you know how to use a host that there is no documentation for yet feel free to open a pull request.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. To help you find issues and pull requests, each label is listed with search links for finding open items with that label.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue if you have suggestions for new labels.

#### Issue Ticket Labels

| Label name | `DankZone/ShpeeBot` :mag_right:| Description |
| --- | --- | --- |
| `enhancement` | [search][search-shpeebot-repo-label-enhancement] | Feature requests. |
| `bug` | [search][search-shpeebot-repo-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-shpeebot-repo-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-shpeebot-repo-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-shpeebot-repo-label-help-wanted] | The shpeebot core team would appreciate help from the community in resolving these issues. |
| `good-first-issue` | [search][search-shpeebot-repo-label-good-first-issue] | Less complex issues which would be good first issues to work on for users who want to contribute to Shpee. |
| `more-information-needed` | [search][search-shpeebot-repo-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-shpeebot-repo-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `duplicate` | [search][search-shpeebot-repo-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-shpeebot-repo-label-wontfix] | The shpeebot core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-shpeebot-repo-label-invalid] | Issues which aren't valid (e.g. user errors). |

#### Pull Request Labels

| Label name | `DankZone/ShpeeBot` :mag_right: | Description
| --- | --- | --- |
| `work-in-progress` | [search][search-shpeebot-repo-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-shpeebot-repo-label-needs-review] | Pull requests which need code review, and approval from maintainers or shpeebot core team. |
| `under-review` | [search][search-shpeebot-repo-label-under-review] | Pull requests being reviewed by maintainers or shpeebot core team. |
| `requires-changes` | [search][search-shpeebot-repo-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-shpeebot-repo-label-needs-testing] | Pull requests which need manual testing. |

[search-shpeebot-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Aenhancement
[search-shpeebot-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Abug
[search-shpeebot-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Aquestion
[search-shpeebot-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Afeedback
[search-shpeebot-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Ahelp-wanted
[search-shpeebot-repo-label-good-first-issue]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Agood-first-issue
[search-shpeebot-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Amore-information-needed
[search-shpeebot-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Aneeds-reproduction
[search-shpeebot-repo-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Atriage-help-needed
[search-shpeebot-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Adocumentation
[search-shpeebot-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Aperformance
[search-shpeebot-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Asecurity
[search-shpeebot-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Acrash
[search-shpeebot-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Ablocked
[search-shpeebot-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Aduplicate
[search-shpeebot-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Awontfix
[search-shpeebot-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Adankzone%2Fshpeebot+label%3Ainvalid
[search-shpeebot-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Adankzone%2Fshpeebot+label%3Awork-in-progress
[search-shpeebot-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Adankzone%2Fshpeebot+label%3Aneeds-review
[search-shpeebot-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Adankzone%2Fshpeebot+label%3Aunder-review
[search-shpeebot-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Adankzone%2Fshpeebot+label%3Arequires-changes
[search-shpeebot-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Adankzone%2Fshpeebot+label%3Aneeds-testing
