[![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/javascript) [![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Overview

In this repository , together we will collaborate to implement a blogging website , following [this figma design](https://www.figma.com/file/IKoqTP5tN2Ukx0U01yXL2L/website-tct?node-id=27%3A387&t=TjMzMlGlhhLrnlIi-0).

> **NOTE:** You will also find the design in google drive, as a pdf file.

The website that we will be working on is hosted using [github pages](https://docs.github.com/en/pages/quickstart).
Every change merged in the main branch we will be able to see live _after some minutes until the deployment process finished_.

[Blog Live 🚧](https://endridollani.github.io/blog_website/)

### Getting Started

Before contributing in this repository follow the instructions listed below.

1. Set up Git and GitHub
2. Follow the Git Fork Branch Pull Workflow

### Set up git and GitHub

Below you will find the steps to set up git on Windows.

#### Step 1:

Download the [latest version of Git](https://git-scm.com/downloads 'latest version of Git') and choose the 64/32 bit version. After the file is downloaded, install it in the system. Once installed, select Launch the Git Bash, then click on finish. The Git Bash is now launched.

#### Step 2:

Check the Git version:

```bash
git --version
```

This command will lead you to a browser of [config commands](https://www.simplilearn.com/tutorials/git-tutorial/git-commands 'config commands'). Basically, the help the command provides a manual from the help page for the command just following it (here, it's config).

Another way to use the same command is as follows:

```bash
git config --help
```

> Copy and paste in your bash terminal the commands above.

#### Step 3:

[Create a GitHub Account](https://github.com/).
After you log in , follow the next step.

#### Step 4:

**Configure your git credentials**

You can configure your local GitHub installation with credentials by using the following commands. Also, don't forget to add your own GitHub credentials for username and email address.

```bash
git config –global user.name "github_username"
```

```bash
git config –global user.email "email_address"
```

> **NOTE:** Replace git_username with your GitHub account username and email_address with the email address you used to log in on GitHub.

### Follow the Git Fork Branch Pull Workflow <a name="workflow"></a>

A simple summary of how to collaborate on open-source projects using forking, branching and pull requests.

![image](https://www.tomasbeuzen.com/post/git-fork-branch-pull/featured_hud478d74d48d19bfd1c1c03fc398c8033_312322_720x0_resize_lanczos_3.png)

#### STEPS TO FOLLOW

**1. Forking this GitHub Repository**

The first step is to fork this GitHub repository.
A “fork” is just an independent copy of a repository that you can develop on without affecting the original. To fork this repository click the `Fork` button.

![image](https://www.freecodecamp.org/news/content/images/2022/02/image-29.png)

You will see that the newly forked repository gets created under your GitHub account. By doing this you make a local copy of this repository. Once you get the local copy of the code, you can make the relevant changes and ask me to review your changes. After reviewing your code changes, the I may approve them or ask you for more changes. After approval , your code changes will be merged in the main branch of this repository.

**2. Clone the repository locally**

Before you can make changes to the repository you’ll first want to make a local copy on your computer. This is as simple as using `git clone` on the forked repository. Navigate to your forked repository on GitHub, click the “Clone or download” button and copy the url. Then, at the command line, clone the repository.

```bash
git clone https://copied_url
```

> **Note:** Open git bash in the directory you want this repository to be cloned.

After cloning open the project with VsCode and install the recommended extensions.

**3. Add Remote**

When you cloned the forked repository onto your local computer, git automatically added a remote repository named “origin” pointing to the forked repository on GitHub. This means that when you do `git add`/`git commit`/`git push` you can push your local changes to the forked repository.

However, the goal here is to contribute to this repository and we want to keep up to date with him. While we are making changes, others might also be making changes and this repository might be getting updated during the time you are adding a feature. So we want to add another remote pointing to this repository so that we can periodically `git pull` any changes that have occurred in this repository such that we are working on the must up-to-date version of the code. We usually call this remote “upstream” and can add it using:

```bash
git remote add upstream https://github.com/endridollani/blog_website
```

Navigate inside _blog_website_ folder in your computer and open git bash, then copy and paste the line above.

You can verify that you now have two remotes, “origin” and “upstream” using the following:

```bash
git remote -v
```

**4. Checkout a new branch**

Okay, so now we’ve made a fork of the repository we want to work on, we’ve cloned it to our local computer and also added a remote pointing back to the original repository. Now we can start making our desired changes. To do this, we are going to want to create a branch to work on. This branch will be independent of the clean, functioning “main” code and is a safe place for you to delete, modify and add code. You can actually have multiple branches (for different features) that you’re working on at the same time. To create a branch called “new_feature”, use the following:

```bash
git checkout -b new_feature
```

You can verify that you created the branch by using the following command which will show you all your local and remote branches:

```bash
git branch -a
```

**5. Make changes**

Now that you have an independent workspace (a branch) to work on, that will not break any of the existing code, you can get to work implementing your changes. As you work you will `add` and `commit` changes you make. It is likely that the longer you take to implement your changes, the more changes could be made to the original “upstream” code - which could be problematic, especially if the code you are changing on your branch also gets changed in the upstream repository, which can leave you with a bunch of troublesome “merge conflicts” to deal with later on. If you want to make sure your branch stays up-to-date with the original repository you forked, you’ll need to do two things. Firstly, update your “main” fork of the original repository by checking out the main branch and pulling from the upstream repository:

```bash
git checkout main
```

```bash
git pull upstream main
```

Then, go back to your branch and merge it with the main to incorporate any new changes:

```bash
git checkout new_feature
```

```bash
git merge main
```

**6. Push changes**

When you’ve made all the changes you want to make to the code you’ll want to push it to your remote “origin” to get it ready to show to the maintainers of the “upstream” (original) repository you wanted to contribute to in the first place. To do this:

```bash
git push origin new_feature
```

This will push your branch to your forked copy of the original repository.

**7. Open a pull request**

Finally, we can open a “pull request” which essentially asks the maintainers of the original repository to take a look at and hopefully integrate your code changes into their repository. To open a pull request, go to the GitHub website, navigate to your “new_feature” branch and follow the prompts to open a pull request.

**Or these steps:**

1.  Navigate to the original repository where you created your fork.
2.  Above the list of files, click  **Pull request**.

![image](https://docs.github.com/assets/cb-26570/images/help/pull_requests/pull-request-start-review-button.png)

3. On the Compare page, click **compare across forks**.

![image](https://docs.github.com/assets/cb-10913/images/help/pull_requests/compare-across-forks-link.png)

4. In the "base branch" drop-down menu, select the branch of the upstream repository you'd like to merge changes into (main branch in our case).

![image](https://docs.github.com/assets/cb-44606/images/help/pull_requests/choose-base-fork-and-branch.png)

5. In the "head fork" drop-down menu, select your fork, then use the "compare branch" drop-down menu to select the branch you made your changes in.

![image](https://docs.github.com/assets/cb-43627/images/help/pull_requests/choose-head-fork-compare-branch.png)

6. Type a title and description for your pull request , describing the changes that you made.

![image](https://docs.github.com/assets/cb-28826/images/help/pull_requests/pullrequest-description.png)

7. For me to make changes to your pull request, select **Allow edits from maintainers**.

![image](https://docs.github.com/assets/cb-34070/images/help/pull_requests/allow-maintainers-to-make-edits.png)

8. To create a pull request that is ready for review, click **Create Pull Request**.

![image](https://docs.github.com/assets/cb-26223/images/help/pull_requests/pullrequest-send.png)

**8. Updating your fork**

Once I accept your changes, the code you wrote will now be incorporated into the this repository. Once this is done, you’ll want to update your fork of the original repository (because it now includes the changes you added through your branch and pull request workflow). Locally, we will make sure we are on the main branch, and we will pull changes from the upstream (original) repository:

```bash
git checkout main
```

```bash
git pull upstream main
```

**9. Deleting branches**

Finally we can now delete our feature branch (both locally and remotely) because we no longer need it:

```bash
git branch -d new_feature
```

```bash
git push origin --delete new_feature
```

> **Note:** that during the pull request workflow on GitHub, you may have already deleted your feature branch by following prompts on GitHub which is fine too.
